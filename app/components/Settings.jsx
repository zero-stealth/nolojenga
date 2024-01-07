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
      <Link className={styles.SettingsManagementLink} href="settings">
        <div
          className={
            pathname === "/page/settings" ? styles.SettingsManagementActive : ""
          }
        >
          Manage Your Account
        </div>
        <UpgradeIcon
          className={`${styles.SettingsManagementIcon} ${
            pathname === "settings" ? styles.SettingsManagementActive : ""
          }`}
          alt="Management icon"
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
          alt="account icon"
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
          alt="account icon"
          width={20}
          height={20}
        />
      </Link>
      <Link className={styles.SettingsManagementLink} href="settings">
        <div
          className={`${styles.SettingsManagementspan} ${
            pathname === "settings" ? styles.SettingsManagementActive : ""
          }`}
        >
          <span>Wallet </span>

          {showBalance ? <span> Ksh. {Balance}</span> : <div className={styles.hideBalance}></div>}
        </div>
        <BalanceIconStatus
          className={`${styles.SettingsManagementIcon} ${
            pathname === "settings" ? styles.SettingsManagementActive : ""
          }`}
          onClick={toggleBalance}
          alt="account icon"
          width={20}
          height={20}
        />
      </Link>
      <Link className={styles.SettingsManagementLink} href="settings">
        <div
          className={
            pathname === "authentication/signin" ? styles.SettingsManagementActive : ""
          }
        >
          Logout
        </div>
        <LogoutIcon
          className={`${styles.SettingsManagementIcon} ${
            pathname === "authentication/signin" ? styles.SettingsManagementActive : ""
          }`}
          alt="account icon"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
