"use client";

import { useState } from "react";
import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/rental.module.css";
import FilterComponent from "@/app/components/Filter";
import ProfileImage from "@/public/assets/profile.png";
import InfoCardComponent from "@/app/components/infoCard";
import NotificationImage from "@/public/assets/notificationImg.jpg";

const data = [
  {
    id: 1,
    Tag: "Furnished",
    Title: "Lion Suit Apartment",
    Status: "Available",
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
    Description:
      "Discover the ultimate investment opportunity with this pristine piece of green land that promises a world of possibilities. Nestled in a picturesque location, this land is a blank canvas waiting for your vision to become a reality ",
    OtherInformation: [
      {
        title: "Security",
        description: "Free",
      },
      {
        title: "Parking",
        description: "Not Available ",
      },
      {
        title: "Wifi",
        description: "Not Available ",
      }
    ],
    PayeablesData: [

      {
        title: "Water",
        description: "Ksh. 150 per Unit",
      }
    ],
    RulesData: ["RulesData", "RulesData", "RulesData"],
    RatingInformation: [
      {
        title: "Gojo satoru",
        ProfileImage:ProfileImage ,
        description: "Received your request to buy land at Ruiru town",
        Rating: 4,
      },
    ],
  },
  {
    id: 2,
    Tag: "golf",
    Status: "Available",
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
    Description: "Your description here",
    OtherInformation: [
      {
        title: "Security",
        description: "Free",
      },
      {
        title: "Wifi",
        description: "Not Available ",
      }
    ],
    PayeablesData: [
      {
        title: "Security",
        description: "Free",
      },
      {
        title: "Water",
        description: "Ksh. 150 per Unit",
      }
    ],
    RulesData: ["RulesData", "RulesData", "RulesData"],
    RatingInformation: [
      {
        title: "Gojo satoru",
        ProfileImage: "Received your request to buy land at Ruiru town",
        Rating: 4,
      },
    ],
  },

  {
    id: 3,
    Tag: "bacon",
    Status: "Available",
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
    Description:
      "Your description here ksdhaIAHIHSIDHASHDAHS AKSHDIahdihIAHIHADOHAOSD ASKDHaihdiahdiasdhaidhaIDHIHADIHASDHAS SAHDIASHDHAihdhdhahs SDHHAIHIAh",
      OtherInformation: [
        {
          title: "Security",
          description: "Free",
        },
        {
          title: "Wifi",
          description: "Not Available ",
        }
      ],
      PayeablesData: [
        {
          title: "Security",
          description: "Free",
        },
        {
          title: "Water",
          description: "Ksh. 150 per Unit",
        }
      ],
    RulesData: ["RulesData", "RulesData", "RulesData"],
    RatingInformation: [
      {
        title: "Gojo satoru",
        ProfileImage: "Received your request to buy land at Ruiru town",
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
              InfoCardBathroom={selectedCard.Bathroom}
              InfoCardBedroom={selectedCard.Bedroom}
              InfoCardArea={selectedCard.Area}
              InfoCardLink={selectedCard.Link}
              InfoCardDescription={selectedCard.Description}
              InfoCardRules={selectedCard.RulesData}
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
