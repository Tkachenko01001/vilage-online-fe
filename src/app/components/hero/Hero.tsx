"use client"
import { motion } from "framer-motion";
import { titleAnimation, bigBasketAnimation, smallBasketAnimation } from "../../assets/animation/animateMainPage";
import Elipse from '../../assets/icons/ellipse.svg';
import Arrow from '../../assets/icons/arrow.svg';
import styles from './hero.module.scss';
import Track from '../track/Track';

const Hero = () => {

  const handleHover = (e: any) => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };

    return (
        <section className={styles.sectionWrapp}>
            <motion.div className={styles.titleWrapp} {...titleAnimation}>
                <h1 className={styles.title}>Покупки з доставкою до вашого дому</h1>
                <p className={styles.paragraph}>Зекономимо Ваш час та кошти та забезпечимо доступ до усіх необхідних товарів</p>
                <div className={styles.btnBorder}>
                <button className={styles.btn} type="button" onMouseMove={handleHover}>
                    <span className={styles.btnText}>Спробувати безкоштовно</span>
                    <Arrow className={styles.iconArow} />
                    </button>
                </div>
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