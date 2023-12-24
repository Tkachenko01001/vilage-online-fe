import Elipse from '../../assets/icons/ellipse.svg';
import Arrow from '../../assets/icons/arrow.svg';
import styles from './hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.sectionWrapp}>
            <div className={styles.titleWrapp}>
                <h1 className={styles.title}>Покупки з доставкою до вашого дому</h1>
                <p className={styles.paragraph}>Зекономимо Ваш час та кошти та забезпечимо доступ до усіх необхідних товарів</p>
                <button className={styles.btn} type="button">
                    <span className={styles.btnText}>Спробувати безкоштовно</span>
                    <Arrow className={styles.iconArow} />
                </button>
            </div>
            <div className={`${styles.blurBall} ${styles.blurBallHeight}`}></div>
            <Elipse className={styles.iconElipse} />
            <div className={styles.iconElipse}></div>
            <div className={`${styles.blurBall} ${styles.blurBallBottom}`}></div>
            <div className={styles.basketWrapp}>
            </div>
            <div className={styles.iconSmallBaskets}></div>
        </section>
    )
};

export default Hero;