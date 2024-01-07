"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/room.module.css";
import ProfileImage from "@/public/assets/profile.png";
import CardComponent from "@/app/components/EditPropertyCard";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import NotificationImage from "@/public/assets/notificationImg.jpg";

const data = [
  {
    id: 1,
    BannerImage: NotificationImage,
    ProfileImage: ProfileImage,
    Status: "Available",
    Title: "Apartment",
    Amount: "10,000",
    Bedroom: "4",
    Bathroom: "5",
    Area: "140 ft",
    Location: "Nairobi, Parklands 23rd Estate",
  },
  
];

export default function EditPropertyCard() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filteredData = data.filter((d) =>
      d.Room.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("Filtered Data:", filteredData);
  };

  const AddProperty = () => {
    router.push("add/property/");
  };

  return (
    <div className={styles.roomContainer}>
      <NavBar />
      <div className={styles.roomInnerContainer}>
        <div className={styles.roomWrapper}>
          <div className={styles.roomSearch}>
            <SearchIcon
              className={styles.roomSearchIcon}
              alt="Search icon"
              width={16}
              height={16}
            />
            <input
              type="text"
              name="Search"
              id="Search"
              className={styles.roomSearchInput}
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onBlur={handleSearch}
            />
          </div>
          <button className={styles.AddProperty} onClick={AddProperty}>
            add
          </button>
        </div>
        <div className={styles.roomContent}>
          {data.map((d) => (
            <CardComponent
              key={d.id}
              CardID={d.id}
              CardBannerImage={d.BannerImage}
              CardTitle={d.Title}
              CardLocation={d.Location}
              CardAmount={d.Amount}
              CardBathroom={d.Bathroom}
              CardBedroom={d.Bedroom}
              CardArea={d.Area}
              CardDescription={d.Description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
