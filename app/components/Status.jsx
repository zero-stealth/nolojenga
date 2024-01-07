import Image from "next/image";
import styles from "@/app/style/status.module.css";
import FailedImage from "@/public/assets/failed.png";
import SucessImage from "@/public/assets/sucess.png";

export default function StatusCard({ Status }) {
  const ImageStatus = Status ? FailedImage : SucessImage;
  const StatusInfo = Status ? "Payment failed" : "Paid successfully";
  return (
    <div className={styles.statusComponent}>
      <Image
        className={styles.statusImage}
        src={ImageStatus}
        alt="status image"
        height={100}
        priority
      />
      <div className={`${styles.statusInfo} ${Status ? styles.failed : ""}`}>
        <span>{StatusInfo}</span>
      </div>
    </div>
  );
}
