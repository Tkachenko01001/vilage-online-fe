"use client"
import { motion } from "framer-motion";
import { titleAnimation, bigBasketAnimation, smallBasketAnimation } from "../../assets/animation/animateMainPage";
import ButtonTryForFree from "../button-try-for-free/ButtonTryForFree";
import Elipse from '../../assets/icons/ellipse.svg';
import styles from './hero.module.scss';
import Track from '../track/Track';

const Hero = () => {

    return (
        <section className={styles.sectionWrapp}>
            <motion.div className={styles.titleWrapp} {...titleAnimation}>
                <h1 className={styles.title}>Покупки з доставкою до вашого дому</h1>
                <p className={styles.paragraph}>Зекономимо Ваш час та кошти та забезпечимо доступ до усіх необхідних товарів</p>
                <ButtonTryForFree />
            </motion.div>
            <div className={`${styles.blurBall} ${styles.blurBallHeight}`}></div>
                <Elipse className={styles.iconElipse} />
            <div className={`${styles.blurBall} ${styles.blurBallBottom}`}></div>
            <motion.div {...bigBasketAnimation} className={styles.basketWrapp}></motion.div>
            <motion.div {...smallBasketAnimation} className={styles.iconSmallBaskets}></motion.div>
            <Track />
        </section>
    )
};

export default Hero;