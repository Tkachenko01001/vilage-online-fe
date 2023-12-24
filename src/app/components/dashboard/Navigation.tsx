'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { navList } from "./halpers";
import ActiveLine from "../../assets/icons/vector.svg";
import styles from "./dashboard.module.scss";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className={styles.list}>
        {navList.map((line) => (
          <li key={line.value} className={styles.line}>
            <Link className={`${pathname === line.path ? styles.linkActive : ''}`} href={line.path}>
              {line.value}
            </Link>
          </li>
        ))}
      </ul>
      <ActiveLine className={`${styles.active} ${pathname === '/' ? styles.activeHomePath : styles[`active${pathname.slice(1)}`]}`} />
    </>
  );
};

export default Navigation;