import { useState } from "react";
import styles from "./components.module.css";

export default function Rating({ onRatingChange }) {
  const [rating, setRating] = useState(null);

  const handleRatingClick = (ratingValue) => {
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
