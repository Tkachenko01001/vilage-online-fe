'use client'
import { motion } from "framer-motion";
import { titleVariants, cardVariants } from "@/app/assets/animation/animateMainPage";
import ButtonTryForFree from "../button-try-for-free/ButtonTryForFree";
import FolderPlus from "../../assets/icons/folder-plus.svg";
import FolderEdit from "../../assets/icons/folder-edit.svg";
import Pointer from "../../assets/icons/pointer.svg";
import styles from "./payment-orders.module.scss";

const PaymentOrders = () => {

    const LIST_CARDS = [
        { icon: <FolderPlus />, number: '01', paragraph: 'Оберіть необхідний товар' },
        { icon: <Pointer />, number: '02', paragraph: 'Натисніть на кнопку оплати' },
        { icon: <FolderEdit />, number: '03', paragraph: 'Заповніть вказані поля - і все готово!' }
    ]
    return (
        <section className={styles.container}>
            <motion.div className={styles.titleWrapp}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.9 }}>
                <motion.div variants={titleVariants}>
                    <h3 className={styles.description}>Оплата замовлень</h3>
                    <h2 className={styles.title}>Оплачуйте Ваші покупки легко і швидко в один клік</h2>
                    <p className={styles.paragraph}>Наша безготівкова система  оплати спроектована для максимальної зручності, ефективності та безпеки. Насолоджуйтеся покупками без зайвих зусиль!</p>
                </motion.div>
                <div className={styles.blurBall}></div>
            </motion.div>
            <motion.ul className={styles.list}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.9 }}>
                {LIST_CARDS.map(({ icon, number, paragraph }, index) => (
                    <motion.li key={index} className={styles.line} variants={cardVariants} custom={index}>
                        <div className={styles.lineWrapp}>
                            {icon}
                            <p className={styles.number}>{number}</p>
                        </div>
                        <p className={styles.paragraph}>{paragraph}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <div className={styles.btnWrapp}>
                <ButtonTryForFree />
            </div>
        </section>
    )
};

export default PaymentOrders;