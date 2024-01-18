"use client";

import toast from "react-hot-toast";
import { useState , useEffect} from "react";
import Loader from "@/app/components/Loader";
import styles from "@/app/style/topup.module.css";
import { useComponentStore } from "@/app/store/Component";
import { ChevronDoubleLeftIcon as BackIcon } from "@heroicons/react/24/outline";

export default function AirtelPage() {
    const { activeComponent, setActiveComponent } = useComponentStore();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState("");
  
    useEffect(() => {
      const storedData = localStorage.getItem("PhoneNumber");
      setData(storedData);
    }, []);
  
    async function onSubmit(event) {
      event.preventDefault();
      setIsLoading(true);
  
      try {
        const formData = new FormData(event.currentTarget);
        const response = await fetch("/api/submit", {
          method: "POST",
          body: formData,
        });
  
        const responseData = await response.json();
        toast.success("payment successful");
        // setData(responseData.someKey);
      } catch (error) {
        console.error(error);
        toast.error("payment failed");
      } finally {
        setIsLoading(false);
      }
    }
  
    return (
      <div className={styles.topupContainer}>
        <div className={styles.topupHeader}>
          <h1>{activeComponent} </h1>
          <button onClick={() => setActiveComponent(null)} className={styles.topupBack}>
            <BackIcon
              className={styles.paymentBack}
              alt="back icon"
              width={16}
              height={16}
            />
            Back
          </button>
        </div>
        <form className={styles.topupForm} onSubmit={onSubmit}>
          <label htmlFor="PhoneNumber">PhoneNumber</label>
          <input
            className={styles.topupInput}
            type="text"
            name="PhoneNumber"
            id="PhoneNumber"
            placeholder="2547xxxxxxx"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={styles.formButton}
          >
            {isLoading ? <Loader /> : "Pay"}
          </button>
        </form>
      </div>
    );
  }
  