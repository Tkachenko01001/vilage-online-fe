import Link from "next/link";
import Navigation from "./Navigation";
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
                <Navigation />             
                <div className={styles.authWrapp}>
                    <button className={styles.authBtn}><SecondaryButton className={styles.btn} /></button>
                </div>
            </nav>
        </header>
    )
};

export default Dashboard;