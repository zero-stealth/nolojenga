"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import NetImage from "@/public/assets/net.jpg";
import PayCard from "@/app/components/PayCard";
import PopupComponent from "@/app/components/Popup";
import { useFilterStore } from "@/app/store/Filter";
import styles from "@/app/style/service.module.css";
import BannerImage from "@/public/assets/banner.png";
import ServiceCard from "@/app/components/ServiceCard";
import ProfileImage from "@/public/assets/profile.png";
import CleaningImage from "@/public/assets/cleaning.jpg";
import HouseImage from "@/public/assets/notificationImg.jpg";
import FilterComponent from "@/app/components/FilterService";
import NotificationImage from "@/public/assets/notificationImg.jpg";

import { AdjustmentsHorizontalIcon as FilterIcon } from "@heroicons/react/24/outline";

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
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },

  {
    id: 2,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
  {
    id: 3,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
  {
    id: 4,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
  {
    id: 5,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
  {
    id: 6,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
  {
    id: 7,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
  {
    id: 8,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
  {
    id: 9,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
    Description:
      "Riley Josh is your premier Internet Service Provider (ISP) dedicated to transforming your online experience. With lightning-fast speeds, unwavering reliability, and a customer-centric approach, we offer affordable plans and cutting-edge technology to ensure you enjoy the best connectivity. Say goodbye to slow internet and join the Riley Josh family for a future-proof, top-tier internet experience ",
  },
  {
    id: 10,
    Span: "Available",
    Title: "Riley josh",
    BannerImage: NetImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Email: "Riley@gmail.com",
    Phone: "070000000",
    Rating: 4.5,
    Location: "Nairobi, Parklands",
    Service: "IspProvider",
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

const PayCardData = [
  {
    id: 1,
    Sender: ProfileImage,
    Reciever: BannerImage,
    price: "500",
    RecieverAccount: "070000000",
    SenderAccount: "0727388399",
  },
];

export default function ServicesPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { showFilter, toggleFilter } = useFilterStore();
  const [payPopup, setPayPopup] = useState(false);
  const [showView, setShowView] = useState(false);

  const cardInfo = (id) => {
    router.push(`service/${id}`);
  };

  useEffect(() => {
    setShowView(true);
  }, []);

  const togglePayPopup = () => {
    setPayPopup(!payPopup);
  };

  const toggleShowView = () => {
    setShowView(!showView);
  };

  const openPay = () => {
    togglePayPopup();
    toggleShowView();
  };

  const goTo = (link) => {
    window.location.href = link;
  };

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
          <div className={styles.autoSectionHeader}>
            <span>{data.length} Results</span>
            {showFilter ? (
              <div
                className={styles.autoSectionF}
                onClick={() => {
                  toggleFilter();
                }}
              >
                <span>Show Filter</span>
                <FilterIcon
                  className={styles.FilterIcon}
                  alt="Filter icon"
                  width={16}
                  height={16}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.CardArea} style={{ overflow: showView == false ? "auto" : "hidden" }}>
            {data.map((d) => (
              <ServiceCard
                key={d.id}
                ServiceCardId={d.id}
                ServiceCardSpan={d.Span}
                ServiceCardTitle={d.Title}
                ServiceCardPrice={d.Price}
                ServiceCardEmail={d.Email}
                ServiceCardPhone={d.Phone}
                ServiceCardRating={d.Rating}
                ServiceCardService={d.Service}
                ServiceCardLocation={d.Location}
                ServiceCardBannerImage={d.BannerImage}
                ServiceCardDescription={d.Description}
                ServiceCardProfileImage={d.ProfileImage}
              />
            ))}
                  <PopupComponent
        Top={0}
        Left={0}
        Right={0}
        Bottom={0}
        Width={350}
        onClose={toggleShowView}
        content={
          <div className={styles.viewContainer}>
            <h3>To view the results, make a payment of</h3>
            <h1>ksh. 500</h1>
            <button className={styles.viewBtn} onClick={openPay}>
              Pay to view
            </button>
          </div>
        }
        isOpen={showView}
      />
      <PopupComponent
        Top={0}
        Left={0}
        Right={0}
        Bottom={0}
        Width={300}
        onClose={togglePayPopup}
        content={
          <div className={styles.viewResult}>
            <h1>Pay to view</h1>
            {PayCardData.map((d) => (
              <PayCard
                key={d.id}
                PayPrice={d.price}
                SenderImage={d.Sender}
                RecieverImage={d.Reciever}
                SenderAccount={d.SenderAccount}
                RecieverAccount={d.RecieverAccount}
              />
            ))}
          </div>
        }
        isOpen={payPopup}
      />
          </div>
        </div>
      </div>
    </div>
  );
}
