"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                    <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#how-it-works" onClick={() => setIsOpen(false)}>How Its Work</a>
                    <a href="#app-preview" onClick={() => setIsOpen(false)}>App Preview</a>
                    <a href="#use-cases" onClick={() => setIsOpen(false)}>Use Cases</a>
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
