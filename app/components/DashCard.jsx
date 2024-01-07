"use client";

import Image from "next/image";
import AreaIcon from "@/public/icons/AreaIcon.svg";
import styles from "@/app/style/dashCard.module.css";
import BedIcon from "@/public/icons/BedroomIcon.svg";
import RatingComponent from "@/app/components/rating";
import BathIcon from "@/public/icons/BathroomIcon.svg";
import FloatingInfo from "@/app/components/floatingInfo";

import { MapPinIcon as LocationIcon } from "@heroicons/react/24/outline";

export default function CardComponent({
  CardSpan,
  CardTitle,
  CardBannerImage,
  CardPrice,
  CardProfileImage,
  CardDescription,
  CardRating,
  CardLocation,
  CardBathroom,
  CardBedroom,
  CardArea,
  CardLink
}) {
  return (
    <div className={styles.CardComponent}>
      <div className={styles.CardBannerImage}>
        <div className={styles.CardSpan}>
          <span>{CardSpan}</span>
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
            width={16}
            height={16}
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
    </div>
  );
}
