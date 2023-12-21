import Link from "next/link";
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.contentWrapp}>
                <div className={styles.logo}>
                    <Link href="/">Selo-online</Link>
                </div>
                <div className={styles.menuWrapp}>
                    <h3 className={styles.menuTitle}>Меню</h3>
                    <ul className={styles.menuList}>
                        <li className={styles.menuLine}><Link href='/' className={styles.menuLink}>Головна</Link></li>
                        <li className={styles.menuLine}><Link href='/' className={styles.menuLink}>Про нас</Link></li>
                        <li className={styles.menuLine}><Link href='/' className={styles.menuLink}>Каталог товарів</Link></li>
                        <li className={styles.menuLine}><Link href='/' className={styles.menuLink}>Доставка</Link></li>
                    </ul>
                </div>
                <div className={styles.contactWrapp}>
                    <h3 className={styles.contactTitle}>Контакти</h3>
                    <ul className={styles.contactList}>
                        <li className={styles.contactLine}>
                            <Link href="mailto:vilage.onlinev@gmail.com" className={styles.contactLink}><Mail className={styles.contactIconMail} />vilage.onlinev@gmail.com</Link>
                        </li>
                        <li className={styles.contactLine}>
                            <Link href="tel:+38096 500 7588" className={styles.contactLink}><Phone className={styles.contactIconPhone} />+38096 500 7588</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.policyWrapp}>
                <Link href="/" className={styles.policyLink}>Політика конфіденційності</Link>
                <Link href="/public-contract" className={styles.policyLink}>Публічний договір</Link>
                <Link href="/" className={styles.policyLink}>Умови надання послуг</Link>
            </div>
        </footer>
    )
};

export default Footer;