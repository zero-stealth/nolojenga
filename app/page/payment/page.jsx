"use client";

import { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Topup from "@/app/page/payment/topup";
import History from "@/app/page/payment/history";
import Methods from "@/app/page/payment/method";
import styles from "@/app/style/paymentPage.module.css";
import { ChevronDoubleLeftIcon as BackIcon } from "@heroicons/react/24/outline";


export default function PaymentPage() {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState("topup");

  const handleClick = (step) => {
    setActiveComponent(step);
  };

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "topup":
        return <Topup />;
      case "history":
        return <History />;
      case "methods":
        return <Methods />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.paymentPageContainer}>
      <div className={styles.paymentDashboard}>
        <div className={styles.paymentPageNav}>
          <div
            className={`${styles.navpage} ${activeComponent === "topup" ? styles.active : ""}`}
            onClick={() => handleClick("topup")}
          >
            Topup
          </div>
          <div
            className={`${styles.navpage} ${activeComponent === "history" ? styles.active : ""}`}
            onClick={() => handleClick("history")}
          >
            History
          </div>
          <div
            className={`${styles.navpage} ${activeComponent === "methods" ? styles.active : ""}`}
            onClick={() => handleClick("methods")}
          >
            Methods
          </div>
        </div>
        <button className={styles.paymentBtn} onClick={goBack}>
          <BackIcon
            className={styles.paymentBack}
            alt="back icon"
            width={16}
            height={16}
          />
          Back
        </button>
      </div>
      <div className={styles.paymentPageMain}>
        {renderActiveComponent()}
      </div>
    </div>
  );
}
