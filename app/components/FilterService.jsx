"use client";

import { useState } from "react";
import Loader from "@/app/components/Loader";
import Dropdown from "@/app/components/Dropdown";
import styles from "@/app/style/filter.module.css";
import { useFilterStore } from "@/app/store/Filter";

import {
  AdjustmentsHorizontalIcon as FilterIcon,
  MagnifyingGlassIcon as SearchIcon,
  MapPinIcon as LocationIcon ,
  XCircleIcon as ExitIcon,
} from "@heroicons/react/24/outline";


const locationIcon = (
  <LocationIcon className="dropdownIcon" alt="Home icon" width={16} height={16} />
);


const Locations = [
  "Nairobi, Karen",
  "Nairobi, Rongai Rongai",
  "Nairobi, Langata",
];

const Services = [
  "Internet Provider",
  "Internet Service Provider",
  "Civil Engineering",
  "Architecture",
  "Plumbing",
  "Masonry",
  "Painter",
  "Surveyor",
  "Garbage Collectoion",
  "Security",
  "Carpenter",
  "Roofing Technician",
  "Landscaping",
  "Interior Design",
  "General contractor",
  "Construction management",
  "Construction engineering",
];

export default function FilterComponent() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { showFilter, toggleFilter } = useFilterStore();
  const [isLoading, setIsLoading] = useState(false);




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
        {/* Services */}
        <div className={styles.filterInputContainer}>
          <h1>Services</h1>
          <Dropdown
            options={Services}
            dropPlaceHolder="Select a services"
            onSelect={setSelectedOption}
          />
        </div>

        <button type="submit" disabled={isLoading} className={styles.btnFilter}>
          {isLoading ? <Loader /> : "Search"}
        </button>
      </form>
    </div>
  );
}
