import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/app/style/InfoCard.module.css";

export default function FloatingInfoComponent({
  floatingImage,
  floatingPrice,
  floatingLink,
  Bottom,
  Shadow,
  Right,
}) {
  const router = useRouter();


  return (
    <div
      style={{
        right: `${Right}px`,
        bottom: `${Bottom}px`,
        boxShadow: `${Shadow}`,
      }}
      className={styles.infoCardProfile}
    >
      <span>{floatingPrice}</span>
      <Image
        className={styles.infoCardProfileImage}
        src={floatingImage}
        alt="InfoCardTitle"
        width={30}
        height={30}
        priority
      />
    </div>
  );
}
