'use client'

import { motion } from "framer-motion";
import { cardVariants } from "@/app/assets/animation/animateMainPage";
import CheckSquare from '../../assets/icons/check-square.svg';
import ShoppingBag from '../../assets/icons/shopping-bag.svg';
import Truck from '../../assets/icons/truck.svg';
import styles from './delivery-products.module.scss';

interface CardItem {
    id: number,
    title: string,
    paragraph: string,
    icon: JSX.Element,
}

const Cards = () => {

    const CARDS_LIST: CardItem[] = [
        {
            id: 1,
            title: "Широкий вибір",
            paragraph: "Замовляйте улюблені товари з нашого  каталогу. Обирайте серед найкращих пропозицій від місцевих постачальників",
            icon: <CheckSquare />
        },
        {
            id: 2,
            title: "Ексклюзивна доставка",
            paragraph: "Насолоджуйтеся особливою службою доставки, яка приводить ваші покупки прямо до дверей",
            icon: <ShoppingBag />
        },
        {
            id: 3,
            title: "Зручніші покупки",
            paragraph: "Ваші покупки стануть не тільки простішими, але й набагато приємнішими ",
            icon: <Truck />
        }
    ];

    return (
        <motion.ul className={styles.descriptionCardsWrapp}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.9 }}
        >
            {CARDS_LIST.map(({id, title, icon, paragraph}, index) => (
                <motion.li key={id} className={styles.descriptionCard} variants={cardVariants} custom={index}>
                    {icon}
                    <h3 className={styles.descriptionCardTitle}>{title}</h3>
                    <p className={styles.descriptionCardParagraph}>{paragraph}</p>
                </motion.li>
            ))}
        </motion.ul>
    )
};

export default Cards;