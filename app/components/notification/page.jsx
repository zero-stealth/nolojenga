"use client";

import Image from "next/image";
import toast from 'react-hot-toast';
import ProfileImage from "@/public/assets/profile.png";
import styles from "@/app/style/notification.module.css";
import NonotificationImg from "@/public/assets/nope.png";
import { useNotificationStore } from "@/app/store/Notification";
import NotificationImage from "@/public/assets/notificationImg.jpg";

import {
  BellIcon as OnNotificationIcon,
  TrashIcon as DeleteIcon,
  BellSlashIcon as CancelNotification,
} from "@heroicons/react/24/outline";

export default function NotificationPage() {
  const {
    isNotificationOn,
    toggleNotification,
    toggleCancelNotification,
    toggleNotificationOn,
    cancelNotification,
  } = useNotificationStore();

  const NotificationIcon = cancelNotification
    ? CancelNotification
    : OnNotificationIcon;

  const data = [
    {
      id: 1,
      name: "Penguin",
      message: "Accepted the wiring job at corona, Karen",
      profileImage: ProfileImage,
      notificationImage: NotificationImage,
    },
  ];


  const deleteNotification = () => {
    data.pop();
  };

  return (
    <div className={styles.notificationComponent}>
      <div className={styles.notificationHeader}>
        <h1>Notifications</h1>
        <p onClick={toggleNotificationOn}>
          {isNotificationOn ? "Mark all as read" : "Unmark all as read"}
        </p>
      </div>
      <div className={styles.alertNotificationComponent}>
        <div className={styles.alertNotification}>
          <div className={styles.alertContainer}>
            <NotificationIcon
              className={styles.exitIcon}
              alt="allow notification icon"
              width={50}
              height={50}
            />

            {cancelNotification ? (
              <div className={styles.alertInfo}>
                <h1>Push Notifications disabled</h1>
                <p>No notification will be received</p>
              </div>
            ) : (
              <div className={styles.alertInfo}>
                <h1>Push Notifications Enabled</h1>
                <p>Automatically receive new notifications</p>
              </div>
            )}
          </div>

          <div
            className={`${styles.toggleNotification} ${
              cancelNotification ? styles.moveDot : ""
            }`}
            onClick={toggleCancelNotification}
          >
            <div className={styles.toggleDot}></div>
          </div>
        </div>
      </div>
      <div className={styles.lineNotification}></div>
      <div className={styles.notificationAreaComponent}>
        {data.length !== 0 ? (
          data.map((notification) => (
            <div className={styles.notificationArea} key={notification.id}>
              <div className={styles.notification}>
                <Image
                  className={styles.notificationProfileImage}
                  src={notification.profileImage}
                  alt="Notification Profile Image"
                  width={50}
                  height={50}
                  priority
                />
                <div className={styles.notificationInfo}>
                  <h1>{notification.name}</h1>
                  <p>{notification.message}</p>
                </div>
              </div>
              <div className={styles.notificationImageContainer}>
                <Image
                  className={styles.notificationImage}
                  src={notification.notificationImage}
                  alt="Profile icon"
                  width={120}
                  height={50}
                  priority
                />
                <div
                  className={styles.deleteWrapperN}
                  onClick={deleteNotification}
                >
                  <DeleteIcon
                    className={styles.deleteNotificationIcon}
                    alt="Delete icon"
                    height={20}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noNotificationArea} key="no-notification">
            <Image
              className={styles.NonotificationImage}
              src={NonotificationImg}
              alt="no notification image"
              width={120}
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}
