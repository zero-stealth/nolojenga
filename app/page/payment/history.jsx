"use client";

import { useState } from "react";
import styles from "@/app/style/history.module.css";

export default function HistoryPage() {
  const [data, setData] = useState("");

  return (
    <div className={styles.historyContainer}>
      <div className={styles.topupHeader}>
        <h1>Payment History </h1>
      </div>
      <div className={styles.historyMain}>
        <h1>No payment history</h1>
      </div>
    </div>
  );
}
