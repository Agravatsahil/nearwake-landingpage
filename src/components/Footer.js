"use client";
import Image from 'next/image';
import { useLenis } from 'lenis/react';
import styles from './Footer.module.css';

import logo from '../../public/images/logo-final.svg';
import iconFb from '../../public/images/Social Icons (1).png';
import iconX from '../../public/images/Social Icons (2).png';
import iconIn from '../../public/images/Social Icons (3).png';
import iconIg from '../../public/images/Social Icons.png';
import watermarkLogo from '../../public/images/NearWake.svg';

const Footer = () => {
    const lenis = useLenis();

    const handleScroll = (e, target) => {
        e.preventDefault();
        if (lenis) {
            lenis.scrollTo(target);
        } else {
            document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                {/* Left Column: Brand & Social */}
                <div className={styles.brandColumn}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src={logo}
                            alt="NearWake Logo"
                            width={160}
                            height={40}
                            className={styles.logoImage}
                        />
                    </div>
                    <p className={styles.brandDescription}>
                        Your smart travel companion. Sleep peacefully during travel and wake up exactly where you need.
                    </p>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook">
                            <Image src={iconFb} alt="Facebook" className={styles.socialImg} />
                        </a>
                        <a href="#" aria-label="X (Twitter)">
                            <Image src={iconX} alt="X" className={styles.socialImg} />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <Image src={iconIn} alt="LinkedIn" className={styles.socialImg} />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Image src={iconIg} alt="Instagram" className={styles.socialImg} />
                        </a>
                    </div>
                </div>

                {/* Middle Column: Quick Links */}
                <div className={styles.linksColumn}>
                    <h4 className={styles.columnTitle}>Quick Links</h4>
                    <ul className={styles.linksList}>
                        <li><a href="#features" onClick={(e) => handleScroll(e, '#features')}>Features</a></li>
                        <li><a href="#how-it-works" onClick={(e) => handleScroll(e, '#how-it-works')}>How It Works</a></li>
                        <li><a href="#app-preview" onClick={(e) => handleScroll(e, '#app-preview')}>App Preview</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Right Column: Legal */}
                <div className={styles.linksColumn}>
                    <h4 className={styles.columnTitle}>Legal</h4>
                    <ul className={styles.linksList}>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Terms of use</a></li>
                    </ul>
                </div>
            </div>

            {/* Massive faded background image */}
            <div className={styles.bottomWatermark}>
                <Image
                    src={watermarkLogo}
                    alt="NearWake Mark"
                    className={styles.watermarkImage}
                    layout="responsive"
                    width={1400}
                    height={400}
                />
            </div>
        </footer>
    );
};

export default Footer;
