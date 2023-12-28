'use client'
import { motion } from "framer-motion";
import styles from "./track.module.scss";
import Star from "../../assets/icons/star.svg";
import { trackAnimation } from "../../assets/animation/animateMainPage";

const Track = () => {
    const trackElements: string[] = new Array(8).fill("Замовляйте онлайн – отримуйте без зусиль!");

    return (
        <div className={styles.wrapp}>
            <div className={styles.contentWrapper}>
                <motion.div
                    className={styles.content}
                    animate={trackAnimation}
                >
                    {trackElements.map((element, index) => (
                        <div className={styles.content} key={index}>
                            <Star />
                            {element}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Track;