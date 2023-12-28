'use client'
import { useState } from "react";
import styles from "./description-switch.module.scss";

const DescriptionSwitch = () => {
  const [active, setActive] = useState("forBuyers");

  const handleClickActive = (id) => setActive(id);

  const BUTTONS = [
    { id: "forBuyers", text: "Для покупців" },
    { id: "forSellers", text: "Для Продавців" },
  ];

  return (
    <div className={styles.switchWrapp}>
      {BUTTONS.map(({ id, text }) => (
        <button
          key={id}
          className={`${styles.btnSwitch} ${
            active === id ? styles.btnSwitchActive : ""
          }`}
          onClick={() => handleClickActive(id)}
        >
          <span>{text}</span>
        </button>
      ))}
    </div>
  );
};

export default DescriptionSwitch;
