"use client";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Visa from "@/app/page/payment/visa";
import Mpesa from "@/app/page/payment/mpesa";
import Airtel from "@/app/page/payment/airtel";
import VisaImage from "@/public/assets/visa.png";
import styles from "@/app/style/topup.module.css";
import Crypto from "@/app/page/payment/nolocrypto";
import MpesaImage from "@/public/assets/mpesa1.png";
import AirtelImage from "@/public/assets/airtel.png";
import NolocryptoImage from "@/public/assets/crypto.png";
import { useComponentStore } from "@/app/store/Component";

export default function TopupPage() {
  const { activeComponent, setActiveComponent } = useComponentStore();
  const [amount, setAmount] = useState("");

  const handleRoute = (route) => {
    setActiveComponent(route);
  };

  const paymentMethods = [
    {
      id: 1,
      name: "Nolocrypto",
      image: NolocryptoImage,
    },
    {
      id: 2,
      name: "Visa",
      image: VisaImage,
    },
    {
      id: 3,
      name: "Mpesa",
      image: MpesaImage,
    },
    {
      id: 4,
      name: "Airtel",
      image: AirtelImage,
    },
  ];

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Mpesa":
        return <Mpesa />;
      case "Nolocrypto":
        return <Crypto />;
      case "Visa":
        return <Visa />;
      case "Airtel":
        return <Airtel />;
      default:
        return null;
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setAmount(inputValue);
    localStorage.setItem("payment", inputValue);
  };

  return (
    <div className={styles.topupContainer}>
      {activeComponent === null ? (
        <>
          <div className={styles.topupHeader}>
            <h1>Wallet Topup {amount} </h1>
          </div>
          <label htmlFor="amount">Topup amount</label>
          <input
            className={styles.topupInput}
            type="text"
            name="amount"
            id="amount"
            placeholder="Ksh 0.00"
            onChange={handleInputChange}
          />
          <label htmlFor="method">Choose a payment method</label>
          <div className={styles.topupPayment} id="method">
            {paymentMethods.map((method) => (
              <div className={styles.topupPaymentCard} key={method.id}>
                <Image
                  src={method.image}
                  onClick={() => handleRoute(method.name)}
                  className={styles.topupPaymentImage}
                  alt="Payment image"
                  height={80}
                  priority
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.paymentPageMain}>{renderActiveComponent()}</div>
      )}
    </div>
  );
}
