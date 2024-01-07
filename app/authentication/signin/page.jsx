"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import Logo from "@/public/assets/company.png";
import { useAuthStore } from "@/app/store/Auth";
import styles from "@/app/style/auth.module.css";
import toast from "react-hot-toast";
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

export default function SignIn() {
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

  const { toggleAuth } = useAuthStore();
  const router = useRouter();

  const handleTermsChange = (event) => {
    setTerms(event.target.checked);
  };

  const SignInGoogle = () => {};

  const SignInFacebook = () => {};

  const SignInApple = () => {};

  const forgotPassword = () => {
    router.push("resetPassword", { scroll: false });
  };

  const Signup = () => {
    router.push("signup", { scroll: false });
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
      toast.success("almost there");
    } catch (error) {
      console.error(error);
      toast.error("Sign in failed");
    } finally {
      setIsLoading(false);
    }
    toggleAuth();

    router.push("/authentication/chooseAccount", { scroll: false });
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
            <h1>Sign in</h1>
            <p>Welcome back</p>
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
          {/*  password */}
          <div className={styles.authInputContainer}>
            <label htmlFor="password" className={styles.authLabel}>
              password
            </label>
            <div className={styles.authInput}>
              <PasswordIcon
                className={styles.authIcon}
                alt="password icon"
                width={16}
                height={16}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
              />
            </div>
          </div>
          <div className={styles.formChangeS} onClick={forgotPassword}>
            Forgot Password
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.formAuthButton}
          >
            {isLoading ? <Loader /> : "Sign in"}
          </button>
          <div className={styles.otherOptions}>
            <div className={styles.otherOptionsHead}>
              <div className={styles.lineOptions}></div>
              <span>Or continue with</span>
              <div className={styles.lineOptions}></div>
            </div>
            <div className={styles.optionBoxContainer} onClick={SignInGoogle}>
              <div className={styles.optionBox}>
                <Image
                  className={styles.authLogoImage}
                  src={GoogleIcon}
                  alt="Google Icon"
                  height={20}
                  priority
                />
              </div>
              <div className={styles.optionBox} onClick={SignInFacebook}>
                <Image
                  className={styles.authLogoImage}
                  src={FacebookIcon}
                  alt="Facebook icon"
                  height={24}
                  priority
                />
              </div>
              <div className={styles.optionBox} onClick={SignInApple}>
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
            Already have an account? <span onClick={Signup}>SIgn up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
