import ButtonTryForFree from "../button-try-for-free/ButtonTryForFree";
import FolderPlus from "../../assets/icons/folder-plus.svg";
import FolderEdit from "../../assets/icons/folder-edit.svg";
import Pointer from "../../assets/icons/pointer.svg";
import styles from "./payment-orders.module.scss";

const PaymentOrders = () => {
    return (
        <section className={styles.container}>
            <div className={styles.blurBall}></div>
            <div className={styles.titleWrapp}>
                <h3 className={styles.description}>Оплата замовлень</h3>
                <h2 className={styles.title}>Оплачуйте Ваші покупки легко і швидко в один клік</h2>
                <p className={styles.paragraph}>Наша безготівкова система  оплати спроектована для максимальної зручності, ефективності та безпеки. Насолоджуйтеся покупками без зайвих зусиль!</p>
            </div>
            <ul className={styles.list}>
                <li className={styles.line}>
                    <div className={styles.lineWrapp}>
                        <FolderPlus />
                        <p className={styles.number}>01</p>
                    </div>
                    <p className={styles.paragraph}>Виберіть необхідний товар</p>
                </li>
                <li className={styles.line}>
                    <div className={styles.lineWrapp}>
                        <Pointer />
                        <p className={styles.number}>02</p>
                    </div>
                    <p className={styles.paragraph}>Натисніть на кнопку оплати</p>
                </li>
                <li className={styles.line}>
                    <div className={styles.lineWrapp}>
                        <FolderEdit />
                        <p className={styles.number}>03</p>
                    </div>
                    <p className={styles.paragraph}>Заповніть вказані поля - і все готово!</p>
                </li>
            </ul>
            <div className={styles.btnWrapp}>
                <ButtonTryForFree />
            </div>
        </section>
    )
};

export default PaymentOrders;