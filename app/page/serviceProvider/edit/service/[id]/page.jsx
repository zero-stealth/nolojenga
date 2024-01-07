"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation"; 
import Loader from "@/app/components/Loader";
import NavBar from "@/app/components/NavBar";
import Dropdown from "@/app/components/Dropdown";
import styles from "@/app/style/addRental.module.css";
import {
  CameraIcon,
  UserIcon as NameIcon,
  BanknotesIcon as AmountIcon,
} from "@heroicons/react/24/outline";

const ServicesData = ["Repair", "IspProvider", "Cleaning", "Electrician", "Plumbing", "Garbage", "Security"];
const StatusData = ["Available", "Not Available", "Busy"];

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
  const [selected, setSelected] = useState([]);

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
      toast.success("service added successfully");
    } catch (error) {
      console.error(error);
      toast.error("service not added");
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
          <h1>Edit Service</h1>
        </div>
        <div className={styles.formContainerInner}>
          <div className={styles.ContainSide}>
            {/* Name */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Name </label>
              <div className={styles.formInput}>
                <NameIcon
                  className={styles.formInputIcon}
                  alt="Name icon"
                  width={16}
                  height={16}
                />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Riley Josh"
                />
              </div>
            </div>
            {/* Service */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Service</label>
              <Dropdown
                options={ServicesData}
                dropPlaceHolder="choose a service"
                onSelect={setSelected}
              />
            </div>
            {/* Status */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Job Status</label>
              <Dropdown
                options={StatusData}
                dropPlaceHolder="Status"
                onSelect={setSelected}
              />
            </div>
            {/* Price */}
            <div className={styles.formInputContainer}>
              <label className={styles.formLabel}>Price</label>
              <div className={styles.formInput}>
                <AmountIcon
                  className={styles.formInputIcon}
                  alt="price icon"
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
            </div>
          </div>
          <div className={styles.ContainSideTwo}>
            <label className={styles.formLabel}>
              Some images will be used as a portfolio
            </label>
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
              {isLoading ? <Loader /> : "Edit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
