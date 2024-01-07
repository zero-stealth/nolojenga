"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/company.png";
import { useShowStore } from "@/app/store/Show";
import { useAuthStore } from "@/app/store/Auth";
import PipeIcon from "@/public/icons/pipeIcon.svg";
import styles from "@/app/style/dashboard.module.css";
import DashboardImage from "@/public/icons/Dashboard.svg";
import { usePathname, useRouter } from "next/navigation";

import {
  BookmarkIcon as BookedIcon,
  UserGroupIcon as TenantIcon,
  ArrowLeftOnRectangleIcon as RoomIcon,
  Cog6ToothIcon as SettingsIcon,
  XCircleIcon as ExitIcon,
  CreditCardIcon as TransactionIcon,
  RectangleGroupIcon as DashboardIcon,
  ServerStackIcon as ServiceIcon,
  ArrowRightOnRectangleIcon as LogoutIcon,
} from "@heroicons/react/24/outline";

export default function DashboardComponent() {
  const { show, toggleShow } = useShowStore();
  const { isAccountPro } = useAuthStore();
  const { toggleAuth } = useAuthStore();
  const pathname = usePathname();
  const router = useRouter();

  const SignOut = () => {
    toggleAuth();
    router.push("/authentication/signin", { scroll: false });
  };

  const goToSettings = () => {
    router.push("/page/landlord/settings", { scroll: false });
  };

  return (
    <div className={`${styles.appSideNav} ${show ? styles.show : ""}`}>
      <div className={styles.dashboardExit} onClick={() => toggleShow()}>
        <ExitIcon
          className={styles.exitIcon}
          alt="Exit icon"
          width={20}
          height={20}
        />
      </div>
      <div className={styles.dashContainer}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="logo icon"
          height={30}
          priority
        />
        <Link
          href="/page/landlord/dashboard"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/landlord/dashboard" ||
              pathname == "/" ||
              pathname.startsWith("/page/landlord/add/") ||
              pathname.startsWith("/page/landlord/rent/") ||
              pathname.startsWith("/page/landlord/edit/")
                ? styles.activeDash
                : ""
            }`}
          >
            <DashboardIcon className={styles.dashIcon} alt="dashboard icon" />
            <h1>Dashboard</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />  
          </div>
        </Link>
        <Link
          href="/page/landlord/tenants"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/landlord/tenants" ||
              pathname.startsWith("/page/landlord/tenants/")
                ? styles.activeDash
                : ""
            }`}
          >
            <TenantIcon className={styles.dashIcon} alt="Tenant icon" />
            <h1>Tenants</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />
          </div>
        </Link>
        <Link
          href="/page/landlord/rooms"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/landlord/rooms" ||
              pathname.startsWith("/page/landlord/rooms/")
                ? styles.activeDash
                : ""
            }`}
          >
            <RoomIcon className={styles.dashIcon} alt="Rooms icon" />
            <h1>Rooms</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />
          </div>
        </Link>
        <Link
          href="/page/landlord/services"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/landlord/services" ||
              pathname.startsWith("/page/landlord/services/")
                ? styles.activeDash
                : ""
            }`}
          >
            <ServiceIcon className={styles.dashIcon} alt="service icon" />
            <h1>services</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />
          </div>
        </Link>
        <Link
          href="/page/landlord/transaction"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/landlord/transaction" ? styles.activeDash : ""
            }`}
          >
            <TransactionIcon
              className={styles.dashIcon}
              alt="transaction icon"
            />
            <h1>transaction</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />
          </div>
        </Link>
        <Link
          href="/page/landlord/settings"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/landlord/settings" ? styles.activeDash : ""
            }`}
          >
            <SettingsIcon className={styles.dashIcon} />
            <h1>settings</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />
          </div>
        </Link>
        <div
          className={`${styles.innerDashLink} ${styles.logOutLink}`}
          onClick={SignOut}
        >
          <LogoutIcon className={styles.dashIcon} alt="logout icon" />
          <h1>Logout</h1>
        </div>
      </div>
      <div
        className={styles.dashAdsContainer}
        onClick={() => {
          goToSettings();
          toggleShow();
        }}
      >
        <p>
          Unlock more features by upgrading to <span>Paid plan</span>
        </p>
        <Image
          src={DashboardImage}
          alt="dashboard icon"
          height={30}
          className={styles}
        />
      </div>
    </div>
  );
}
