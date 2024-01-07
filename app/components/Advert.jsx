import Image from "next/image";
import { useState, useEffect } from "react";
import FloatingInfo from "@/app/components/floatingInfo";
import styles from "@/app/style/Advert.module.css";

export default function AdvertComponent({
  Height,
  AdvertInfo,
  AdvertImages,
  AdvertLink,
  FloatingImage,
  FloatingPrice,
}) {
  const images = AdvertImages;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div
      style={{
        height: `${Height}px`,
      }}
      className={styles.advertComponent}
    >
      <div className={styles.adinfo}>
      <h3>{AdvertInfo}</h3>

      </div>
      <Image
        className={styles.advertImage}
        src={images[currentImageIndex]}
        alt={AdvertInfo.title}
        layout="fill"
        quality={100}
        objectFit="cover"
        priority
      />
      <div className={styles.imageSlider}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.circleAdv} ${ currentImageIndex === index ? styles.activeCircle : ''}`}
          ></div>
        ))}

        <FloatingInfo
          Right={10}
          Bottom={10}
          Shadow={"none"}
          floatingImage={FloatingImage}
          floatingPrice={FloatingPrice}
          floatingLink={AdvertLink}

        />
      </div>
    </div>
  );
}
