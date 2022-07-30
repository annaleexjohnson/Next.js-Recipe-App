import styles from "../styles/Header.module.scss"
import Link from 'next/link'
import { MagnifyingGlass } from "phosphor-react";

const Header = () => {

    return (
        <div className={styles.header}>
            <h1>flavorfull</h1>
            <nav className={styles.header__nav}>
                <Link href="/home">
                    <span className={styles.nav__link}>Home</span>
                </Link>
                <Link href="/">
                    <span className={styles.nav__link}>Recipes</span>
                </Link>
                <Link href="/">
                    <span className={styles.nav__link}>Popular</span>
                </Link>
            </nav>
            <div className={styles.header__search}>
                <input type="text" placeholder="Search for a recipe" className={styles.header__searchInput}/>
                <MagnifyingGlass size={24} className={styles.header__searchBtn} />
            </div>
        </div>
    );
}

export default Header;