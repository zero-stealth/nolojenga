"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/room.module.css";
import CardComponent from "@/app/components/EditCard";
import ProfileImage from "@/public/assets/profile.png";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import NotificationImage from "@/public/assets/notificationImg.jpg";

const data = [
  {
    id: 1,
    BannerImage: NotificationImage,
    ProfileImage: ProfileImage,
    Status: "Available",
    Deposit: "20,000",
    Amount: "10,000",
    Room: "Bedsitter",
    Location: "Nairobi, Parklands 23rd Estate",
    Door: "B-45",
  },
  {
    id: 1,
    BannerImage: NotificationImage,
    ProfileImage: ProfileImage,
    Status: "Available",
    Deposit: "20,000",
    Amount: "10,000",
    Room: "Bedsitter",
    Location: "Nairobi, Parklands 23rd Estate",
    Door: "B-45",
  },
  {
    id: 1,
    BannerImage: NotificationImage,
    ProfileImage: ProfileImage,
    Status: "Available",
    Deposit: "20,000",
    Amount: "10,000",
    Room: "Bedsitter",
    Location: "Nairobi, Parklands 23rd Estate",
    Door: "B-45",
  },
  {
    id: 1,
    BannerImage: NotificationImage,
    ProfileImage: ProfileImage,
    Status: "Available",
    Deposit: "20,000",
    Amount: "10,000",
    Room: "Bedsitter",
    Location: "Nairobi, Parklands 23rd Estate",
    Door: "B-45",
  },
];

export default function RoomPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filteredData = data.filter((d) =>
      d.Room.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("Filtered Data:", filteredData);
  };

  const addRoom = () => {
    router.push("add/room/");
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
          <button className={styles.addRoom} onClick={addRoom}>
            add
          </button>
        </div>
        <div className={styles.roomContent}>
          {data.map((d) => (
            <CardComponent
              key={d.id}
              CardID={d.id}
              CardBannerImage={d.BannerImage}
              CardRoom={d.Room}
              CardDoor={d.Door}
              CardLocation={d.Location}
              CardAmount={d.Amount}
              CardDeposit={d.Deposit}
              CardStatus={d.Status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
