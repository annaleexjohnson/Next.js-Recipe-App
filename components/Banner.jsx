import React from "react";
import styles from "../styles/Banner.module.scss"

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__image}></div>
            <div className={styles.banner__message}>
                <div className={styles.bannerText}>
                    <h1 className={styles.bannerText__title}>Find a recipe for when you</h1>
                    <div className={styles.bannerText__animation}></div>
                </div>
                <button className={styles.banner__btn}>Get Started</button>
            </div>
        </div>
    );
}

export default Banner;