"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import Logo from "@/public/assets/company.png";
import toast from "react-hot-toast";
import styles from "@/app/style/auth.module.css";
import auth1Image from "@/public/assets/auth1.jpg";
import auth2Image from "@/public/assets/auth2.jpg";
import auth3Image from "@/public/assets/auth3.jpg";
import auth4Image from "@/public/assets/auth4.jpg";
import auth5Image from "@/public/assets/auth5.jpg";
import auth6Image from "@/public/assets/auth6.jpg";

import {
  KeyIcon as PasswordIcon,
  EnvelopeIcon as EmailIcon,
  ArrowPathRoundedSquareIcon as ResetIcon,
} from "@heroicons/react/24/outline";

export default function Reset() {
  const [isLoading, setIsLoading] = useState(false);
  const [bannerImages, setBannerImages] = useState([
    auth1Image,
    auth2Image,
    auth3Image,
    auth4Image,
    auth5Image,
    auth6Image,
  ]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const router = useRouter();


  const Signin = () => {
    router.push("signin", { scroll: false });
  };

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
      toast.success("Password has been reset");
    } catch (error) {
      console.error(error);
      toast.error("Password reset failed");

    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        (prevIndex + 1) % bannerImages.length
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [bannerImages]);

  return (
    <div className={styles.authComponent}>
    <div className={styles.authComponentBgImage}>
      <Image
        src={bannerImages[currentBannerIndex]}
        alt="Banner Image"
        layout="fill"
        quality="100"
        objectFit="cover"
      />
    </div>
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
            <h1>Reset password</h1>
            <p>change your password</p>
          </div>

          {/* Reset code */}
          <div className={styles.authInputContainer}>
            <label htmlFor="reset" className={styles.authLabel}>
            Reset
            </label>
            <div className={styles.authInput}>
              <ResetIcon
                className={styles.authIcon}
                alt="Reset Icon"
                width={16}
                height={16}
                priority
              />
              <input
                type="text"
                name="reset"
                id="reset"
                placeholder="type your reset code"
              />
            </div>
          </div>
        
          {/* Email */}
          <div className={styles.authInputContainer}>
            <label htmlFor="email" className={styles.authLabel}>
              Email
            </label>
            <div className={styles.authInput}>
              <EmailIcon
                className={styles.authIcon}
                alt="email icon"
                width={16}
                height={16}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="nolojenga@gmail.com"
              />
            </div>
          </div>
          {/* new password */}
          <div className={styles.authInputContainer}>
            <label htmlFor="newPassword" className={styles.authLabel}>
            new Password
            </label>
            <div className={styles.authInput}>
              <PasswordIcon
                className={styles.authIcon}
                alt="new password icon"
                width={16}
                height={16}
              />
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="*********"
              />
            </div>
          </div>
           {/* confirm password */}
           <div className={styles.authInputContainer}>
            <label htmlFor="confirmPassword" className={styles.authLabel}>
            confirm Password
            </label>
            <div className={styles.authInput}>
              <PasswordIcon
                className={styles.authIcon}
                alt="confirm password"
                width={16}
                height={16}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="*********"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.formAuthButton}
          >
            {isLoading ? <Loader /> : "Reset"}
          </button>
          <p>Remember your password? <span onClick={Signin}> Sign in</span></p>
        </form>
      </div>
    </div>
  );
}
