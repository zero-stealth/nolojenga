"use client";

import { useState } from "react";
import Loader from "@/app/components/Loader";
import { usePathname } from "next/navigation";
import Dropdown from "@/app/components/Dropdown";
import styles from "@/app/style/filter.module.css";
import { useFilterStore } from "@/app/store/Filter";

import {
  AdjustmentsHorizontalIcon as FilterIcon,
  MagnifyingGlassIcon as SearchIcon,
  MapPinIcon as LocationIcon,
  HomeIcon,
  BanknotesIcon,
  XCircleIcon as ExitIcon,
} from "@heroicons/react/24/outline";

import {
  MapIcon as LandIcon,
  HomeModernIcon as ComfortableHomeIcon,
  } from "@heroicons/react/24/solid";

const locationIcon = (
  <LocationIcon
    className="dropdownIcon"
    alt="Location icon"
    width={16}
    height={16}
  />
);

const homeIcon = (
  <HomeIcon className="dropdownIcon" alt="Home icon" width={16} height={16} />
);

const LandSizeIcon = (
  <LandIcon className="dropdownIcon" alt="land icon" width={16} height={16} />
);

const PriceIcon = (
  <BanknotesIcon className="dropdownIcon" alt="price icon" width={16} height={16} />
);


const filterCard = ["House", "Land"];

const getIcon = (cardType) => {
  const icons = {
    House: (
      <ComfortableHomeIcon
        className="filterCardIcon"
        alt="ComfortableHome icon"
        width={20}
        height={20}
      />
    ),

    Land: (
      <LandIcon
        className="filterCardIcon"
        alt="Land icon"
        width={20}
        height={20}
      />
    ),
  };
  return icons[cardType] || null;
};


const Locations = [
  "Nairobi, Karen",
  "Nairobi, Rongai Rongai",
  "Nairobi, Langata",
];
const Home = ["Mansion", "Apartment", "House", "Villa", "Duplex"];
const LandSize = ["100 x 100", "200 x 200"];
const PaymentMode = ["Lipa mdogo mdogo", "Full Payment", "Installment",];

const Bedrooms = ["1", "2", "3", "5+"];
const Bathrooms = ["1", "2", "3", "5+"];
const Amenities = [
  "Parking",
  "Furnished",
  "Pet allowed",
  "Shops/Malls",
  "pool",
  "Gym",
  "Balcony",
  "Security",
];

export default function FilterComponent() {
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedLandSize, setSelectedLandSize] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const { showFilter, toggleFilter } = useFilterStore();
  const { filterType, updateFilter } = useFilterStore();
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(1);

  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const Pathname = usePathname();

  const handleFilterClick = (item) => {
    setSelectedFilter(item);
    updateFilter(item);
  };
 
  const handleAmenityChange = (event) => {
    const option = event.target.value;
    setSelectedAmenity(option);
    if (selectedAmenities.includes(option)) {
      setSelectedAmenities(selectedAmenities.filter((opt) => opt !== option));
    } else {
      setSelectedAmenities([...selectedAmenities, option]);
    }
  };

  const handleScoreChange = (event) => setScore(parseInt(event.target.value));

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (showFilter) {
    return null;
  }

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader}>
        <div className={styles.dashboardFilter}>
          <h2>Filter by</h2>
          <FilterIcon
            className={styles.FilterIcon}
            alt="Filter icon"
            width={16}
            height={16}
          />
        </div>
        <div
          className={styles.dashboardExit}
          onClick={() => {
            toggleFilter();
          }}
        >
          <h2>Hide Filter</h2>
          <ExitIcon
            className={styles.exitIcon}
            alt="Exit icon"
            width={16}
            height={16}
          />
        </div>
      </div>
      <form onSubmit={onSubmit} className={styles.filterForm}>
        {/* Search */}
        <div className={`${styles.filterInputContainer} ${styles.hideSearch}`}>
          <label htmlFor="Search" className={styles.filterLabel}>
            Search
          </label>
          <div className={styles.filterInputSearch}>
            <SearchIcon
              className={styles.SearchIcon}
              alt="Search icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              name="Search"
              id="Search"
              className={styles.filterInput}
              placeholder="Nairobi,Karen"
            />
          </div>
        </div>
        <div className={styles.filterInputContainer}>
          {/* Location */}
          <h1>Location</h1>
          <Dropdown
            options={Locations}
            Icon={locationIcon}
            dropPlaceHolder="Choose a location"
            onSelect={setSelectedOption}
          />
        </div>

        {/* Property Type */}
        <div className={styles.filterPropertyContainer}>
          <h1>Property Type</h1>
          <div className={styles.filterProperty}>
            {filterCard.map((item) => (
              <div
                className={`${styles.filterCard} ${
                  selectedFilter === item
                    ? styles.selectedF
                    : "" || filterType === item
                    ? styles.selectedF
                    : ""
                }`}
                key={item}
                onClick={() => handleFilterClick(item)}
              >
                {getIcon(item)}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        {filterType === "House" ? (
          <>
            {/* Home Type  */}
            <div className={styles.filterInputContainer}>
              <h1>Home Type</h1>
              <Dropdown
                options={Home}
                Icon={homeIcon}
                dropPlaceHolder="Choose your home type"
                onSelect={setSelectedOption}
              />
            </div>
            {/* Price Slider */}
            <div className={styles.filterPropertyContainer}>
              <h1>Budget</h1>
              <div className={styles.filtersliderContainer}>
                <input
                  type="range"
                  min="1"
                  max="1000000000"
                  step="1"
                  value={score}
                  onChange={handleScoreChange}
                  className={`${styles.filterslider} ${styles.activeSlider}`}
                />
                <div className={styles.sliderValue}>
                  <span>1</span>
                  <span>1000000000</span>
                </div>
                <h3>Ksh {score}/-</h3>
              </div>
            </div>
            {/* Bedrooms */}
            <div className={styles.filterPropertyContainer}>
              <h1>Bedrooms</h1>
              <div className={styles.filterPWrapper}>
                {Bedrooms.map((item) => (
                  <div
                    className={`${styles.filterCardSelect} ${
                      selectedBedroom === item ? styles.selectedCard : ""
                    }`}
                    key={item}
                    onClick={() => setSelectedBedroom(item)}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Bathrooms */}
            <div className={styles.filterPropertyContainer}>
              <h1>Bathrooms</h1>
              <div className={styles.filterPWrapper}>
                {Bathrooms.map((item) => (
                  <div
                    className={`${styles.filterCardSelect} ${
                      selectedBathroom === item ? styles.selectedCard : ""
                    }`}
                    key={item}
                    onClick={() => setSelectedBathroom(item)}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className={styles.filterPropertyContainer}>
                <h1>Amenities</h1>
                <div className={styles.filterCheckWrapper}>
                  <div>
                    {Amenities.slice(0, Math.ceil(Amenities.length / 2)).map(
                      (option, index) => (
                        <div
                          key={index}
                          className={styles.filterCheckContainer}
                        >
                          <label
                            htmlFor={option}
                            className={styles.filterCheck}
                          >
                            <input
                              id={option}
                              type="checkbox"
                              value={option}
                              className={styles.filterCheckInput}
                              checked={selectedAmenities.includes(option)}
                              onChange={handleAmenityChange}
                            />{" "}
                            {option}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                  <div>
                    {Amenities.slice(Math.ceil(Amenities.length / 2)).map(
                      (option, index) => (
                        <div
                          key={index}
                          className={styles.filterCheckContainer}
                        >
                          <label
                            htmlFor={option}
                            className={styles.filterCheck}
                          >
                            <input
                              id={option}
                              type="checkbox"
                              value={option}
                              className={styles.filterCheckInput}
                              checked={selectedAmenities.includes(option)}
                              onChange={handleAmenityChange}
                            />{" "}
                            {option}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Land Size  */}
            <div className={styles.filterInputContainer}>
              <h1>Land Size</h1>
              <Dropdown
                options={LandSize}
                Icon={LandSizeIcon}
                dropPlaceHolder="Choose a Land Size"
                onSelect={setSelectedLandSize}
              />
            </div>
            {/* Price Slider */}
            <div className={styles.filterPropertyContainer}>
              <h1>Budget</h1>
              <div className={styles.filtersliderContainer}>
                <input
                  type="range"
                  min="1"
                  max="1000000000"
                  step="1"
                  value={score}
                  onChange={handleScoreChange}
                  className={`${styles.filterslider} ${styles.activeSlider}`}
                />
                <div className={styles.sliderValue}>
                  <span>1</span>
                  <span>1000000000</span>
                </div>
                <h3>Ksh {score}/-</h3>
              </div>
            </div>
              {/* payment mode  */}
              <div className={styles.filterInputContainer}>
              <h1>Payment mode</h1>
              <Dropdown
                options={PaymentMode}
                Icon={PriceIcon}
                dropPlaceHolder="Choose a payment mode"
                onSelect={setSelectedPayment}
              />
            </div>
            
          </>
        )}

        <button type="submit" disabled={isLoading} className={styles.btnFilter}>
          {isLoading ? <Loader /> : "Search"}
        </button>
      </form>
    </div>
  );
}
