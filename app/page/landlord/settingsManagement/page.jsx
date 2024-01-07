"use client";

import styles from "@/app/style/settingsManagement.module.css";
import Settings from "@/app/components/Settings";

export default function SettingsManagement() {


  return (
    <div className={styles.SettingsManagementControl}>
      <Settings />
    </div>
  );
}
