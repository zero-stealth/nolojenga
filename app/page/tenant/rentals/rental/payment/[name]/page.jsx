"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import NavBar from "@/app/components/NavBar";
import PayCard from "@/app/components/PayCard";
import PopupComponent from "@/app/components/Popup";
import styles from "@/app/style/payment.module.css";
import BannerImage from "@/public/assets/banner.png";
import RatingComponent from "@/app/components/rating";
import ProfileImage from "@/public/assets/profile.png";
import LineArrow from "@/public/assets/dottedArrow.png";
import BackNavigation from "@/app/components/navigation";

const paymentData = {
  balance: 5000,
  username: "John Doe",
  profileImage: ProfileImage,
  CardRating: 4.5,
  paymentInfo: [
    {
      title: "Monthly Rent",
      amount: 15000,
    },
    {
      title: "House Deposit",
      amount: 5000,
    },
    {
      title: "Water Deposit",
      amount: 0,
    },
    {
      title: "Electricity Deposit",
      amount: 2000,
    },
  ],
};

const PayCardData = [
  {
    id: 1,
    Sender: ProfileImage,
    Reciever: BannerImage,
    price: "500",
    RecieverAccount: "070000000",
    SenderAccount: "0727388399",
  },
];


export default function Payment({ params }) {
  const [payPopup, setPayPopup] = useState(false);
  const { balance, username, profileImage, CardRating, paymentInfo } =
    paymentData;

  const togglePayPopup = () => {
    setPayPopup(!payPopup);
  };

  const getTotal = () => {
    const totalAmount = paymentInfo.reduce(
      (total, info) => total + info.amount,
      0
    );
    return totalAmount;
  };

  return (
    <div className={styles.paymentContainer}>
      <NavBar />
      <BackNavigation />
      <div className={styles.paymentWrapper}>
        <div className={styles.paymentTopContent}>
          <div className={styles.profileDetails}>
            <span>Your Wallet Balance</span>
            <h1>Ksh. {balance}</h1>
          </div>
          <Image
            src={LineArrow}
            alt="LineArrow Image"
            className={styles.lineArrowImage}
            height={200}
          />
          <div className={styles.profileDetails}>
            <div className={styles.profileTopDetails}>
              <div className={styles.profileRating}>
                <h1>{username}</h1>
                <RatingComponent RatingInfo={CardRating} />
              </div>
              <Image
                src={profileImage}
                alt="Profile Image"
                className={styles.profileImage}
                width={140}
                height={140}
              />
            </div>
          </div>
        </div>
        <div className={styles.paymentBottomContent}>
          {paymentInfo.map((info, index) => (
            <div key={index} className={styles.paymentDetailsInfoC}>
              <h1>{info.title}</h1>
              <h2>Ksh. {info.amount}</h2>
            </div>
          ))}
          <div className={styles.paymentTotal}>
            <h1>Total:</h1>
            <h1>Ksh. {getTotal()}</h1>
          </div>
        </div>
        <div className={styles.paymentFooter}>
          <button className={styles.paymentButton} onClick={togglePayPopup}>
            Make Payment
          </button>
        </div>
      </div>
      <PopupComponent
        Top={0}
        Left={0}
        Right={0}
        Bottom={0}
        Width={300}
        onClose={togglePayPopup}
        content={
          <div className={styles.viewResult}>
            <h1>Pay rent</h1>
            {PayCardData.map((d) => (
              <PayCard
                key={d.id}
                PayPrice={getTotal()}
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
    </div>
  );
}
