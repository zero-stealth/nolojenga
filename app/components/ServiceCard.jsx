"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoveComponent from "@/app/components/Loved";
import RatingComponent from "@/app/components/rating";
import styles from "@/app/style/ServiceCard.module.css";

import {
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
  ServiceCardId,
  ServiceCardSpan,
  ServiceCardTitle,
  ServiceCardBannerImage,
  ServiceCardPrice,
  ServiceCardRating,
  ServiceCardService,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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

  const openMore = () => {
    router.push(`services/service/${ServiceCardId}`);
  };

  return (
    <div className={styles.ServiceCardComponent} onClick={() => openMore()}>
      <div className={styles.ServiceCardImageComponent}>
        <div className={styles.ServiceCardBannerImage}>
          <div className={styles.ServiceCardSpan}>
            <span>{ServiceCardSpan}</span>
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
          <div className={styles.ServiceCardV}>
            <LoveComponent />
          </div>
        </div>
        <div className={styles.ServiceCardAreaWrapper}>
          <div className={styles.ServiceCardMon}>
          <div className={styles.areaCardInfo}>
            {getServiceIcon(ServiceCardService)}
            <span>{ServiceCardService}</span>
          </div>
          <RatingComponent RatingInfo={ServiceCardRating} />
          </div>
         <span>{ServiceCardPrice}/-</span>
        </div>
      </div>
    </div>
  );
}
