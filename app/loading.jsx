import Image from "next/image";
import styles from "@/app/style/loading.module.css";
import AnimatedLogo from "@/public/assets/AnimatedLogo.webp";

export default function Loading() {
  return (
    <div className={styles.loadingComponent}>
      <Image
        className={styles.loadingImg}
        src={AnimatedLogo}
        alt="Animated Logo "
        priority
      />
    </div>
  );
}
