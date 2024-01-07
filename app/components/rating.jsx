import  { useState } from "react";
import styles from "@/app/style/rating.module.css";
import { StarIcon as NotStarredIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarredIcon }  from "@heroicons/react/24/solid";;

export default function RatingComponent({ RatingInfo }) {
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(RatingInfo); 

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setRating(rating + (isLiked ? -1 : 1));
  };

  const IconStatus = isLiked ? StarredIcon : NotStarredIcon;

  return (
    <div className={styles.RatingComponent} onClick={toggleLike}>
      <IconStatus
        className={styles.StarIcon}
        alt="star icon"
        width={18}
        height={18}
        priority
      />
      <span>{rating}</span>
    </div>
  );
}
