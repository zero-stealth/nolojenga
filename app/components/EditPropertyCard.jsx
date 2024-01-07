"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import PopupComponent from "@/app/components/Popup";
import BathIcon from "@/public/icons/BathroomIcon.svg";
import AreaIcon from "@/public/icons/AreaIcon.svg";
import BedIcon from "@/public/icons/BedroomIcon.svg";
import {
  MapPinIcon as LocationIcon,
  TrashIcon as DeleteIcon,
  PencilSquareIcon as EditIcon,
} from "@heroicons/react/24/outline";
import styles from "@/app/style/card.module.css";

export default function EditPropertyCard({
  CardID, 
  CardBannerImage,
  CardTitle,
  CardBathroom,
  CardBedroom,
  CardArea,
  CardDescription,
  CardLocation,
}) {
  const [popup, togglePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const editCard = () => {
    router.push(`edit/property/${CardID}`);
  };

  const openPopup = () => {
    togglePopup(!popup);
  }

  const closePopup = () => {
    togglePopup(!popup);
    toast.error("cancelled");
  }


  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("property deleted successfully");
      openPopup()
    } catch (error) {
      console.error("Error deleting property:", error);
      toast.error("Error deleting property");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.CardComponent}>
      <div className={styles.CardBannerImage}>
        <div className={styles.CardSpanP}>
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
        <div className={styles.CardImageC}>
          <Image
            className={styles.CBannerImage}
            src={CardBannerImage}
            alt={CardTitle}
            layout="fill"
            quality={100}
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className={styles.CardTextComponent}>
        <div className={styles.CardTitleComponent}>
          <h1>{CardTitle}</h1>
        </div>
        <div className={styles.CardLocationComponent}>
          <LocationIcon
            className={styles.LocationIcon}
            alt="Location icon"
            width={18}
            height={18}
          />
          <h3>{CardLocation}</h3>
        </div>
        <div className={styles.CardAreaWrapper}>
          <div className={styles.Cardarea}>
            <Image
              className={styles.extraCardIcon}
              src={BedIcon}
              alt="bed icon"
              width={24}
              height={24}
              priority
            />
            <span>{CardBedroom}</span>
          </div>
          <div className={styles.Cardarea}>
            <Image
              className={styles.extraCardIcon}
              src={BathIcon}
              alt="bath icon"
              width={20}
              height={20}
              priority
            />
            <span>{CardBathroom}</span>
          </div>
          <div className={styles.Cardarea}>
            <Image
              className={styles.extraCardIcon}
              src={AreaIcon}
              alt="area icon"
              width={20}
              height={20}
              priority
            />
            <span>{CardArea}</span>
          </div>
        </div>
        <div className={styles.descriptionS}>
          <p>{CardDescription}</p>
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
            <h1>Are you sure you want to delete this property?</h1>
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
