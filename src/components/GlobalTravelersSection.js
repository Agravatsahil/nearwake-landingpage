"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './GlobalTravelersSection.module.css';
import globalBg from '../../public/images/global-bg.png';

const GlobalTravelersSection = () => {
    return (
        <section className={styles.globalSection}>
            <motion.div
                className={styles.globeWrapper}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Image
                    src={globalBg}
                    alt="Global Travelers Map"
                    priority
                    className={styles.globeImage}
                />
            </motion.div>

            <div className={`container ${styles.contentContainer}`}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className={styles.sectionBadge}>
                        <span>Global Travelers</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Trusted by Travelers Around <span className="italic-serif">the World</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        From daily commuters to long-distance travelers, people across the globe rely on our smart travel alarm to reach their destination without worry.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalTravelersSection;
