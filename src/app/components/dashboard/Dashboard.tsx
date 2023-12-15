import Link from "next/link";
import SecondaryButton from '../../assets/icons/secondary-button.svg';
import styles from "./dashboard.module.scss";
// import { useEffect } from 'react';
// import io from 'socket.io-client';

const Dashboard = () => {

    return (
        <header className={styles.header}>
                <Link className={styles.logoLink} href="/">
                    Selo-online
                </Link>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={styles.line}><Link className={styles.link} href="/">Головна</Link></li>
                    <li className={styles.line}><Link className={styles.link} href="#about">Про нас</Link></li>
                    <li className={styles.line}><Link className={styles.link} href="/catalog">Каталог товарів</Link></li>
                    <li className={styles.line}><Link className={styles.link} href="#rates">Тарифи</Link></li>
                    <li className={styles.line}><Link className={styles.link} href="/delivery">Доставка</Link></li>
                </ul>
                <div className={styles.authWrapp}>
                    <button className={styles.authBtn}><SecondaryButton className={styles.btn} /></button>
                </div>
            </nav>
        </header>
    )
};

export default Dashboard;