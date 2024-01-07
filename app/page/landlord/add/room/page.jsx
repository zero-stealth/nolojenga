"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/addRental.module.css";
import {
  CameraIcon,
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

export default function AddRental() {
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
      <NavBar/>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1>Add Room</h1>
        </div>
        <div className={styles.formContainerInner}>
          <div className={styles.ContainSide}>
            {/* Property Name */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Door Number</label>
              <div className={styles.formInput}>
                <ApartMentIcon
                  className={styles.formInputIcon}
                  alt="Door icon"
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  name="doorNumber"
                  id="DoorNumber"
                  placeholder="B-54"
                />
              </div>
            </div>
            {/* Floor */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Floor</label>
              <div className={styles.formInput}>
                <ApartMentIcon
                  className={styles.formInputIcon}
                  alt="Floor icon"
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  name="floor"
                  id="floor"
                  placeholder="Ground Floor "
                />
              </div>
            </div>
            {/* Property Name */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Property Name</label>
              <div className={styles.formInput}>
                <ApartMentIcon
                  className={styles.formInputIcon}
                  alt="PropertyName icon"
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  name="PropertyName"
                  id="PropertyName"
                  placeholder="XYZ Apartments"
                />
              </div>
            </div>
            {/* Room Size */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Room Size</label>
              <div className={styles.formInput}>
                <ApartMentIcon
                  className={styles.formInputIcon}
                  alt="Room Size icon"
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  name="RoomSize"
                  id="RoomSize"
                  placeholder="Bedsitter or 100 x 100"
                />
              </div>
            </div>
            {/* Monthly Amount and Deposit */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Monthly Amount</label>
              <div className={styles.formInput}>
                <ApartMentIcon
                  className={styles.formInputIcon}
                  alt="monthly icon"
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  name="monthlyAmount"
                  id="monthlyAmount"
                  placeholder="15000"
                />
              </div>
              <label className={styles.formLabel}>Deposit</label>
              <div className={styles.formInput}>
                <ApartMentIcon
                  className={styles.formInputIcon}
                  alt="Deposit icon"
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  name="Deposit"
                  id="Deposit"
                  placeholder="30000"
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
            <button type="submit" disabled={isLoading} className={styles.btnRental}>
          {isLoading ? <Loader /> : "Add"}
        </button>
          </div>
        </div>
  
      </form>
    </div>
  );
}
