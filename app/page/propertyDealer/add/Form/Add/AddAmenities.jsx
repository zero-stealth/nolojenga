import { useState } from "react";
import Loader from "@/app/components/Loader";
import toast from 'react-hot-toast';
import styles from "@/app/style/addAmenitiesComponent.module.css";

export default function AddAmenities() {
  const [isLoading, setIsLoading] = useState(false);
  const [amenities, setAmenities] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    try {
      const formData = new FormData(event.currentTarget);
      const newAmenity = {
        amenities: formData.get("amenities"),
        status: formData.get("status"),
      };
  
      const response = await fetch("/api/submitArray", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAmenity),
      });
  
      toast.success('amenities added succesfully')
      setAmenities((prevAmenities) => [...prevAmenities, newAmenity]);
    } catch (error) {
      console.error(error);
      toast.error('failed to add amenities')

    } finally {
      setIsLoading(false);
    }
  };
  

  const removeAmenity = (index) => {
    const updatedAmenities = [...amenities];
    updatedAmenities.splice(index, 1);
    setAmenities(updatedAmenities);
  };

  return (
    <div className={styles.AddAmenitiesComponent}>
      <div className={styles.formHeader}>
        <h1>Amenities</h1>
      </div>
      <div className={styles.AddAmenitiesContentCont}>
      <div className={styles.AddAmenitiesContent}>
        {amenities.map((amenity, index) => (
          <div key={index} className={styles.amenityItem}>
            <span>{amenity.amenities}</span>
            <span>{amenity.status}</span>
            <button className={styles.AddAmenitiesBtn} onClick={() => removeAmenity(index)}></button>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        {/* Amenities */}
        <div className={styles.formInputContainer}>
          <label className={styles.formLabel}>Amenities</label>
          <div className={styles.formInput}>
            <input
              type="text"
              name="amenities"
              id="amenities"
              placeholder="Water"
              required
            />
          </div>
        </div>
        {/* Status */}
        <div className={styles.formInputContainer}>
          <label className={styles.formLabel}>Status</label>
          <div className={styles.formInput}>
            <input
              type="text"
              name="status"
              id="status"
              placeholder="available"
              required

            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={styles.formButton}
        >
          {isLoading ? <Loader /> : "Add Amenities"}
        </button>
      </form>
      </div>
    </div>
  );
}
