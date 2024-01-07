"use client";

import { useState, useEffect } from "react";
import NavBar from "@/app/components/NavBar";
import PayCard from "@/app/components/PayCard";
import styles from "@/app/style/rental.module.css";
import PopupComponent from "@/app/components/Popup";
import { useFilterStore } from "@/app/store/Filter";
import BannerImage from "@/public/assets/banner.png";
import FilterComponent from "@/app/components/Filter";
import ProfileImage from "@/public/assets/profile.png";
import CardComponent from "@/app/components/RentalCard";
import NotificationImage from "@/public/assets/notificationImg.jpg";

import { AdjustmentsHorizontalIcon as FilterIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    Span: "Furnished",
    Title: "Lion Suit Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Link: "/app/rental/",
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },
  {
    id: 2,
    Span: "golf",
    Link: "/app/rental/",
    Title: "tiger  Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 6,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },

  {
    id: 3,
    Span: "bacon",
    Link: "/app/rental/",
    Title: "Micon Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 5,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },
  {
    id: 4,
    Span: "bacon",
    Link: "/app/rental/",
    Title: "Micon Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 5,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },
  {
    id: 5,
    Span: "bacon",
    Link: "/app/rental/",
    Title: "Micon Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 5,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },
  {
    id: 6,
    Span: "bacon",
    Link: "/app/rental/",
    Title: "Micon Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 5,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },

  {
    id: 7,
    Span: "bacon",
    Link: "/app/rental/",
    Title: "Micon Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 5,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },
  {
    id: 8,
    Span: "bacon",
    Link: "/app/rental/",
    Title: "Micon Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 5,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },
  {
    id: 9,
    Span: "bacon",
    Link: "/app/rental/",
    Title: "Micon Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 5,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },
  {
    id: 10,
    Span: "bacon",
    Link: "/app/rental/",
    Title: "Micon Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 5,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
  },
  {
    id: 11,
    Span: "bacon",
    Link: "/app/rental/",
    Title: "Micon Apartment",
    BannerImage: NotificationImage,
    Price: "ksh 5,000,000",
    ProfileImage: ProfileImage,
    Image1: NotificationImage,
    Image2: NotificationImage,
    Image3: NotificationImage,
    Rating: 4.5,
    Location: "Nairobi, Parklands 23rd Estate",
    Bathroom: 2,
    Bedroom: 3,
    Area: "1200 sq. ft.",
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

export default function RentalsPage() {
  const { showFilter, toggleFilter } = useFilterStore();
  const [payPopup, setPayPopup] = useState(false);
  const [showView, setShowView] = useState(false);



  useEffect(() => {
    setShowView(true);
  }, []);

  const togglePayPopup = () => {
    setPayPopup(!payPopup);
  };

  const toggleShowView= () => {
    setShowView(!showView);
  };

  const openPay = () => {
    togglePayPopup()
    toggleShowView()
  }

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
          <div className={styles.CardArea}>
            {data.map((d) => (
              <CardComponent
                key={d.id}
                CardId={d.id}
                CardSpan={d.Span}
                CardTitle={d.Title}
                CardLink={d.Link}
                CardBannerImage={d.BannerImage}
                CardPrice={d.Price}
                CardProfileImage={d.ProfileImage}
                CardRating={d.Rating}
                CardLocation={d.Location}
                CardBathroom={d.Bathroom}
                CardBedroom={d.Bedroom}
                CardArea={d.Area}
              />
            ))}
          </div>
        </div>
      </div>
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
  );
}
