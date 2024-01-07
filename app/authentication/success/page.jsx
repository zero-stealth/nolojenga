"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/style/success.module.css";

import { CheckCircleIcon as PassIcon } from "@heroicons/react/24/outline";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("emailTemplate", { scroll: false });
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [router]); 

  return (
    <div className={styles.sucessComponent}>
      <div className={styles.checkComponent}>
        <PassIcon
          className={styles.CheckIcon}
          alt="Check icon"
          width={40}
          height={40}
        />
        <p>Successfully submitted account under review</p>
      </div>
    </div>
  );
}
