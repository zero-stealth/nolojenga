"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import NetImage from "@/public/assets/net.jpg";
import styles from "@/app/style/room.module.css";
import ProfileImage from "@/public/assets/profile.png";
import ServiceCard from "@/app/components/EditServiceCard";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import NotificationImage from "@/public/assets/notificationImg.jpg";

const data = [
  {
    id: 1,
    Status: "Available",
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
    Status: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
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
    Status: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
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
    Status: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
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
    Status: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
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
    Status: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
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
    Status: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
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
    Status: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
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
    Status: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
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
    Status: "Available",
    Title: "Riley josh",
    BannerImage: NotificationImage,
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
export default function ServicesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filteredData = data.filter((d) =>
      d.Room.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("Filtered Data:", filteredData);
  };

  const EditService = () => {
    router.push(`edit/service/${param}`);
  };

  const addService = () => {
    router.push("add/services");
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
          <button className={styles.addRoom} onClick={addService}>
            add
          </button>
        </div>
        <div className={styles.roomContent}>
          {data.map((d) => (
            <ServiceCard
              key={d.id}
              ServiceCardID={d.id}
              ServiceCardStatus={d.Status}
              ServiceCardTitle={d.Title}
              ServiceCardPrice={d.Price}
              ServiceCardService={d.Service}
              ServiceCardBannerImage={d.BannerImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
