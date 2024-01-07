"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import NavBar from "@/app/components/NavBar";
import AreaIcon from "@/public/icons/AreaIcon.svg";
import styles from "@/app/style/addRental.module.css";
import {
  CameraIcon,
  MapIcon,
  BanknotesIcon,
  HomeModernIcon as ApartMentIcon,
  MapPinIcon as LocationIcon,
} from "@heroicons/react/24/outline";

const FileInput = ({ onChange, idImage }) => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.formChangeUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <div className={styles.AdsSection}>
        {idImage === null ? (
          <div className={styles.uploadCameraIcon} onClick={handleIconClick}>
            <CameraIcon
              className={styles.CameraIcon}
              alt="Camera Icon"
              width={30}
              height={30}
            />
          </div>
        ) : (
          <Image
            src={idImage}
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
  );
};

export default function AddLand() {
  const [imageUrls, setImageUrls] = useState([null, null, null, null, null]);
  const [payPopup, setPayPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const togglePayPopup = () => {
    setPayPopup(!payPopup);
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    togglePayPopup();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.success("Room added successfully");
    } catch (error) {
      console.error(error);
      toast.error("Room not added");
    } finally {
      setIsLoading(false);
    }
  }

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      const newImageUrls = [...imageUrls];
      newImageUrls[index] = imageUrl;
      setImageUrls(newImageUrls);
    }
  };

  return (
    <div className={styles.roomMain}>
      <NavBar />
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1>Add Land</h1>
        </div>
        <div className={styles.formContainerInner}>
          <div className={styles.ContainSide}>
            {/* Land Name */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Land Name</label>
              <div className={styles.formInput}>
                <MapIcon
                  className={styles.formInputIcon}
                  alt="land icon"
                  width={16}
                  height={16}
                />

                <input
                  type="text"
                  name="LandName"
                  id="LandName"
                  placeholder="land name"
                />
              </div>
            </div>
            {/* Land Size */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Land Size</label>
              <div className={styles.formInput}>
                <Image
                  className={styles.formInputIcon}
                  src={AreaIcon}
                  alt="area icon"
                  width={18}
                  height={18}
                  priority
                />
                <input
                  type="text"
                  name="RoomSize"
                  id="RoomSize"
                  placeholder="10000 acres"
                />
              </div>
            </div>

            {/* Price */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Price</label>
              <div className={styles.formInput}>
                <BanknotesIcon
                  className={styles.formInputIcon}
                  alt="Price icon"
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  name="Price"
                  id="Price"
                  placeholder="15000"
                />
              </div>
          {/* land Description */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>land Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              className={styles.filterInputTextAreaP}
              placeholder="description"
              rows={4}
            />
          </div>
            </div>
          </div>
          <div className={styles.ContainSideTwo}>
            <div className={styles.ContainSideInner}>
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className={styles.SideInner}>
                  <label className={styles.formLabel}>Image {index}</label>
                  <FileInput
                    onChange={(e) => handleImageUpload(e, index - 1)}
                    idImage={imageUrls[index - 1]}
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={styles.btnRental}
            >
              {isLoading ? <Loader /> : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
