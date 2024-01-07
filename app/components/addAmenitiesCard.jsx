import { useRouter } from "next/navigation";
import styles from "@/app/style/addAmenities.module.css";
import { MinusCircleIcon as RemoveIcon } from "@heroicons/react/24/solid";

const amenitiesData = [
  {
    name: "Parking",
    status: "Available",
  },
  {
    name: "Security",
    status: "Watchman",
  },
  {
    name: "Swimming Pool",
    status: "Not Available",
  }
];


export default function AmenitiesCardComponent() {
  const router = useRouter();
  const addAmenities = () => {
    router.push("add/rentals", { scroll: false });
  };

const removeAmenities = () => {};


  return (
    <div className={styles.addAmenitiesContainer}>
      <div class={styles.addAmenitiesHeader}>
      <h1>Amenities</h1>
      <button
        type="submit"
        onClick={addAmenities}
        className={styles.addAmenitiesButton}
      >
        Add
      </button>
      </div>
      <div className={styles.addAmenitiesContent}>
        {amenitiesData.map((data, index) => {
          return (
            <div className={styles.addAmenitiesCard} key={index}>
              <span>{data.name}</span>
              <span>{data.status}</span>
              <div
                className={styles.removeIconContainer}
                onClick={() => {
                  removeAmenities(index);
                }}
              >
                <RemoveIcon
                  className={styles.RemoveIcon}
                  alt="remove icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
