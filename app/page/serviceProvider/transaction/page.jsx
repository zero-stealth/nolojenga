"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import CryptoImg from "@/public/assets/crypto.png";
import { useRef, useEffect, useState } from "react";
import IncomeGraph from "@/app/components/IncomeGraph";
import ProfileImage from "@/public/assets/profile.png";
import styles from "@/app/style/transaction.module.css";
import ExpenseGraph from "@/app/components/ExpenseGraph";

import {
  ShareIcon,
  PaperAirplaneIcon as SendIcon,
  WalletIcon as DepositIcon,
  ArrowsRightLeftIcon as WithdrawIcon,
} from "@heroicons/react/24/outline";

const ExpensesData = [
  {
    id: 1,
    title: "Service - wiring",
    price: "KSH 10,000",
    date: "Jan 10",
  },
  {
    id: 2,
    title: "Service - rent",
    price: "KSH 30,000",
    date: "Jan 25",
  },
  {
    id: 3,
    title: "Service - cleaning",
    price: "5,00000",
    date: "May 10",
  },
];
const IncomeData = [
  {
    id: 1,
    title: "land - penguin land",
    price: "KSH 10000,0000",
    date: "Jan 10",
  },
  {
    id: 2,
    title: "rent - penguin mansion",
    price: "KSH 500,000",
    date: "Dec 15",
  },
  {
    id: 3,
    title: "Service - cleaning",
    price: "5,00000",
    date: "June 10",
  },
];

const TransactionData = [
  {
    id: 1,
    time: "12.00 pm",
    date: "Jan 10",
    info: "Rent payment to Naruto uchiha for the Villa vi ksh 30,000/-",
  },
  {
    id: 2,
    time: "8.00 am",
    date: "Dec 10",
    info: "Cleaning serviced payment to Styna  archy for the Mansion infinity ksh 60,000/-",
  }
];

export default function TransactionPage() {
  const router = useRouter();
  const [showPage, setShowPage] = useState("Expenses");
  const [personalKey, setPersonalKey] = useState("45679876k54");

  const openExpense = () => {
    setShowPage("Expenses");
  };

  const openIncome = () => {
    setShowPage("Income");
  };

  const shareKey = () => {
    navigator.clipboard
      .writeText(personalKey)
      .then(() => {
        console.log("personal Key copied to clipboard:", personalKey);
      })
      .catch((err) => {
        console.error("Error copying to clipboard:", err);
      });
  };

  const CardData = showPage === "Expenses" ? ExpensesData : IncomeData;

  const pay = () => {
    router.push("/page/payment");
    
  }

  return (
    <div className={styles.transactionComponent}>
      <NavBar />
      <div className={styles.transactionWrap}>
        <div className={styles.PagetransactionWrap}>
          <div className={styles.PagetransactionBtnContain}>
            <button
              className={`${styles.transactionBtn} ${
                showPage === "Expenses" ? styles.activeTransactionBtn : ""
              }`}
              onClick={openExpense}
            >
              Expenses graph
            </button>
            <button
              className={`${styles.transactionBtn} ${
                showPage === "Income" ? styles.activeTransactionBtn : ""
              }`}
              onClick={openIncome}
            >
              Income graph
            </button>
          </div>
          <div className={styles.transactionGraph}>
            {
               showPage === "Expenses" ? <ExpenseGraph/> : <IncomeGraph/>
            }
          </div>
          <div className={styles.transactionUse}>
            <h1>{showPage}</h1>
            <div className={styles.transactionCardContain}>
              {CardData.map((d) => (
                <div className={styles.transCard} key={d.id}>
                  <span>{d.title}</span>
                  <h1>{d.price}</h1>
                  <span>{d.date}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.transactionInfoContain}>
            <div className={styles.transactionHeader}>
              <h1>Transaction</h1>
              <input
                type="date"
                name="TransactionDate"
                className={styles.transactionDate}
              />
            </div>
            <div className={styles.transactionMsgContain}>
              {TransactionData.map((d) => (
                <div className={styles.transactionMsgWrapper} key={d.id}>
                  <div className={styles.transactionCircle}></div>
                  <div className={styles.transactionMsg}>
                    <span>{d.date}</span>
                    <p>{d.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.PageWrapCard}>
          <div className={styles.cardWalletSection}>
            <div className={styles.WalletInSection}>
            <h1>My wallet</h1>
              <div className={styles.cardProfileContain}>
                <Image
                  src={ProfileImage}
                  className={styles.cardProfileImg}
                  alt="Profile image"
                  height={50}
                />
                <div className={styles.cardProfileInfo}>
                  <h1>Shaun Daniel</h1>
                  <span>{personalKey}</span>
                </div>
              </div>
              <div className={styles.cardInnerWallet}>
                <div className={styles.cardWalletContain}>
                  <Image
                    className={styles.cardWalletImage}
                    src={CryptoImg}
                    alt={"nolojenga wallet image"}
                    layout="fill"
                    quality={100}
                    objectFit="fill"
                    priority
                  />
                  <div className={styles.cardWalletContainInfo}>
                    <h3>Your Wallet Balance</h3>
                    <span>Ksh. 21, 657.97</span>
                  </div>
                </div>
                <div className={styles.cardInnerWalletBtn}>
                  <button onClick={pay}  className={`${styles.InnerWalletBtn} ${ styles.InnerWalletBtnTop}`}>
                    <SendIcon
                      className={styles.InnerWalletIcon}
                      alt="deposit icon"
                      width={22}
                      height={22}
                    />
                    <span>Deposit</span>
                  </button>
                 
                  <button onClick={pay}  className={`${styles.InnerWalletBtn} ${ styles.InnerWalletBtnMiddle}`}>
                    <DepositIcon
                      className={styles.InnerWalletIcon}
                      alt="deposit icon"
                      width={22}
                      height={22}
                    />
                    <span>Send</span>
                  </button>
                  <button onClick={pay}  className={styles.InnerWalletBtn}>
                    <WithdrawIcon
                      className={styles.InnerWalletIcon}
                      alt="deposit icon"
                      width={22}
                      height={22}
                    />
                    <span>Withdraw</span>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.cardWalletLink}>
              <h1>Share Personal Key</h1>
              <div className={styles.cardWalletLinkShare} onClick={shareKey}>
                <span>{personalKey}</span>
                <ShareIcon
                  className={styles.InnerWalletLinkIcon}
                  alt="Share icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
