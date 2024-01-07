"use client";

import { useState } from "react";
import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/rental.module.css";
import FilterComponent from "@/app/components/Filter";
import ProfileImage from "@/public/assets/profile.png";
import InfoCardComponent from "@/app/components/infoLandCard";
import LandImage from "@/public/assets/land.jpg";

const data = [
  {
    id: 1,
    Tag: "Furnished",
    Title: "minion land",
    Status: "Available",
    BannerImage: LandImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    Image1: LandImage,
    Image2: LandImage,
    Image3: LandImage,
    Rating: 4.5,
    Link: "/app/rental/",
    Location: "Nairobi, Parklands 23rd Estate",
    Area: "1000000 Acres",
    Description:
      "Discover the ultimate investment opportunity with this pristine piece of green land that promises a world of possibilities. Nestled in a picturesque location, this land is a blank canvas waiting for your vision to become a reality ",
    OtherInformation: [
      {
        title: "landType",
        description: "Hill",
      },
   
    ],
    RatingInformation: [
      {
        title: "Gojo satoru",
        ProfileImage:ProfileImage ,
        description: "Received your request to buy land at Ruiru town",
        Rating: 4,
      },
    ],
  },

];

export default function RentalPage({ params }) {
  const [selectedCardID, setSelectedCardID] = useState(1);

  const selectedCard = data.find((card) => card.id === selectedCardID);

  return (
    <div className={styles.mainComponent}>
      <NavBar />
      <div className={styles.autoComponent}>
        <FilterComponent />
        <div className={styles.autoSection}>
          <div className={styles.autoSectionImage}>
            <InfoCardComponent
              InfoCardSpan={selectedCard.Status}
              InfoCardTag={selectedCard.Tag}
              InfoCardTitle={selectedCard.Title}
              InfoCardBannerImage={selectedCard.BannerImage}
              InfoCardPrice={selectedCard.Price}
              InfoCardProfileImage={selectedCard.ProfileImage}
              InfoCardImage1={selectedCard.Image1}
              InfoCardImage2={selectedCard.Image2}
              InfoCardImage3={selectedCard.Image3}
              InfoCardRating={selectedCard.Rating}
              InfoCardLocation={selectedCard.Location}
              InfoCardArea={selectedCard.Area}
              InfoCardLink={selectedCard.Link}
              InfoCardDescription={selectedCard.Description}
              InfoCardPayable={selectedCard.PayeablesData}
              InfoCardOtherInformation={selectedCard.OtherInformation}
              InfoCardRatingInformation={selectedCard.RatingInformation}
            />
          </div>
          <div className={styles.autoSectionInfo}></div>
        </div>
      </div>
    </div>
  );
}
