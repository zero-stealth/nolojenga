"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/Auth";
import Logo from "@/public/assets/company.png";
import styles from "@/app/style/template.module.css";

export default function TemplateEmail() {
  const { toggleAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/authentication/chooseAccount", { scroll: false });
      toggleAuth();
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [toggleAuth, router]);

  return (
    <div className={styles.templateComponent}>
      <div className={styles.emailComponent}>
        <div className={styles.logoComponent}>
          <Image
            className={styles.logoImage}
            src={Logo}
            alt="Logo image"
            height={24}
            priority
          />
          <h1>P.O.Box 00100</h1>
          <h1>Nairobi</h1>
        </div>
        <div className={styles.emailInfo}>
          <h1>Dear Client</h1>
          <p>
            I hope this email finds you well. On behalf of the entire NoloJenga
            team, I am thrilled to extend a warm welcome to you! We are
            delighted to have you on board as our valued client, and we are
            eager to embark on this journey together. At NoloJenga, our mission
            is to provide innovative and comprehensive legal solutions tailored
            to meet your unique needs. We understand that navigating the legal
            landscape can be complex, and we are committed to simplifying the
            process for you. Whether you are seeking expert advice, drafting
            legal documents, or resolving disputes, our team is dedicated to
            delivering exceptional service and ensuring your peace of mind. As
            you settle in, please feel free to explore our user-friendly
            platform, where you can access a wide range of legal resources and
            tools designed to empower you. Additionally, our team of experienced
            legal professionals is here to assist you every step of the way. If
            you have any questions or require assistance, do not hesitate to
            reach out to our customer support team at [support@email.com]. We
            look forward to building a strong and successful partnership with
            you. Your satisfaction is our top priority, and we are committed to
            exceeding your expectations. Once again, welcome to NoloJenga! We
            are excited to have you on board, and we are confident that together
            we can achieve great things.
          </p>
        </div>
      </div>
    </div>
  );
}
