"use client";

import Image from "next/image";
import { useState } from "react";
import Loader from "@/app/components/Loader";
import LoveComponent from "@/app/components/Loved";
import RatingComponent from "@/app/components/rating";
import styles from "@/app/style/infoServiceCard.module.css";

import {
  MapPinIcon as LocationIcon,
  EnvelopeIcon as EmailIcon,
  PhoneIcon,
  WrenchScrewdriverIcon as RepairIcon,
  WifiIcon as InternetProviderIcon,
  BoltIcon as ElectricianIcon,
  ShieldCheckIcon as SecurityIcon,
  TrashIcon as GarbageIcon,
  PaintBrushIcon as CleaningIcon,
  SwatchIcon as PlumbingIcon,
} from "@heroicons/react/24/outline";


const getServiceIcon = (cardType) => {
  const icons = {
    Repair: (
      <RepairIcon
        className="serviceIcon"
        alt="Repair icon"
        width={18}
        height={18}
      />
    ),
    IspProvider: (
      <InternetProviderIcon
        className="serviceIcon"
        alt="Internet Provider icon"
        width={18}
        height={18}
      />
    ),
    Electrician: (
      <ElectricianIcon
        className="serviceIcon"
        alt="Electrician icon"
        width={18}
        height={18}
      />
    ),
    Security: (
      <SecurityIcon
        className="serviceIcon"
        alt="Security icon"
        width={18}
        height={18}
      />
    ),
    Garbage: (
      <GarbageIcon
        className="serviceIcon"
        alt="Garbage icon"
        width={18}
        height={18}
      />
    ),
    Cleaning: (
      <CleaningIcon
        className="serviceIcon"
        alt="Cleaning icon"
        width={18}
        height={18}
      />
    ),
    Plumbing: (
      <PlumbingIcon
        className="serviceIcon"
        alt="Plumbing icon"
        width={18}
        height={18}
      />
    ),
  };
  return icons[cardType] || null;
};

export default function InfoServiceCardComponent({
  infoServiceCardSpan,
  infoServiceCardTitle,
  infoServiceCardBannerImage,
  infoServiceCardPrice,
  infoServiceCardRating,
  infoServiceCardService,
  infoServiceCardLocation,
  infoServiceCardEmail,
  infoServiceCardPhone,
  infoServiceCardDescription,
}) {
  const [isLoading, setIsLoading] = useState(false);

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
    } catch (error) {
      console.error(error);
    } finally {
      toggleFilter();
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.infoCardComponent}>
      <div className={styles.infoCardImageComponent}>
        <div className={styles.infoCardBannerImage}>
          <div className={styles.infoCardSpan}>
            <span>{infoServiceCardSpan}</span>
          </div>
          <Image
            className={styles.infoCardBannerImage}
            src={infoServiceCardBannerImage}
            alt={infoServiceCardTitle}
            layout="fill"
            quality="100"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className={styles.infoCardTextComponent}>
        <div className={styles.infoCardTitleComponent}>
          <h1>{infoServiceCardTitle}</h1>
          <div className={styles.infoCardV}>
            <RatingComponent RatingInfo={infoServiceCardRating} />
            <LoveComponent />
          </div>
        </div>
        <div className={styles.moreInfoHeight}>
          <div className={styles.moreInfoCardArea}>
            <p>{infoServiceCardDescription}</p>
          </div>
        </div>
        <div className={styles.infoCardAreaWrapper}>
          <div className={styles.areaCardInfo}>
            <LocationIcon
              className={styles.extraCardIcon}
              alt="Filter icon"
              width={18}
              height={18}
              priority
            />
            <span>{infoServiceCardLocation}</span>
          </div>
          <div className={styles.areaCardInfo}>
            {getServiceIcon(infoServiceCardService)}
            <span>{infoServiceCardService}</span>
          </div>
          <div className={styles.areaCardInfo}>
            <EmailIcon
              className={styles.extraCardIcon}
              alt="Email icon"
              width={18}
              height={18}
              priority
            />
            <span>{infoServiceCardEmail}</span>
          </div>
          <div className={styles.areaCardInfo}>
          <PhoneIcon
              className={styles.extraCardIcon}
              alt="Phone icon"
              width={18}
              height={18}
              priority
            />
            <span>{infoServiceCardPhone}</span>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          onClick={onSubmit}
          className={styles.btnFilter}
        >
          {isLoading ? <Loader /> : `Hire me ${infoServiceCardPrice}/-`}
        </button>
      </div>
    </div>
  );
}
