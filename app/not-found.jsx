"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; 
import Loader from "@/app/components/Loader";
import { useAuthStore } from "@/app/store/Auth";
import NotFoundImage from "@/public/assets/404.png";
import styles from "@/app/style/notfound.module.css";

export default function NotFound() {
  const { isAuth } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false); 

  const handleLinkClick = () => {
    setIsLoading(true);
  };

  return (
    <div className={styles.notFound}>
      <Image
        className={styles.notFoundImg}
        src={NotFoundImage}
        height={200}
        alt="Not found image"
        priority
      />
      {isAuth ? (
        <Link href="/page/dashboard" className={styles.notFoundBtn}  onClick={handleLinkClick}>
            {isLoading ? <Loader/> : "Return home"}
        </Link>
      ) : (
        <Link href="/authentication/signin" className={styles.notFoundBtn} onClick={handleLinkClick}>
            {isLoading ? <Loader/>  : "Login"}
        </Link>
      )}
    </div>
  );
}
