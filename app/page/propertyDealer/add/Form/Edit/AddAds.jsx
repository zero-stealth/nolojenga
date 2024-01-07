"use client";

import Image from "next/image";
import toast from 'react-hot-toast';
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import PayCard from "@/app/components/PayCard";
import styles from "@/app/style/ads.module.css";
import Dropdown from "@/app/components/Dropdown";
import PopupComponent from "@/app/components/Popup";
import BannerImage from "@/public/assets/banner.png";
import ProfileImage from "@/public/assets/profile.png";



import { CameraIcon } from "@heroicons/react/24/outline";

const adsTo = ["land", "property"];
const PayCardData = [
  {
    id: 1,
    Sender: ProfileImage,
    Reciever: BannerImage,
    price: "50.00",
    RecieverAccount: "070000000",
    SenderAccount: "0727388399",
  },
];

export default function AddAds() {
  const fileInputRef = useRef(null);
  const [IdImage, setIdImage] = useState(null);
  const [selected, setSelected] = useState([]);
  const [payPopup, setPayPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const togglePayPopup = () => {
    setPayPopup(!payPopup);
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    togglePayPopup()

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.success('ads added succesfully')
    } catch (error) {
      console.error(error);
      toast.error('ads not added')
    } finally {
      setIsLoading(false);
    }

  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setIdImage(imageUrl);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1>Post Ads</h1>
        </div>
        <div className={styles.formChangeUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
            style={{ display: "none" }}
          /> 
          <div className={styles.AdsSection}>
            {IdImage === null ? (
              <div
                className={styles.uploadCameraIcon}
                onClick={handleIconClick}
              >
                <CameraIcon
                  className={styles.CameraIcon}
                  alt="Camera Icon"
                  width={40}
                  height={40}
                />
              </div>
            ) : (
              <Image
                src={IdImage}
                alt="Id Image"
                className={styles.IdImage}
                layout="fill"
                quality={100}
                objectFit="cover"
                priority
              />
            )}
          </div>
        </div>
        {/*  type */}
        <div className={styles.formInputContainer}>
          <label className={styles.formLabel}>type</label>
          <Dropdown
            options={adsTo}
            dropPlaceHolder="choose"
            onSelect={setSelected}
          />
        </div>
        {/*  About(optional) */}
        <div className={styles.formInputContainer}>
          <label className={styles.formLabel}>About(optional)</label>
          <textarea
            type="text"
            name="Message"
            id="Message"
            className={styles.filterInputTextArea}
            placeholder="send a message"
            rows={4}
          />
        </div>
        <div className={styles.formInputContainer}>
          <label htmlFor="link" className={styles.formLabel}>
            Link
          </label>

          <div className={styles.formInput}>
            <input
              type="text"
              name="link"
              id="link"
              placeholder="htts://nolojenga.com/Shaniz/land"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={styles.formformButton}
        >
          {isLoading ? <Loader /> : "Pay ksh 50 To Post"}
        </button>
        <PopupComponent
          Top={0}
          Left={0}
          Right={0}
          Bottom={0}
          Width={300}
          onClose={togglePayPopup}
          content={
            <div className={styles.formAccount}>
              <h1>Pay for advertisement</h1>
              {PayCardData.map((d) => (
                <PayCard
                  key={d.id}
                  PayPrice={d.price}
                  SenderImage={d.Sender}
                  RecieverImage={d.Reciever}
                  SenderAccount={d.SenderAccount}
                  RecieverAccount={d.RecieverAccount}
                />
              ))}
            </div>
          }
          isOpen={payPopup}
        />
      </form>
  );
}
