import  { useState } from "react";
import styles from "@/app/style/service.module.css";
import { HeartIcon as NotLovedIcon } from "@heroicons/react/24/outline";
import { HeartIcon as LovedIcon }  from "@heroicons/react/24/solid";

export default function LoveComponent() {
  const [isLoved, setIsLoved] = useState(false);

  const toggleLike = () => {
    setIsLoved(!isLoved)
  };

  const IconStatus = isLoved ? LovedIcon : NotLovedIcon;

  return (
    <div className={styles.LoveComponent} onClick={toggleLike}>
      <IconStatus
        className={styles.LoveIcon}
        alt="love icon"
        width={20}
        priority
      />
    </div>
  );
}
