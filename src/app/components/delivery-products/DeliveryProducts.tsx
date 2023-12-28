import DescriptionSwitch from '../description-switch/DescriptionSwitch'
import CheckSquare from '../../assets/icons/check-square.svg';
import ShoppingBag from '../../assets/icons/shopping-bag.svg';
import Truck from '../../assets/icons/truck.svg'
import styles from './delivery-products.module.scss';

const DeliveryProducts = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapp}>
                <DescriptionSwitch />
                <div className={styles.slogan}>
                    <h3 className={styles.sloganDescription}>Доставка товарів</h3>
                    <h2 className={styles.sloganTitle}>Перетворюємо Ваші бажання у реальність</h2>
                    <p className={styles.sloganPharagraph}>Пропонуємо великий вибір товарів від місцевих постачальників, зі швидкою доставкою прямо до Вашого порогу</p>
                </div>
                <div className={styles.descriptionCardsWrapp}>
                    <div className={styles.descriptionCard}>
                        <CheckSquare />
                        <h3 className={styles.descriptionCardTitle}>Широкий вибір</h3>
                        <p className={styles.descriptionCardParagraph}>Замовляйте улюблені товари з супермаркетів, аптек та інших магазинів у найближчих містах</p>
                    </div>
                    <div className={styles.descriptionCard}>
                        <ShoppingBag />
                        <h3 className={styles.descriptionCardTitle}>Ексклюзивна доставка</h3>
                        <p className={styles.descriptionCardParagraph}>Насолоджуйтеся особливою службою доставки, яка приводить ваші покупки прямо до дверей</p>
                    </div>
                    <div className={styles.descriptionCard}>
                        <Truck />
                        <h3 className={styles.descriptionCardTitle}>Зручніші покупки</h3>
                        <p className={styles.descriptionCardParagraph}>Ваші покупки стануть не тільки простішими, але й набагато приємнішими </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DeliveryProducts;