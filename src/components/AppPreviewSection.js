"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AppPreviewSection.module.css';
import appScreen1 from '../../public/images/app-screen1.png';
import appScreen2 from '../../public/images/app-screen2.png';
import appScreen3 from '../../public/images/app-screen3.png';
import appScreen4 from '../../public/images/app-screen4.png';

const screens = [
    { src: appScreen1, alt: 'Set Destination Screen' },
    { src: appScreen2, alt: 'Tracking Active Screen' },
    { src: appScreen3, alt: 'Wake Up Alert Screen' },
    { src: appScreen4, alt: 'Trip History Screen' }
];

const AppPreviewSection = () => {
    return (
        <section id="app-preview" className={styles.previewSection}>
            <div className={`container ${styles.headerContainer}`}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionBadge}>
                        <span>App Preview</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        See the App in <span className="italic-serif">Action</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        A simple and powerful interface designed to help you travel peacefully and wake up before your destination.
                    </p>
                </motion.div>
            </div>

            <div className={`container ${styles.screensContainer}`}>
                <motion.div
                    className={styles.screensGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {screens.map((screen, index) => (
                        <motion.div
                            key={index}
                            className={styles.screenWrapper}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            <Image
                                src={screen.src}
                                alt={screen.alt}
                                className={styles.screenImage}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AppPreviewSection;
