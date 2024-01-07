"use client";

import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/table.module.css";
import BackNavigation from "@/app/components/navigation";

export default function TableInfo({ params }) {
  return (
    <div className={styles.tableInfo}>
      <NavBar />
      <div>
      <BackNavigation />
        {params.id}
      </div>
    </div>
  );
}
