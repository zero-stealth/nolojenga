import { useState } from "react";
import toast from 'react-hot-toast';
import Loader from "@/app/components/Loader";
import styles from "@/app/style/addPayableComponent.module.css";

export default function AddPayable() {
  const [isLoading, setIsLoading] = useState(false);
  const [Payable, setPayable] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const newpayable = {
        Payable: formData.get("Payable"),
        Recurrence: formData.get("recurrence"),
        Amount: formData.get("amount"),
      };

      const response = await fetch("/api/submitArray", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newpayable),
      });

      toast.success('payable added succesfully')
      // const responseData = await response.json();
      setPayable((prevPayable) => [...prevPayable, newpayable]);
    } catch (error) {
      console.error(error);
      toast.error('failed to add payable')
    } finally {
      setIsLoading(false);
    }
  };

  const removepayable = (index) => {
    const updatedPayable = [...Payable];
    updatedPayable.splice(index, 1);
    setPayable(updatedPayable);
  };

  return (
    <div className={styles.AddPayableComponent}>
      <div className={styles.PayableContent}>
        <div className={styles.AddPayableContent}>
          <div className={styles.formHeader}>
            <h1>Payable</h1>
          </div>
          <div className={styles.payableItem}>
            <div className={styles.payableHeader}>
              <h1>Name</h1>
              <h1>Recurrence</h1>
              <h1>Amount</h1>
              <h1>Remove</h1>
            </div>
            {Payable.map((payable, index) => (
              <div key={index} className={styles.payableContentA}>
                <span>{payable.Payable}</span>
                <span>{payable.Recurrence}</span>
                <span>ksh. {payable.Amount}</span>
                <button
                  className={styles.AddPayableBtn}
                  onClick={() => removepayable(index)}
                ></button>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Add Payable</h1>
          </div>
          {/* Payable name */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Payable name</label>
            <div className={styles.formInput}>
              <input
                type="text"
                name="Payable"
                id="Payable"
                placeholder="water"
                required
              />
            </div>
          </div>

          {/* Payment recurrence */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Payment recurrence</label>
            <div className={styles.formInput}>
              <input
                type="text"
                name="recurrence"
                id="recurrence"
                placeholder="monthly"
                required
              />
            </div>
          </div>
          {/* Amount */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Amount</label>
            <div className={styles.formInput}>
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="1000"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.formButton}
          >
            {isLoading ? <Loader /> : "Add Payable"}
          </button>
        </form>
      </div>
    </div>
  );
}
