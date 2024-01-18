"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/style/navigation.module.css";
import { ChevronDoubleLeftIcon as BackIcon } from "@heroicons/react/24/outline";

export default function NavBarComponent() {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className={styles.navbtnComponent}>
      <button className={styles.navBtn} onClick={goBack}>
        <BackIcon
          className={styles.NavBack}
          alt="back icon"
          width={16}
          height={16}
        />
        Back
      </button>
    </div>
  );
}
