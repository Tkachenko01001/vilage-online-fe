'use client'

import Arrow from '../../assets/icons/arrow.svg';
import styles from "./button-try-for-free.module.scss";

const ButtonTryForFree = () => {

    const handleHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.pageX - (e.target as HTMLElement).offsetLeft;
    const y = e.pageY - (e.target as HTMLElement).offsetTop;

    (e.target as HTMLElement).style.setProperty("--x", `${x}px`);
    (e.target as HTMLElement).style.setProperty("--y", `${y}px`);
    };
    
    return (
        <div className={styles.btnBorder}>
            <button className={styles.btn} type="button" onMouseMove={handleHover}>
                <span className={styles.btnText}>Спробувати безкоштовно</span>
                <Arrow className={styles.iconArow} />
            </button>
        </div>
    )
};

export default ButtonTryForFree;