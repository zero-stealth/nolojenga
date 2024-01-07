"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import styles from "@/app/style/room.module.css";
import CardComponent from "@/app/components/EditLand";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import LandImage from "@/public/assets/land.jpg";

const data = [
  {
    id: 1,
    BannerImage: LandImage,
    Status: "Available",
    Amount: "10,000",
    Title: "Land minion",
    Location: "Nairobi, Parklands 23rd Estate",
    Area: "2000",
  },
  {
    id: 1,
    BannerImage: LandImage,
    Status: "Available",
    Amount: "10,000",
    Title: "Land minion",

    Location: "Nairobi, Parklands 23rd Estate",
    Area: "2000",
  },
  {
    id: 1,
    BannerImage: LandImage,
    Status: "Available",
    Amount: "10,000",
    Title: "Land penguin",

    Location: "Nairobi, Parklands 23rd Estate",
    Area: "2000",
  },
  {
    id: 1,
    BannerImage: LandImage,
    Status: "Available",
    Amount: "10,000",
    Title: "Land cina",

    Location: "Nairobi, Parklands 23rd Estate",
    Area: "2000",
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

  const addLand = () => {
    router.push("add/land/");
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
          <button className={styles.addRoom} onClick={addLand}>
            Add
          </button>
        </div>
        <div className={styles.roomContent}>
          {data.map((d) => (
            <CardComponent
              key={d.id}
              CardID={d.id}
              CardBannerImage={d.BannerImage}
              Cardland={d.land}
              CardTitle={d.Title}
              CardArea={d.Area}
              CardLocation={d.Location}
              CardAmount={d.Amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
