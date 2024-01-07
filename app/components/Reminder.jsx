"use client";

import { useState } from "react";
import Loader from "@/app/components/Loader";
import Dropdown from "@/app/components/Dropdown";
import styles from "@/app/style/reminder.module.css";
import { useFilterStore } from "@/app/store/Filter";

const filterCard = ["Send to all"];
const tenantsNotPaid = ["Ronaldo", "Chris"];

export default function Reminder() {
  const { toggleFilter } = useFilterStore();
  const [selected, setSelected] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    const option = event.target.value;
    setSelected((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((opt) => opt !== option)
        : [...prevSelected, option]
    );
  };

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
      toggleFilter();
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.filterForm}>
      <h1>
        Send a reminder <br /> <span>notification</span> to tenants who have not
        paid
      </h1>
      {/* reminder */}
      <div className={`${styles.filterInputContainer}`}>
        <Dropdown
          options={tenantsNotPaid}
          onSelect={setSelectedOption}
          dropPlaceHolder="choose tenant to send a reminder"
        />
        <textarea
          type="text"
          name="Message"
          id="Message"
          className={styles.filterInputTextArea}
          placeholder="send a message"
          rows={4}
        />
        {/* Amenities */}
        <div className={styles.filterPropertyContainer}>
          {filterCard.map((option) => (
            <div className={styles.filterCheckContainer} key={option}>
              <label htmlFor={option} className={styles.filterCheck}>
                <input
                  id={option}
                  type="checkbox"
                  value={option}
                  className={styles.filterCheckInput}
                  checked={selected.includes(option)}
                  onChange={handleChange}
                />{" "}
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button type="submit" disabled={isLoading} className={styles.btnFilter}>
        {isLoading ? <Loader /> : "Send reminder"}
      </button>
    </form>
  );
}
