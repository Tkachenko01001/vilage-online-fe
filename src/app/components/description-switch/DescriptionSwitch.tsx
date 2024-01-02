'use client'
import { useState } from "react";
import styles from "./description-switch.module.scss";

enum ButtonId {
  ForBuyers = "forBuyers",
  ForSellers = "forSellers",
}

interface ButtonsSwitch {
  id: ButtonId,
  text: string
}

const DescriptionSwitch = () => {
  const [active, setActive] = useState<ButtonId>(ButtonId.ForBuyers);

  const handleClickActive = (id: ButtonId) => setActive(id);

  const BUTTONS: ButtonsSwitch[] = [
    { id: ButtonId.ForBuyers, text: "Для покупців" },
    { id: ButtonId.ForSellers, text: "Для Продавців" },
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
