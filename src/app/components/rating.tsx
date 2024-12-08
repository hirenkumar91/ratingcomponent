import { useState } from "react";
import styles from "./components.module.css";

interface RatingProps {
  onRatingChange: (rating: number) => void;
}

export default function Rating({ onRatingChange }: RatingProps) {
  const [rating, setRating] = useState<number | null>(null);

  const handleRatingClick = (ratingValue: number) => {
    setRating(ratingValue);
    onRatingChange(ratingValue);
  };

  return (
    <div>
      <div className={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className={`${styles.ratingButton} ${
              rating === value ? styles.selected : ""
            }`}
            onClick={() => handleRatingClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}
