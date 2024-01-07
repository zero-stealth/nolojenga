"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PopupComponent from "@/app/components/Popup";
import styles from "@/app/style/roomCard.module.css";
import RoomSlider from "@/app/components/RoomSlider";
import RatingComponent from "@/app/components/rating";
import FloatingInfo from "@/app/components/floatingInfo";
import { MapPinIcon as LocationIcon } from "@heroicons/react/24/outline";

export default function CardComponent({
  CardId,
  CardTitle,
  CardBannerImage,
  CardPrice,
  CardDataImage,
  CardProfileImage,
  CardRating,
  CardLocation,
  CardLink,
}) {
  const [showView, setShowView] = useState(false);
  const router = useRouter();

  const toggleShowView = () => {
    setShowView(!showView);
  };



  const paymentPage = () => {
    router.push(`/page/tenant/rentals/rental/payment/${CardTitle}`);
  };

  return (
    <div className={styles.CardComponent}>
      <div className={styles.CardBannerImage}>
        <div className={styles.CardSpan} onClick={() => toggleShowView()}>
          <span>View images</span>
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
          <FloatingInfo
            floatingImage={CardProfileImage}
            floatingPrice={CardPrice}
            floatingLink={CardLink}
          />
        </div>
      </div>
      <div className={styles.CardTextComponent}>
        <div className={styles.CardTitleComponent}>
          <h1>{CardTitle}</h1>
          <RatingComponent RatingInfo={CardRating} />
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
          <button className={styles.Cardbtn} onClick={() => paymentPage()}>
            Rent Property
          </button>
        </div>
      </div>
      <PopupComponent
        Top={0}
        Left={0}
        Right={0}
        Bottom={0}
        Width={600}
        height={700}
        onClose={toggleShowView}
        isOpen={showView}
        content={<RoomSlider RoomImages={CardDataImage} />}
      />
    </div>
  );
}
