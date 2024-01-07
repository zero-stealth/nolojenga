import Image from "next/image";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import styles from "@/app/style/roomSlider.module.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function RoomComponent({ RoomImages }) {
  const images = RoomImages;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const bookView = () => {
    toast.success("Booked Succesfully");
  };

  return (
    <div className={styles.roomComponent}>
      <div className={styles.roomImageContainer}>
      <ChevronLeftIcon
        className={styles.roomIcon}
        alt="left icon"
        onClick={prevImage}
        width={30}
        height={30}
      />
        <ChevronRightIcon
        className={styles.roomIcon}
        alt="right icon"
        onClick={nextImage}
        width={30}
        height={30}
      />
      </div>
     
      <Image
        className={styles.roomImage}
        src={images[currentImageIndex]}
        alt="rental image"
        layout="fill"
        quality={100}
        objectFit="cover"
        priority
      />
    <button className={styles.roomBtn} onClick={() => bookView()}>
    Book Viewing
    </button>
    </div>
  );
}
