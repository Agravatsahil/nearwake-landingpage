"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (e, target) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(target);
        if (element) {
            // Lenis will intercept this native scroll thanks to how it works globally
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navbarWrapper}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Image
                        src="/images/logo-final.svg"
                        alt="NearWake Logo"
                        width={120}
                        height={40}
                        priority
                    />
                </div>

                <div className={`${styles.links} ${isOpen ? styles.activeMobileMenu : ''}`}>
                    <a href="#features" onClick={(e) => handleScroll(e, '#features')}>Features</a>
                    <a href="#how-it-works" onClick={(e) => handleScroll(e, '#how-it-works')}>How Its Work</a>
                    <a href="#app-preview" onClick={(e) => handleScroll(e, '#app-preview')}>App Preview</a>
                    <a href="#use-cases" onClick={(e) => handleScroll(e, '#use-cases')}>Use Cases</a>
                    {isOpen && (
                        <div className={styles.mobileActions}>
                            <button className={styles.downloadBtn} onClick={() => setIsOpen(false)}>Download App</button>
                        </div>
                    )}
                </div>

                <div className={styles.actions}>
                    <button className={styles.downloadBtn}>Download App</button>
                </div>

                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation"
                >
                    <span className={`${styles.bar} ${isOpen ? styles.barOneOpen : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.barTwoOpen : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.barThreeOpen : ''}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
