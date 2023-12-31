import DescriptionSwitch from '../description-switch/DescriptionSwitch'
import Cards from "./Cards";
import styles from './delivery-products.module.scss';
import TitleForBuyer from './TitleForBuyer';

const DeliveryProducts = () => {

    return (
        <section className={styles.container}>
            <div className={styles.blurBall}></div>
            <div className={styles.wrapp}>
                <DescriptionSwitch />
                <TitleForBuyer />
                <Cards />
            </div>
            <div className={styles.blurBallSecond}></div>
        </section>
    )
};

export default DeliveryProducts;