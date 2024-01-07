"use client";
import {
  BellIcon as NoNotificationIcon,
  MagnifyingGlassIcon as SearchIcon,
  BellAlertIcon as NotificationOnIcon,
  BellSlashIcon as CancelNotification,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState , useEffect } from "react";
import { usePathname } from "next/navigation";
import AImage from "@/public/assets/auth1.jpg";
import Settings from "@/app/components/Settings";
import PopupComponent from "@/app/components/Popup";
import styles from "@/app/style/navBar.module.css";
import ProfileImage from "@/public/assets/profile.png";
import NotificationPage from "@/app/components/notification/page";
import { useNotificationStore } from "@/app/store/Notification";
import { useProfileStore } from "@/app/store/Profile";

export default function NavBarComponent() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [accountType, setAccountType] = useState(null);
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);
  const {
    isNotificationOn,
    openNotification,
    toggleNotification,
    toggleCancelNotification,
    cancelNotification,
  } = useNotificationStore();

  const { showProfile, toggleProfile } = useProfileStore();
  useEffect(() => {
    const item = localStorage.getItem("account");
    setAccountType(item);
  }, []);

  const toggleNotificationPopup = () => {
    setIsNotificationPopupOpen(!isNotificationPopupOpen);
  };

  const NotificationIcon = cancelNotification
    ? CancelNotification
    : isNotificationOn
    ? NotificationOnIcon
    : NoNotificationIcon;

  const handleSearch = () => {
    console.log(`Performing search: ${searchQuery}`);
  };

  return (
    <div className={styles.NavBarComponent}>
      {accountType !== "tenant" ? (
        <div className={styles.NavBarApartment}>
          <Image
            className={styles.NavBarProfileApartment}
            src={AImage}
            alt="Apartment image"
            width={30}
            height={30}
          />
          <h1>Uridhi Apartments</h1>
        </div>
      ) : (
        <div className={styles.NavBarSearch}>
          <SearchIcon
            className={styles.NavBarSearchIcon}
            alt="Search icon"
            width={16}
            height={16}
          />
          <input
            type="text"
            name="Search"
            id="Search"
            className={styles.navBarSearchInput}
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onBlur={handleSearch}
          />
        </div>
      )}

      <div className={styles.navLeftWrapper}>
        {/* Notification Link */}
        <div
          className={styles.NavBarLinklNotification}
          onClick={() => {
            cancelNotification
              ? toggleCancelNotification()
              : toggleNotification();
            toggleNotificationPopup();
          }}
        >
          <NotificationIcon
            className={`${styles.NavBarIcon} ${
              isNotificationOn ? styles.activeNotificationC : ""
            }`}
            alt="Notification icon"
            width={20}
            height={20}
          />
        </div>
        {/* Profile Link */}
        <div
          className={styles.NavBarLinkProfileWrapper}
          onClick={toggleProfile}
        >
          <Image
            className={`${styles.NavBarProfileImage} ${
              showProfile === "true" ? styles.activeNavBarProfileImage : ""
            }`}
            src={ProfileImage}
            alt="Profile image"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>
      <PopupComponent
        Width={500}
        onClose={toggleNotificationPopup}
        Top={60}
        Right={60}
        content={<NotificationPage />}
        isOpen={isNotificationPopupOpen}
      />
      <PopupComponent
        Width={300}
        onClose={toggleProfile}
        Top={70}
        Right={10}
        content={<Settings />}
        isOpen={showProfile}
      />
    </div>
  );
}
