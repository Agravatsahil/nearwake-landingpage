"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './CtaSection.module.css';

import ctaBg from '../../public/images/CTA-bg.png';
import appStoreBtn from '../../public/images/app-store-btn.png';
import playStoreBtn from '../../public/images/playstore-btn.png';

const CtaSection = () => {
    return (
        <section className={styles.ctaSection}>
            <div className="container">
                <motion.div
                    className={styles.ctaBanner}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src={ctaBg}
                        alt="CTA Background"
                        fill
                        quality={100}
                        className={styles.bannerBackground}
                    />

                    <div className={styles.contentWrapper}>
                        <h2 className={`font-phudu ${styles.headline}`}>
                            START STRESS-FREE<br />
                            TRAVEL TODAY
                        </h2>

                        <p className={styles.subtitle}>
                            Join thousands of travelers who sleep peacefully and never miss their stop.
                        </p>

                        <div className={styles.buttonGroup}>
                            <a href="#" className={styles.storeButtonBox}>
                                <Image src={appStoreBtn} alt="Download on the App Store" />
                            </a>
                            <a href="#" className={styles.storeButtonBox}>
                                <Image src={playStoreBtn} alt="Get it on Google Play" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;
