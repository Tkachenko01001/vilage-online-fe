'use client'
import Image from 'next/image';
import { motion } from "framer-motion";
import { titleVariants, lineVariants } from "@/app/assets/animation/animateMainPage";
import styles from "./payment-delivery.module.scss";

const PaymentDelivery = () => {

    const LIST_LINES = [
        {
            number: "01",
            paragraph: "Вам не потрібно турбуватися про окремий процес оплати доставки",
        },
        {
            number: "02",
            paragraph: "Все враховано і спрощено для Вашої зручності, дозволяючи Вам зосередитись на важливому - виборі та придбанні потрібних товарів",
        }
    ];

    return (
        <section className={styles.container}>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.9 }}>
                <motion.div variants={titleVariants} className={styles.titleWrapp}>
                    <h3 className={styles.description}>Оплата доставки</h3>
                    <h2 className={styles.title}>Легка та Автоматична Оплата Доставки</h2>
                    <p className={styles.paragraph}>З нашою системою, оплата доставки Ваших замовлень відбувається автоматично та без зусиль - просто в один клік, одночасно з оплатою Вашого замовлення</p>
                </motion.div>
            </motion.div>
            <ul className={styles.list}>
                {
                    LIST_LINES.map(({ number, paragraph }, index) => (
                        <motion.li key={index} className={styles.line} initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.9 }}>
                            <motion.div className={styles.lineWrapp} variants={lineVariants} custom={index}>
                                <p className={styles.number}>{number}</p>
                                <p className={styles.paragraphLine}>{paragraph}</p>
                            </motion.div>
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
};

export default PaymentDelivery;