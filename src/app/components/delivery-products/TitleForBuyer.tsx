'use client'

import { motion } from "framer-motion";
import { titleVariants } from "@/app/assets/animation/animateMainPage";
import styles from './delivery-products.module.scss';

const TitleForBuyer = () => {
    return (
        <motion.div
            className={styles.slogan}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.9 }}
        >
            <motion.div variants={titleVariants}>
                <h3 className={styles.sloganDescription}>Доставка товарів</h3>
                <h2 className={styles.sloganTitle}>Перетворюємо Ваші бажання у реальність</h2>
                <p className={styles.sloganPharagraph}>Пропонуємо великий вибір товарів від місцевих постачальників, зі швидкою доставкою прямо до Вашого порогу</p>
            </motion.div>
        </motion.div>
    )
};

export default TitleForBuyer;