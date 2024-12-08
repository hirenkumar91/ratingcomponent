"use client";
import { useState } from "react";
import Rating from "./components/rating";
import Image from "next/image";
import styles from "./compo.module.css";
import Submit from "./components/button";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
  };

  const toggleVisibility = () => {
    setIsVisible(false);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div
        className={`${styles.component} ${
          isVisible ? styles.show : styles.hide
        }`}
      >
        <div className={styles.ImageContainer}>
          <Image
            src="/icon-star.svg"
            alt="Example Image"
            width={20}
            height={30}
          />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <Rating onRatingChange={handleRatingChange} />
        <Submit onClick={toggleVisibility} />
      </div>

      <div
        className={`${styles.component} ${
          isVisible ? styles.hide : styles.show
        } ${styles.ThankYou}`}
      >
        <Image
          src="/illustration-thank-you.svg"
          alt="Thank You Illustration"
          width={300}
          height={200}
        />
        {selectedRating !== null && (
          <p className={styles.GivenRating}>
            You selected {selectedRating} out of 5
          </p>
        )}
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
