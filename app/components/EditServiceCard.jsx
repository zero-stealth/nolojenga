"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import PopupComponent from "@/app/components/Popup";
import styles from "@/app/style/ServiceCard.module.css";

import {
  WrenchScrewdriverIcon as RepairIcon,
  WifiIcon as InternetProviderIcon,
  BoltIcon as ElectricianIcon,
  ShieldCheckIcon as SecurityIcon,
  TrashIcon as GarbageIcon,
  PaintBrushIcon as CleaningIcon,
  SwatchIcon as PlumbingIcon,
  MapPinIcon as LocationIcon,
  TrashIcon as DeleteIcon,
  PencilSquareIcon as EditIcon,
} from "@heroicons/react/24/outline";


const getServiceIcon = (cardType) => {
  const icons = {
    Repair: (
      <RepairIcon
        className="serviceIcon"
        alt="Repair icon"
        width={20}
        height={20}
      />
    ),
    IspProvider: (
      <InternetProviderIcon
        className="serviceIcon"
        alt="Internet Provider icon"
        width={20}
        height={20}
      />
    ),
    Electrician: (
      <ElectricianIcon
        className="serviceIcon"
        alt="Electrician icon"
        width={20}
        height={20}
      />
    ),
    Security: (
      <SecurityIcon
        className="serviceIcon"
        alt="Security icon"
        width={20}
        height={20}
      />
    ),
    Garbage: (
      <GarbageIcon
        className="serviceIcon"
        alt="Garbage icon"
        width={20}
        height={20}
      />
    ),
    Cleaning: (
      <CleaningIcon
        className="serviceIcon"
        alt="Cleaning icon"
        width={20}
        height={20}
      />
    ),
    Plumbing: (
      <PlumbingIcon
        className="serviceIcon"
        alt="Plumbing icon"
        width={20}
        height={20}
      />
    ),
  };
  return icons[cardType] || null;
};

export default function ServiceCardComponent({
  ServiceCardStatus,
  ServiceCardTitle,
  ServiceCardBannerImage,
  ServiceCardPrice,
  ServiceCardID,
  ServiceCardService,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [popup, togglePopup] = useState(false);
  const router = useRouter();

  const editCard = () => {
    router.push(`edit/service/${ServiceCardID}`);
  };

  const openPopup = () => {
    togglePopup(!popup);
  }

  const closePopup = () => {
    togglePopup(!popup);
    toast.error("cancelled");
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.success("Service deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete service");
    } finally {
      toggleFilter();
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.ServiceCardComponent}>
      <div className={styles.ServiceCardImageComponent}>
        <div className={styles.ServiceCardBannerImage}>
        <div className={styles.ServiceCardSpan}>
          <DeleteIcon
            className={styles.deleteIcon}
            alt="Delete icon"
            onClick={openPopup}
            width={18}
            height={18}
          />
          <EditIcon
            className={styles.editIcon}
            alt="Edit icon"
            onClick={editCard}
            width={18}
            height={18}
          />
        </div>
          <Image
            className={styles.ServiceCardBannerImage}
            src={ServiceCardBannerImage}
            alt={ServiceCardTitle}
            layout="fill"
            quality="100"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className={styles.ServiceCardTextComponent}>
        <div className={styles.ServiceCardTitleComponent}>
          <h1>{ServiceCardTitle}</h1>
        </div>
        <div className={styles.ServiceCardAreaWrapper}>
          <div className={styles.ServiceCardMon}>
          <div className={styles.areaCardInfo}>
            {getServiceIcon(ServiceCardService)}
            <span>{ServiceCardService}</span>
          </div>
          </div>
         <span>{ServiceCardPrice}/-</span>
        </div>
      </div>
      <PopupComponent
        Top={0}
        Left={0}
        Right={0}
        Bottom={0}
        Width={250}
        onClose={openPopup}
        content={
          <form onSubmit={onSubmit} className={styles.popDeleteContainer}>
            <h1>Are you sure you want to delete this service?</h1>
            <div className={styles.popDeleteWrapper}>
              <button
                type="submit"
                disabled={isLoading}
                className={styles.btnDelete}
              >
                {isLoading ? <Loader /> : `Delete`}
              </button>
              <button onClick={openPopup} className={styles.btnCancel}>
                Cancel
              </button>
            </div>
          </form>
        }
        isOpen={popup}
      />
    </div>
  );
}
