"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AreaIcon from "@/public/icons/AreaIcon.svg";
import styles from "@/app/style/InfoCard.module.css";
import BedIcon from "@/public/icons/BedroomIcon.svg";
import RatingComponent from "@/app/components/rating";
import BathIcon from "@/public/icons/BathroomIcon.svg";
import FloatingInfo from "@/app/components/floatingInfo";

import { MapPinIcon as LocationIcon } from "@heroicons/react/24/outline";

export default function InfoCardComponent({
  InfoCardSpan,
  InfoCardTitle,
  InfoCardBannerImage,
  InfoCardPrice,
  InfoCardProfileImage,
  InfoCardImage1,
  InfoCardImage2,
  InfoCardImage3,
  InfoCardRating,
  InfoCardLocation,
  InfoCardBathroom,
  InfoCardBedroom,
  InfoCardArea,
  InfoCardLink,
  InfoCardDescription,
  InfoCardOtherInformation,
  InfoCardRatingInformation,
}) {
  const router = useRouter();

  const paymentPage = () => {
    router.push(`/page/tenant/sales/sale/payment/${InfoCardTitle}`);
  };

  const Book = () => {
    toast.success(`booked succesfuly`);

  };


  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardComponent}>
        <div className={styles.infoCardImageComponent}>
          <div className={styles.infoCardBannerImage}>
            <div className={styles.infoCardSpan}>
              <span>{InfoCardSpan}</span>
            </div>
            <button
              type="button"
              onClick={() => Book()}
              className={styles.infoCardBtns}
            >
           Book Viewing
            </button>
            <Image
              className={styles.infoCardBannerImage}
              src={InfoCardBannerImage}
              alt={InfoCardTitle}
              layout="fill"
              quality="100"
              objectFit="cover"
              priority
            />
            <FloatingInfo
              floatingImage={InfoCardProfileImage}
              floatingPrice={InfoCardPrice}
              floatingLink={InfoCardLink}
            />
          </div>
          <div className={styles.infoCardExtraImage}>
            <Image
              className={styles.extraImage}
              src={InfoCardImage1}
              alt={InfoCardTitle}
              width={160}
              height={70}
              priority
            />
            <Image
              className={styles.extraImage}
              src={InfoCardImage2}
              alt={InfoCardTitle}
              width={160}
              height={70}
              priority
            />
            <Image
              className={styles.extraImage}
              src={InfoCardImage3}
              alt={InfoCardTitle}
              width={160}
              height={70}
              priority
            />
          </div>
        </div>
        <div className={styles.infoCardTextComponent}>
          <div className={styles.infoCardTitleComponent}>
            <h1>{InfoCardTitle}</h1>
            <RatingComponent RatingInfo={InfoCardRating} />
          </div>
          <div className={styles.infoCardLocationComponent}>
            <LocationIcon
              className={styles.LocationIcon}
              alt="Location icon"
              width={16}
              height={16}
            />
            <h3>{InfoCardLocation}</h3>
          </div>
          <div className={styles.infoCardAreaWrapper}>
            <div className={styles.areaCard}>
              <span>Bedrooms</span>
              <div className={styles.areaCardInfo}>
                <Image
                  className={styles.extraCardIcon}
                  src={BedIcon}
                  alt="bed icon"
                  width={25}
                  height={25}
                  priority
                />
                <span>{InfoCardBedroom}</span>
              </div>
            </div>
            <div className={styles.areaCard}>
              <span>Bathrooms</span>
              <div className={styles.areaCardInfo}>
                <Image
                  className={styles.extraCardIcon}
                  src={BathIcon}
                  alt="bath icon"
                  width={20}
                  height={20}
                  priority
                />
                <span>{InfoCardBathroom}</span>
              </div>
            </div>
            <div className={styles.areaCard}>
              <span>Area</span>
              <div className={styles.areaCardInfo}>
                <Image
                  className={styles.extraCardIcon}
                  src={AreaIcon}
                  alt="area icon"
                  width={20}
                  height={20}
                  priority
                />
                <span>{InfoCardArea}</span>
              </div>
            </div>
          </div>
          <div className={styles.moreInfoHeight}>
            <div className={styles.moreInfoCardArea}>
              <h1>Description</h1>
              <p>{InfoCardDescription}</p>
            </div>
            <button
              type="button"
              onClick={() => paymentPage()}
              className={styles.buyCardBtns}
            >
              Buy House
            </button>
          </div>
        </div>
      </div>
      <div className={styles.infoCardFooter}>
        {InfoCardRatingInformation.length > 0 && (
          <div className={styles.infoCardFooterCin}>
            <h1>Reviews</h1>
            {Array.isArray(InfoCardRatingInformation) &&
              InfoCardRatingInformation.map((i, index) => (
                <div key={index} className={styles.infoCardRatingCin}>
                  <Image
                    className={styles.ratingImageCin}
                    src={i.ProfileImage}
                    alt={i.title}
                    width={50}
                    height={50}
                    priority
                  />
                  <div className={styles.ratingTextCin}>
                    <div className={styles.ratingTitleCinInner}>
                      <h1>{i.title}</h1>
                      <span>{i.description}</span>
                    </div>
                    <RatingComponent RatingInfo={i.Rating} />
                  </div>
                </div>
              ))}
          </div>
        )}
        <div className={styles.infoCardFooterWrapper}>
          {InfoCardOtherInformation.length > 0 && (
            <div className={styles.infoCardFooterCinB}>
              <h1>Other information</h1>
              {Array.isArray(InfoCardOtherInformation) &&
                InfoCardOtherInformation.map((i, index) => (
                  <div key={index} className={styles.infoCardTableS}>
                    <h3>{i.title}</h3>
                    <h3>{i.description}</h3>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
