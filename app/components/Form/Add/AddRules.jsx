import { useState } from "react";
import toast from 'react-hot-toast';
import Loader from "@/app/components/Loader";
import styles from "@/app/style/addAmenitiesComponent.module.css";

export default function AddAmenities() {
  const [isLoading, setIsLoading] = useState(false);
  const [rules, setRules] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    try {
      const formData = new FormData(event.currentTarget);
      const newRules = {
        rules: formData.get("rules"),
      };
  
      const response = await fetch("/api/submitArray", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRules),
      });
  
      toast.success('Rules added succesfully')
      setRules((prevRules) => [...prevRules, newRules]);
    } catch (error) {
      console.error(error);
     toast.error('failed to add rules')
    } finally {
      setIsLoading(false);
    }
  };
  

  const removeRules = (index) => {
    const updatedRules= [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  return (
    <div className={styles.AddAmenitiesComponent}>
      <div className={styles.formHeader}>
        <h1>Rules</h1>
      </div>
      <div className={styles.AddAmenitiesContentCont}>
      <div className={styles.AddAmenitiesContent}>
        {rules.map((rules, index) => (
          <div key={index} className={styles.amenityItem}>
            <span>{rules.rules}</span>
            <button className={styles.AddAmenitiesBtn} onClick={() => removeRules(index)}></button>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        {/* rules */}
        <div className={styles.formInputContainer}>
          <label className={styles.formLabel}>Amenities</label>
          <div className={styles.formInput}>
            <input
              type="text"
              name="rules"
              id="rules"
              placeholder="stealing is not allowed"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={styles.formButton}
        >
          {isLoading ? <Loader /> : "Add Rules"}
        </button>
      </form>
      </div>
    </div>
  );
}
