  "use client";

  import Link from "next/link";
  import Image from "next/image";
  import { usePathname } from "next/navigation";
  import { useShowStore } from "@/app/store/Show";
  import { useFilterStore } from "@/app/store/Filter";
  import { useNotificationStore } from "@/app/store/Notification";
  import styles from "@/app/style/mobileNav.module.css";
  import ProfileImage from "@/public/assets/profile.png";

  import {
    HomeIcon,
    BellIcon as NoNotificationIcon,
    BellAlertIcon as NotificationOnIcon,
    MagnifyingGlassIcon as SearchIcon,
  } from "@heroicons/react/24/outline";

  import { Squares2X2Icon as MenuIcon } from "@heroicons/react/24/solid";

  export default function MobileNavComponent() {
    
    const pathname = usePathname();
    const { show, toggleShow } = useShowStore();
    const { showFilter, toggleFilter } = useFilterStore();
    const { isNotificationOn, toggleNotification } =
      useNotificationStore();
    const NotificationIcon = isNotificationOn
      ? NotificationOnIcon
      : NoNotificationIcon

    const clearLinkNames = () => {
      const linkElements = document.querySelectorAll(
        `.${styles.mobileLink} .${styles.linkName}`
      );
      linkElements.forEach((element) =>
        element.classList.remove(styles.linkName)
      );
    };


    return (
      <div className={styles.mobileContainer}>
        {/* Home Link */}
        <div
          className={styles.mobileLinkWrapper}
          onClick={() => clearLinkNames()}
        >
          <Link className={styles.mobileLink} href="dashboard">
            <HomeIcon
              className={`${styles.mobileIcon} ${
                pathname.endsWith("dashboard")  ? styles.linkName : ""
              }`}
              alt="Home icon"
              width={24}
              height={24}
            />
            <div
              className={pathname.endsWith("dashboard")  ? styles.linkName : ""}
            >
              <span>Home</span>
            </div>
          </Link>
        </div>

        {/* Search Link */}
        <div className={styles.mobileLinkWrapper}>
          <div
            className={styles.mobileLink}
            onClick={() => {
              toggleFilter();
              clearLinkNames();
            }}
          >
            <SearchIcon
              className={styles.mobileIcon}
              alt="Search icon"
              width={24}
              height={24}
            />
            <div>
              <span>Search</span>
            </div>
          </div>
        </div>

        {/* Menu Link */}
        <div className={styles.mobileMenuWrapper} onClick={() => toggleShow()}>
          <div className={styles.mobileMenu}>
            <div
              className={`${styles.innerMobile} ${show ? styles.linkActive : ""}`}
            >
              <MenuIcon
                className={styles.menuIcon}
                alt="Menu icon"
                width={34}
                height={34}
              />
            </div>
          </div>
          <div className={show ? styles.linkName : ""}>
            <span>Menu</span>
          </div>
        </div>

        {/* Notification Link */}
        <div
          className={styles.mobileLinkWrapper}
          onClick={() => {
            clearLinkNames();
            toggleNotification();
          }}
        >
          <Link className={styles.mobileLink} href="notification">
            <NotificationIcon
              className={`${styles.mobileIcon} ${
                pathname.endsWith("notification") ? styles.linkName : ""
              }`}
              alt="Notification icon"
              width={24}
              height={24}
            />
            <div
              className={pathname.endsWith("notification") ? styles.linkName : ""}
            >
              <span>Notification</span>
            </div>
          </Link>
        </div>
        {/* Profile Link */}
        <div
          className={styles.mobileLinkWrapper}
          onClick={() => clearLinkNames()}
        >
          <Link className={styles.profileLink} href="settingsManagement">
            <Image
              className={`${styles.mobileProfileImage} ${
                pathname.endsWith("settingsManagement") ||  pathname === "/page/settingsManagement" ? styles.activeMobileProfileImage : ""
              }`}
              src={ProfileImage}
              alt="Profile icon"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
      </div>
    );
  }
