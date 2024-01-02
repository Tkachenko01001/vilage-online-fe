import Image from 'next/image';
import moneyPic from '../../assets/icons/money.png';
import iconBusiness from '../../assets/icons/IconBusiness.png';
import iconBusinessSmall from '../../assets/icons/IconBusiness-small.png';
import styles from './advantages.module.scss';

const Advantages = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrrapText}>
                <div className={styles.titleWarapp}>
                    <h3 className={styles.description}>Переваги</h3>
                    <h2 className={styles.title}>Заощаджуйте час та кошти</h2>
                    <p className={styles.paragraph}>Дозвольте нам розпочати революцію у Вашому досвіді покупок – швидко, зручно та з ефективною економією часу та коштів</p>
                </div>
                <ul className={styles.list}>
                    <li className={styles.line}>
                        <h4 className={styles.lineTitle}>Зручні Покупки</h4>
                        <p className={styles.lineParagraph}>Замовляйте все необхідне, не виходячи з дому. Затишок вашого будинку – ідеальне місце для придбання всього необхідного</p>
                    </li>
                    <li className={styles.line}>
                        <h4 className={styles.lineTitle}>Ефективна Економія</h4>
                        <p className={styles.lineParagraph}>Уникайте додаткових витрат у місцевих магазинах та не тратьте час на очікування поставки товарів</p>
                    </li>
                    <li className={styles.line}>
                        <h4 className={styles.lineTitle}>Максимальний Вибір</h4>
                        <p className={styles.lineParagraph}>Наш сервіс забезпечує безперервний доступ до широкого асортименту товарів. Максимізуйте свої можливості без надмірних зусиль</p>
                    </li>
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