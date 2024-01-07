"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import NetImage from "@/public/assets/net.jpg";
import styles from "@/app/style/service.module.css";
import FilterComponent from "@/app/components/Filter";
import ProfileImage from "@/public/assets/profile.png";
import AdvertComponent from "@/app/components/Advert";
import CleaningImage from "@/public/assets/cleaning.jpg";
import HouseImage from "@/public/assets/notificationImg.jpg";
import InfoServiceCard from "@/app/components/infoServiceCard";
import NotificationImage from "@/public/assets/notificationImg.jpg";

const data = [
  {
    id: 1,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    portfolio: [NetImage, NetImage, NetImage, NetImage, NetImage, NetImage],
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },

  {
    id: 2,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    portfolio: [NetImage, NetImage, NetImage, NetImage, NetImage, NetImage],
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
  {
    id: 3,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    portfolio: [NetImage, NetImage, NetImage, NetImage, NetImage, NetImage],
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
];

const adsData = [
  {
    Info: "click on this ad or am coming for you",
    Image: [CleaningImage, HouseImage],
    UserImg: ProfileImage,
    Price: "ksh 10,000,000",
    link: "https://google.com",
  },
];

const goTo = (link) => {
  window.location.href = link;
};
export default function ServicePage({ params }) {
  const [selectedCardID, setSelectedCardID] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedCard = data.find((card) => card.id === selectedCardID);

  const switchData = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adsData.length);
  };

  useEffect(() => {
    const timeout = setTimeout(switchData, 60000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  return (
    <div className={styles.mainComponent}>
      <NavBar />
      <div className={styles.autoComponent}>
        <FilterComponent />
        <div className={styles.autoSection}>
          <div className={styles.autoSectionContain}>
            <AdvertComponent
              Height={120}
              AdvertInfo={adsData[currentIndex].Info}
              AdvertImages={adsData[currentIndex].Image}
              FloatingImage={adsData[currentIndex].UserImg}
              FloatingPrice={adsData[currentIndex].Price}
              onClick={() => goTo(adsData[currentIndex].link)}
            />
            <div className={styles.serviceDiv}>
              <InfoServiceCard
                infoServiceCardSpan={selectedCard.Span}
                infoServiceCardTitle={selectedCard.Title}
                infoServiceCardBannerImage={selectedCard.BannerImage}
                infoServiceCardPrice={selectedCard.Price}
                infoServiceCardEmail={selectedCard.Email}
                infoServiceCardPhone={selectedCard.Phone}
                infoServiceCardRating={selectedCard.Rating}
                infoServiceCardService={selectedCard.Service}
                infoServiceCardLocation={selectedCard.Location}
                infoServiceCardDescription={selectedCard.Description}
                infoServiceCardProfileImage={selectedCard.ProfileImage}
              />
            </div>
            <div className={styles.infoServiceFooterCin}>
              <h1>Portfolio</h1>
              <div className={styles.infoServiceCin}>
                {Array.isArray(selectedCard.portfolio) &&
                  selectedCard.portfolio.map((image, index) => (
                    <Image
                      key={index}
                      className={styles.ServiceImageCin}
                      src={image}
                      alt={`Portfolio Image ${index + 1}`}
                      width={200}
                      height={140}
                      priority
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
