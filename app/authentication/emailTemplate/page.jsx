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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
    </div>
  );
}
