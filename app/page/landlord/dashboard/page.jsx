"use client";
import NotificationImage from "@/public/assets/notificationImg.jpg";
import AddAmenitiesCard from "@/app/components/addAmenitiesCard";
import AddRulesCard from "@/app/components/addRulesCard";
import CleaningImage from "@/public/assets/cleaning.jpg";
import ProfileImage from "@/public/assets/profile.png";
import BannerImage from "@/public/assets/banner.png";
import TableComponent from "@/app/components/Table";
import styles from "@/app/style/dashpage.module.css";
import PopupComponent from "@/app/components/Popup";
import Reminder from "@/app/components/Reminder";
import { useAuthStore } from "@/app/store/Auth";
import PayCard from "@/app/components/PayCard";
import NavBar from "@/app/components/NavBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  MapIcon as LandSellerIcon,
  ChevronRightIcon as ViewIcon,
  BriefcaseIcon as ServiceProviderIcon,
  HomeModernIcon as PropertyDealerIcon,
  UsersIcon as LandlordIcon,
  UserIcon as TenantIcon,
  ChevronDownIcon as DropdownIcon,
} from "@heroicons/react/24/outline";

const tableData = [
  {
    id: 1,
    profile: BannerImage,
    price: 20000,
    type: "penguin mansion",
    username: "Penguin Angelo",
    status: "pending",
  },
  {
    id: 2,
    profile: BannerImage,
    price: 20000,
    type: "penguin mansion",
    username: "Penguin Angelo",
    status: "pending",
  },
  {
    id: 3,
    profile: BannerImage,
    price: 20000,
    type: "penguin mansion",
    username: "Penguin Angelo",
    status: "pending",
  },
  {
    id: 4,
    profile: BannerImage,
    price: 20000,
    type: "penguin mansion",
    username: "Penguin Angelo",
    status: "pending",
  },
];

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
    Description:
      "Discover the ultimate investment opportunity with this pristine piece of green land that promises a world of possibilities. Nestled in a picturesque location, this land is a blank canvas waiting for your vision to become a reality ",
  },
];

const adsData = [
  {
    Info: "Get upto  10% discount  if your are among the first to buy this property",
    Image: [BannerImage, CleaningImage],
    UserImg: BannerImage,
    Price: "ksh 10,0,000",
    link: "https://google.com",
  },
];

const PayCardData = [
  {
    id: 1,
    Sender: ProfileImage,
    Reciever: BannerImage,
    price: "20,000",
    RecieverAccount: "070000000",
    SenderAccount: "0727388399",
  },
];

const LandlordActions = ["Add Rentals"];

const getIcon = (type) => {
  const icons = {
    ServiceProvider: (
      <ServiceProviderIcon
        className="ServiceTypeIcon"
        alt="service provider icon"
        width={24}
        height={24}
      />
    ),
    PropertyDealer: (
      <PropertyDealerIcon
        className="ServiceTypeIcon"
        alt="PropertyDealer  icon"
        width={24}
        height={24}
      />
    ),
    Landlord: (
      <LandlordIcon
        className="ServiceTypeIcon"
        alt="Landlord icon"
        width={24}
        height={24}
      />
    ),
    LandSeller: (
      <LandSellerIcon
        className="ServiceTypeIcon"
        alt="land icon"
        width={24}
        height={24}
      />
    ),
    Tenant: (
      <TenantIcon
        className="ServiceTypeIcon"
        alt="tenant icon"
        width={24}
        height={24}
      />
    ),
  };
  return icons[type] || null;
};

export default function DashboardPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [actions, setActions] = useState([]);
  const [payPopup, setPayPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [type, setType] = useState("ServiceProvider");
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [openReminder, setOpenReminder] = useState(false);
  const [openAmenities, setAmenities] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const accountType = [
    "ServiceProvider",
    "PropertyDealer",
    "LandSeller",
    "Tenant",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleReminder = () => {
    setOpenReminder(!openReminder);
  };

  const toggleAmenities = () => {
    setAmenities(!openAmenities);
  };

  const goTo = (param) => {
    router.push(`add/${param}`);
  };

  useEffect(() => {
    switch (selectedOption) {
      case "Add Rentals":
        goTo("rentals");
        break;
      default:
        break;
    }
  });


  const switchData = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adsData.length);
  };

  useEffect(() => {
    const timeout = setTimeout(switchData, 60000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  const togglePayPopup = () => {
    setPayPopup(!payPopup);
  };

  const getPopData = (type) => {
    const selectedData = accountType.find((d) => d === type);
    setSelectedCardData(selectedData);
    if(type === "Tenant"){
      router.push("/page/tenant/dashboard");
    } else {
      togglePayPopup();
      setType(type);
    }
   
  };

  return (
    <div className={styles.dashPageComponent}>
      <NavBar />
      <div className={styles.dashPageWrap}>
        <div className={styles.PageWrapInfo}>
          <div className={styles.dashboardCardContainer}>
            <div className={styles.dashboardInfoCard}>
              <span>Total Number of Rooms</span>
              <h2>70</h2>
            </div>
            <div className={styles.dashboardInfoCard}>
              <span>Total Number of tenants</span>
              <h2>70</h2>
            </div>
            <div className={styles.dashboardInfoCard}>
              <span>property rented</span>
              <h2>70</h2>
            </div>
          </div>
          <div className={styles.dashboardSContainer}>
            {accountType.map((type, index) => (
              <div
                className={styles.dashboardSCard}
                key={index}
                onClick={() => getPopData(type)}
              >
                {getIcon(type)}
                <span>{type.replace(/([a-z])([A-Z])/g, "$1 $2")}</span>
              </div>
            ))}
          </div>
          <div className={styles.dashBtnAdmin}>
            <button className={styles.dashBtnRem} onClick={toggleReminder}>
              Send reminder
            </button>
            <button className={styles.dashBtnRem} onClick={toggleAmenities}>
              {openAmenities ? "Hide" : "Show"} Amenity & rules
            </button>
            <div className={styles.dropdownWrapper}>
              <div
                className={styles.dropdownContainer}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>{selectedOption || "More Action"}</span>
                <DropdownIcon
                  className={styles.dropdownIcon}
                  alt="Dropdown icon"
                  width={16}
                  height={16}
                />
              </div>
              {isOpen && (
                <div className={styles.dropdownArea}>
                  {LandlordActions.map((option) => (
                    <span key={option} onClick={() => handleSelect(option)}>
                      {option}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={styles.pageTableComp}>
            <TableComponent
              Title={"Rented Properties"}
              tableName={"LandLord"}
              tableType={"Property name"}
              tableView={"Rented Properties"}
              tableData={tableData}
            />
          </div>
        </div>
        {openAmenities && (
          <div className={styles.PageWrapImg}>
            <AddAmenitiesCard />
            <AddRulesCard />
          </div>
        )}
      </div>
      {selectedCardData && (
        <PopupComponent
          Top={0}
          Left={0}
          Right={0}
          Bottom={0}
          Width={300}
          onClose={togglePayPopup}
          content={
            <div className={styles.upgradeAccountS}>
              <h1>Pay to be a {type.replace(/([a-z])([A-Z])/g, "$1 $2")}</h1>
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
      )}
      <PopupComponent
        Top={0}
        Left={0}
        Right={0}
        Bottom={0}
        Width={350}
        Height={350}
        onClose={toggleReminder}
        content={<Reminder />}
        isOpen={openReminder}
      />
    </div>
  );
}
