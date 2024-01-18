"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/style/settingsManagement.module.css";

import {
  BanknotesIcon as SaleIcon,
  Cog6ToothIcon as SettingsIcon,
  ChevronDoubleUpIcon as UpgradeIcon,
  EyeIcon as ShowBalanceIcon,
  EyeSlashIcon as HideBalanceIcon,
  ArrowRightOnRectangleIcon as LogoutIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";


export default function Settings() {
  const pathname = usePathname();
  const [Balance, setBalance] = useState(50000);
  const [showBalance, setBalanceState] = useState(false);

  const toggleBalance = () => {
    setBalanceState(!showBalance);
  };

  const BalanceIconStatus = showBalance ? ShowBalanceIcon : HideBalanceIcon;


  return (
    <div className={styles.SettingsManagementContainer}>
      <Link className={styles.SettingsManagementLink} href="dashboard">
        <div
          className={
            pathname === "dashboard" ? styles.SettingsManagementActive : ""
          }
        >
          Manage Your Account
        </div>
        <UpgradeIcon
          className={`${styles.SettingsManagementIcon} ${
            pathname === "dashboard" ? styles.SettingsManagementActive : ""
          }`}
          alt="dashboard icon"
          width={20}
          height={20}
        />
      </Link>
      <Link className={styles.SettingsManagementLink} href="settings">
        <div
          className={
            pathname === "settings" ? styles.SettingsManagementActive : ""
          }
        >
          Sponsor Ads
        </div>
        <SaleIcon
          className={`${styles.SettingsManagementIcon} ${
            pathname === "settings" ? styles.SettingsManagementActive : ""
          }`}
          alt="settings icon"
          width={20}
          height={20}
        />
      </Link>
      <Link className={styles.SettingsManagementLink} href="settings">
        <div
          className={
            pathname === "settings" ? styles.SettingsManagementActive : ""
          }
        >
          Settings
        </div>
        <SettingsIcon
          className={`${styles.SettingsManagementIcon} ${
            pathname === "settings" ? styles.SettingsManagementActive : ""
          }`}
          alt="settings icon"
          width={20}
          height={20}
        />
      </Link>
      <Link className={styles.SettingsManagementLink} href="transaction">
        <div
          className={`${styles.SettingsManagementspan} ${
            pathname === "transaction" ? styles.SettingsManagementActive : ""
          }`}
        >
          <span>Wallet </span>

          {showBalance ? <span> Ksh. {Balance}</span> : <div className={styles.hideBalance}></div>}
        </div>
        <BalanceIconStatus
          className={`${styles.SettingsManagementIcon} ${
            pathname === "transaction" ? styles.SettingsManagementActive : ""
          }`}
          onClick={toggleBalance}
          alt="transaction icon"
          width={20}
          height={20}
        />
      </Link>
      <Link className={styles.SettingsManagementLink} href="/authentication/signin">
        <div
          className={
            pathname === "/authentication/signin" ? styles.SettingsManagementActive : ""
          }
        >
          Logout
        </div>
        <LogoutIcon
          className={`${styles.SettingsManagementIcon} ${
            pathname === "/authentication/signin" ? styles.SettingsManagementActive : ""
          }`}
          alt="logout icon"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
