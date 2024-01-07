"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import PopupComponent from "@/app/components/Popup";
import {
  MapPinIcon as LocationIcon,
  TrashIcon as DeleteIcon,
  PencilSquareIcon as EditIcon,
} from "@heroicons/react/24/outline";
import styles from "@/app/style/editCard.module.css";

export default function EditCardComponent({
  CardID, 
  CardBannerImage,
  CardDoor,
  CardRoom,
  CardAmount,
  CardDeposit,
  CardStatus,
  CardLocation,
}) {
  const [popup, togglePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const editCard = () => {
    router.push(`edit/room/${CardID}`);
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

      toast.success("Room deleted successfully");
      openPopup()
    } catch (error) {
      console.error("Error deleting room:", error);
      toast.error("Error deleting room");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.CardComponent}>
      <div className={styles.CardBannerImage}>
        <div className={styles.CardSpan}>
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
            alt={CardRoom}
            layout="fill"
            quality={100}
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className={styles.CardTextComponent}>
        <div className={styles.TextComponent}>
          <h3>
            Door: <span>{CardDoor}</span>
          </h3>
          <div className={styles.CardLocationComponent}>
            <div>
              <LocationIcon
                className={styles.LocationIcon}
                alt="Location icon"
                width={18}
                height={18}
              />
            </div>
            <span>{CardLocation}</span>
          </div>
          <h3>
            Room Size: <span>{CardRoom}</span>
          </h3>
        </div>
        <div className={styles.TextComponent}>
          <h3>
            Amount: <span>Ksh. {CardAmount}</span>
          </h3>
          <h3>
            Deposit: <span>Ksh. {CardDeposit}</span>
          </h3>
          <h3>
            Status: <span>{CardStatus}</span>
          </h3>
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
            <h1>Are you sure you want to delete this room?</h1>
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
