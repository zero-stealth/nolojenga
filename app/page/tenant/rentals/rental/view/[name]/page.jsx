"use client";

import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/rental.module.css";
import ProfileImage from "@/public/assets/profile.png";
import BackNavigation from "@/app/components/navigation";
import CardComponent from "@/app/components/RoomCard.jsx";
import NotificationImage from "@/public/assets/notificationImg.jpg";


const data = [
  {
    id: 1,
    Title: "Door 123",
    BannerImage: NotificationImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    ImageData: [NotificationImage, ProfileImage, NotificationImage],
    Rating: 4.5,
    Link: "/app/rental/",
    Location: "Nairobi, Parklands 23rd Estate",
  },
  {
    id: 2,
    Title: "Door 123",
    BannerImage: NotificationImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    ImageData: [NotificationImage, ProfileImage, NotificationImage],
    Rating: 4.5,
    Link: "/app/rental/",
    Location: "Nairobi, Parklands 23rd Estate",
  },
  {
    id: 3,
    Title: "Door 123",
    BannerImage: NotificationImage,
    Price: "ksh 10,000,000",
    ProfileImage: ProfileImage,
    ImageData: [NotificationImage, ProfileImage, NotificationImage],
    Rating: 4.5,
    Link: "/app/rental/",
    Location: "Nairobi, Parklands 23rd Estate",
  },
];

export default function RentalsPage({ params }) {
  return (
    <div className={styles.mainComponent}>
      <NavBar />
      <div className={styles.autoComponent}>
        <div className={styles.autoSection}>
          <div className={styles.autoSectionHeader}>
            <span>
              {data.length} Results of {decodeURIComponent(params.name)}
            </span>
            <BackNavigation />
          </div>
          <div className={styles.CardArea}>
            {data.map((d) => (
              <CardComponent
                key={d.id}
                CardId={d.id}
                CardTitle={d.Title}
                CardBannerImage={d.BannerImage}
                CardDataImage={d.ImageData}
                CardPrice={d.Price}
                CardLocation={d.Location}
                CardProfileImage={d.ProfileImage}
                CardRating={d.Rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
