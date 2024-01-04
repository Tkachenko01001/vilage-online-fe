'use client'
import Image from 'next/image';
import { motion } from "framer-motion";
import { titleVariants, lineVariants } from "@/app/assets/animation/animateMainPage";
import moneyPic from '../../assets/icons/money.png';
import iconBusiness from '../../assets/icons/IconBusiness.png';
import iconBusinessSmall from '../../assets/icons/IconBusiness-small.png';
import styles from './advantages.module.scss';

const Advantages = () => {
    const ADVANTAGES_LIST = [
        { title: 'Зручні Покупки', paragraph: 'Замовляйте все необхідне, не виходячи з дому. Затишок вашого будинку – ідеальне місце для придбання всього необхідного' },
        { title: 'Ефективна Економія', paragraph: 'Уникайте додаткових витрат у місцевих магазинах та не тратьте час на очікування поставки товарів' },
        { title: 'Максимальний Вибір', paragraph: 'Наш сервіс забезпечує безперервний доступ до широкого асортименту товарів. Максимізуйте свої можливості без надмірних зусиль' }];
    return (
        <section className={styles.container}>
            <div className={styles.wrrapText}>
                <motion.div className={styles.titleWarapp} initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.9 }}>
                    <motion.div variants={titleVariants}>
                        <h3 className={styles.description}>Переваги</h3>
                        <h2 className={styles.title}>Заощаджуйте час та кошти</h2>
                        <p className={styles.paragraph}>Дозвольте нам розпочати революцію у Вашому досвіді покупок – швидко, зручно та з ефективною економією часу та коштів</p>
                    </motion.div>
                </motion.div>
                <ul className={styles.list}>
                    {ADVANTAGES_LIST.map(({ title, paragraph }, index) => (
                        <motion.li key={index} className={styles.line} initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.9 }}>
                            <motion.div variants={lineVariants} custom={index}>
                                <h4 className={styles.lineTitle}>{title}</h4>
                                <p className={styles.lineParagraph}>{paragraph}</p>
                            </motion.div>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className={styles.wrappIcons}>
                <div className={styles.wrappIconsBusiness}>
                    <Image className={styles.iconBusinessSmall} src={iconBusinessSmall} alt="iconBusiness-small" />
                    <Image className={styles.iconBusiness} src={iconBusiness} alt="iconBusiness" />
                </div>
                <Image className={styles.iconMoney} src={moneyPic} alt="money" />
            </div>
            <div className={styles.blurBall}></div>
        </section>
    )
};

export default Advantages;