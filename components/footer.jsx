import styles from '../styles/Footer.module.scss'

import { FacebookLogo, InstagramLogo, TwitterLogo, PinterestLogo, YoutubeLogo } from 'phosphor-react';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__text}>
                <h1>flavorfull</h1>
                <span className={styles.footer__social}>
                    <FacebookLogo size={32} />
                    <InstagramLogo size={32} />
                    <TwitterLogo size={32} />
                    <PinterestLogo size={32} />
                    <YoutubeLogo size={32} />
                </span>
                <p>Annalee X. Johnson 2022</p>
            </div>
        </div>
    );
}

export default Footer;