"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import Logo from "@/public/assets/company.png";
import styles from "@/app/style/auth.module.css";

import {
  UserIcon as UserNameIcon,
  IdentificationIcon as IdIcon,
  PhoneIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

export default function AddInfo() {
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [IdImage, setIdImage] = useState(null);

  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }

    router.push("success", { scroll: false });
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
    <div className={styles.authComponentAdd}>
      <div className={styles.authWrapper}>
        <div className={styles.authHeader}>
          <Image
            className={styles.authLogoImage}
            src={Logo}
            alt="logo image"
            height={30}
            priority
          />
        </div>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Add More Info</h1>
            <p>This info make your experience better</p>
          </div>{" "}
          {/* Id Number */}
          <div className={styles.authInputContainer}>
            <label htmlFor="IdNumber" className={styles.authLabel}>
              ID Number
            </label>
            <div className={styles.authInput}>
              <IdIcon
                className={styles.authIcon}
                alt="Id number icon"
                width={16}
                height={16}
              />
              <input
                type="text"
                name="IdNumber"
                id="IdNumber"
                placeholder="Enter your Id Number"
              />
            </div>
          </div>
          {/* Full Name */}
          <div className={styles.authInputContainer}>
            <label htmlFor="FullName" className={styles.authLabel}>
              Full Name
            </label>
            <div className={styles.authInput}>
              <UserNameIcon
                className={styles.authIcon}
                alt="full name icon"
                width={16}
                height={16}
              />
              <input
                type="text"
                name="FullName"
                id="FullName"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          {/*  Phone Number */}
          <div className={styles.authInputContainer}>
            <label htmlFor="PhoneNumber" className={styles.authLabel}>
              Phone Number
            </label>
            <div className={styles.authInput}>
              <PhoneIcon
                className={styles.authIcon}
                alt="Phone number icon"
                width={16}
                height={16}
              />
              <input
                type="text"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className={styles.formChangeUpload}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <div className={styles.profileSection}>
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
          <button
            type="submit"
            disabled={isLoading}
            className={styles.formAuthButton}
          >
            {isLoading ? <Loader /> : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
