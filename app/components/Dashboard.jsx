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
  HomeIcon,
  FolderIcon as ManagementIcon,
  BookmarkIcon as BookedIcon,
  Cog6ToothIcon as SettingsIcon,
  XCircleIcon as ExitIcon,
  CurrencyDollarIcon as SaleIcon,
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
    router.push("/page/tenant/settings", { scroll: false });
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
          href="/page/tenant/dashboard"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/tenant/dashboard" || pathname == "/"
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
          href="/page/tenant/rentals"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/tenant/rentals" ||
              pathname.startsWith("/page/tenant/rentals/rental/") ||
              pathname.startsWith("/page/tenant/rentals/view/") || 
              pathname.startsWith("/page/tenant/rentals/rental/payments")
                ? styles.activeDash
                : ""
            }`}
          >
            <HomeIcon className={styles.dashIcon} alt="rental icon" />
            <h1>rentals</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />
          </div>
        </Link>
        <Link
          href="/page/tenant/sales"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/tenant/sales" ||
              pathname.startsWith("/page/tenant/sales/sale/") ||
              pathname.startsWith("/page/tenant/sales/sale/payment/") ||
              pathname.startsWith("/page/tenant/sales/land/") ||
              pathname.startsWith("/page/tenant/sales/land/payment/")
              ? styles.activeDash
                : ""
            }`}
          >
            <SaleIcon className={styles.dashIcon} alt="sale icon" />
            <h1>For sale</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />
          </div>
        </Link>
        <Link
          href="/page/tenant/services"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/tenant/services" ? styles.activeDash : ""
            }`}
          >
            <ServiceIcon className={styles.dashIcon} alt="service icon" />
            <h1>service</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />
          </div>
        </Link>
        <Link
          href="/page/tenant/transaction"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/tenant/transaction" ? styles.activeDash : ""
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
          href="/page/tenant/booked"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/tenant/booked" ? styles.activeDash : ""
            }`}
          >
            <BookedIcon className={styles.dashIcon} alt="booked icon" />
            <h1>booked</h1>
            <Image
              src={PipeIcon}
              className={styles.pipeIcon}
              alt="pipe icon"
              height={20}
            />
          </div>
        </Link>
        <Link
          href="/page/tenant/settings"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/tenant/settings" ? styles.activeDash : ""
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
