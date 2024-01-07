"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import Logo from "@/public/assets/company.png";
import styles from "@/app/style/auth.module.css";
import auth1Image from "@/public/assets/auth1.jpg";
import auth2Image from "@/public/assets/auth2.jpg";
import auth3Image from "@/public/assets/auth3.jpg";
import auth4Image from "@/public/assets/auth4.jpg";
import auth5Image from "@/public/assets/auth5.jpg";
import auth6Image from "@/public/assets/auth6.jpg";
import AppleIcon from "@/public/icons/AppleIcon.svg";
import GoogleIcon from "@/public/icons/GoogleIcon.svg";
import FacebookIcon from "@/public/icons/FacebookIcon.svg";

import {
  KeyIcon as PasswordIcon,
  UserIcon as UserNameIcon,
  EnvelopeIcon as EmailIcon,
  ArrowRightOnRectangleIcon as LoginIcon,
} from "@heroicons/react/24/outline";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [terms, setTerms] = useState(false);
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

  const handleTermsChange = (event) => {
    setTerms(event.target.checked);
  };

  const SignUpGoogle = () => {};

  const SignUpFacebook = () => {};

  const SignUpApple = () => {};

  const forgotPassword = () => {
    router.push("resetPassword", { scroll: false });
  };

  const SignIn = () => {
    router.push("signin", { scroll: false });
  };

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.success("almost there");
    } catch (error) {
      console.error(error);
      toast.error("Sign up failed");
    } finally {
      setIsLoading(false);
    }

    router.push("addInfo", { scroll: false });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
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
            <h1>Sign up</h1>
            <p>We are happy you are joining us</p>
          </div>
          {/* Username */}
          <div className={styles.authInputContainer}>
            <label htmlFor="username" className={styles.authLabel}>
              Username
            </label>
            <div className={styles.authInput}>
              <UserNameIcon
                className={styles.authIcon}
                alt="Username icon"
                width={16}
                height={16}
              />
              <input
                type="text"
                name="username"
                id="username"
                placeholder="nalojenga"
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
          <div className={styles.formChange}>
            <div className={styles.termsContainer}>
              <input
                type="checkbox"
                id="terms"
                checked={terms}
                onChange={handleTermsChange}
              />
              <label htmlFor="terms">Accept terms and condition</label>
            </div>
            <span onClick={forgotPassword}>Forgot Password</span>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.formAuthButton}
          >
            {isLoading ? <Loader /> : "Sign up"}
          </button>
          <div className={styles.otherOptions}>
            <div className={styles.otherOptionsHead}>
              <div className={styles.lineOptions}></div>
              <span>Or continue with</span>
              <div className={styles.lineOptions}></div>
            </div>
            <div className={styles.optionBoxContainer} onClick={SignUpGoogle}>
              <div className={styles.optionBox}>
                <Image
                  className={styles.authLogoImage}
                  src={GoogleIcon}
                  alt="Google Icon"
                  height={20}
                  priority
                />
              </div>
              <div className={styles.optionBox} onClick={SignUpFacebook}>
                <Image
                  className={styles.authLogoImage}
                  src={FacebookIcon}
                  alt="Facebook icon"
                  height={24}
                  priority
                />
              </div>
              <div className={styles.optionBox} onClick={SignUpApple}>
                <Image
                  className={styles.authLogoImage}
                  src={AppleIcon}
                  alt="Apple icon"
                  height={20}
                  priority
                />
              </div>
            </div>
          </div>
          <p>
            Already have an account? <span onClick={SignIn}> Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
}
