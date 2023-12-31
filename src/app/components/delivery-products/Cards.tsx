'use client'

import { motion } from "framer-motion";
import { cardVariants } from "@/app/assets/animation/animateMainPage";
import CheckSquare from '../../assets/icons/check-square.svg';
import ShoppingBag from '../../assets/icons/shopping-bag.svg';
import Truck from '../../assets/icons/truck.svg';
import styles from './delivery-products.module.scss';

const Cards = () => {

    const CARDS_LIST = [
        {
            id: 1,
            firstTitle: "Доставка товарів",
            secondTitle: "Перетворюємо Ваші бажання у реальність",
            paragraph: "Пропонуємо великий вибір товарів від місцевих постачальників, зі швидкою доставкою прямо до Вашого порогу",
            icon: <CheckSquare />
        },
        {
            id: 2,
            firstTitle: "Доставка товарів",
            secondTitle: "Перетворюємо Ваші бажання у реальність",
            paragraph: "Пропонуємо великий вибір товарів від місцевих постачальників, зі швидкою доставкою прямо до Вашого порогу",
            icon: <ShoppingBag />
        },
        {
            id: 3,
            firstTitle: "Доставка товарів",
            secondTitle: "Перетворюємо Ваші бажання у реальність",
            paragraph: "Пропонуємо великий вибір товарів від місцевих постачальників, зі швидкою доставкою прямо до Вашого порогу",
            icon: <Truck />
        }
    ];

    return (
        <motion.ul className={styles.descriptionCardsWrapp}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.9 }}
        >
            {CARDS_LIST.map((card, index) => (
                <motion.li key={card.id} className={styles.descriptionCard} variants={cardVariants} custom={index}>
                    {card.icon}
                    <h3 className={styles.descriptionCardTitle}>{card.firstTitle}</h3>
                    <p className={styles.descriptionCardParagraph}>{card.paragraph}</p>
                </motion.li>
            ))}
        </motion.ul>
    )
};

export default Cards;