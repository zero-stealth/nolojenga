"use client";

import { useEffect, useState } from "react";
import NavBar from "@/app/components/NavBar";
import AddAds from "@/app/components/Form/Add/AddAds";
import EditTable from "@/app/components/EditTable";
import AdvertComponent from "@/app/components/Advert";
import styles from "@/app/style/management.module.css";
import BannerImage from "@/public/assets/banner.png";
import CleaningImage from "@/public/assets/cleaning.jpg";

const tableData = [
  {
    id: 1,
    image: BannerImage,
    price: 20000,
    type: "mansion",
    boost: "not paid",
    location: "Nairobi",
    name: "Penguin Angelo",
  },
  {
    id: 2,
    image: BannerImage,
    price: 20000,
    type: "mansion",
    boost: "not paid",
    location: "Nairobi",
    name: "Penguin Angelo",
  },
  
];

const adsData = [
  {
    Info: "Get up to 10% discount if you are among the first to buy this property",
    Image: [BannerImage, CleaningImage],
    UserImg: BannerImage,
    Price: "ksh 10,000,000",
    link: "https://google.com",
  },
];

export default function ManagementPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const switchData = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adsData.length);
  };

  const goTo = (link) => {
    window.location.href = link;
  };

  useEffect(() => {
    const timeout = setTimeout(switchData, 60000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  return (
    <div className={styles.managementComponent}>
      <NavBar />
      <div className={styles.managementWrap}>
        <div className={styles.pageManagementWrap}>
          <EditTable Title={"Rented Properties"} tableData={tableData} />
          <AdvertComponent
            Height={210}
            AdvertInfo={adsData[currentIndex].Info}
            AdvertImages={adsData[currentIndex].Image}
            FloatingImage={adsData[currentIndex].UserImg}
            FloatingPrice={"Explore now"}
            onClick={() => goTo(adsData[currentIndex].link)}
          />
        </div>
        <div className={styles.PageWrapCard}>
          <AddAds />
        </div>
      </div>
    </div>
  );
}
