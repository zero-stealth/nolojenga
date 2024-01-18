"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import CardImg from "@/public/assets/card.png";
import styles from "@/app/style/pay.module.css";
import MpesaImg from "@/public/assets/Mpesa.png";
import StatusCard from "@/app/components/Status";
import CryptoImg from "@/public/assets/crypto.png";
import PopupComponent from "@/app/components/Popup";

export default function PayCard({
  SenderImage,
  SenderAccount,
  RecieverImage,
  RecieverAccount,
  PayPrice,
}) {
  const images = [CryptoImg, CardImg, MpesaImg];
  const [isPaid, setisPaid] = useState(false);
  const [isSucessful, setSucessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiLink, setApiLink] = useState("api/link");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  const toggleSucessful = () => {
    setSucessful(!isSucessful);
  };

  const openSucess = () => {
    setSucessful(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      switch (currentImageIndex) {
        case 0:
          setApiLink("api/crpto");
          break;
        case 1:
          setApiLink("api/card");
          break;
        case 2:
          setApiLink("api/mpesa");
          break;
        default:
          break;
      }

      const response = await fetch(apiLink, {
        method: "POST",
        body: PayPrice,
      });

      const data = await response.json();
      setisPaid(true);
      toast.success(`paid succesfuly`);
      router.push("/page/payment");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      openSucess();
      toast.error(`payment unsuccesfuly`);
      router.push("/page/payment");
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.payComponent}>
      <div className={styles.payImageComponent}>
        <Image
          className={styles.payImage}
          src={images[currentImageIndex]}
          alt={"pay image"}
          layout="fill"
          quality={100}
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles.imageSlider}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.circleAdv} ${
              currentImageIndex === index ? styles.activeCircle : ""
            }`}
            onClick={() => {
              currentImageIndex === index ? nextImage() : prevImage();
            }}
          ></div>
        ))}
      </div>
      <div className={styles.paySection}>
        <div className={styles.paySectionInfo}>
          <span>From</span>
          <div className={styles.payInnerWrapper}>
            <Image
              className={styles.payInnerImage}
              src={SenderImage}
              alt="sender image"
              width={35}
              height={35}
              priority
            />
            <span>{SenderAccount}</span>
          </div>
        </div>
        <div className={styles.paySectionInfo}>
          <span>To</span>
          <div className={styles.payInnerWrapper}>
            <Image
              className={styles.payInnerImage}
              src={RecieverImage}
              alt="reciever image"
              width={35}
              height={35}
              priority
            />
            <span>{RecieverAccount}</span>
          </div>
        </div>
      </div>
      <button type="submit" disabled={isLoading} className={styles.btnPay}>
        {isLoading ? <Loader /> : `ksh ${PayPrice}`}
      </button>
      <PopupComponent
        Top={0}
        Left={0}
        Right={0}
        Bottom={0}
        Width={250}
        onClose={toggleSucessful}
        content={<StatusCard Status={isPaid} />}
        isOpen={isSucessful}
      />
    </form>
  );
}
