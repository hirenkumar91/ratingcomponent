// components/button.tsx

import React from "react";
import styles from "./components.module.css";

interface SubmitProps {
  onClick: () => void;
}

const Submit: React.FC<SubmitProps> = ({ onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      SUBMIT
    </div>
  );
};

export default Submit;
