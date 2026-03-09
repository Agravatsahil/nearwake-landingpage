"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './SolutionSection.module.css';

const SolutionSection = () => {
    return (
        <section className={styles.solutionSection}>
            <div className={`container ${styles.container}`}>
                {/* Left Side - Mockup */}
                <motion.div
                    className={styles.leftColumn}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/solution-left-img.png"
                            alt="Solution Mockup"
                            fill
                            className={styles.mockupImage}
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                    className={styles.rightColumn}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className={styles.badge}>
                        <span>The Solution</span>
                    </div>

                    <h2 className={styles.title}>
                        Your Smart <span className="italic-serif">Travel</span><br />
                        <span className="italic-serif">Alarm</span>
                    </h2>

                    <p className={styles.description}>
                        Our app tracks your journey in real time and wakes you up before your destination. Never miss a stop again.
                    </p>

                    <motion.ul
                        className={styles.featureList}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.15, delayChildren: 0.4 }
                            }
                        }}
                    >
                        <motion.li
                            className={styles.featureItem}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                            }}
                        >
                            <Image src="/images/tick-icon.svg" alt="Tick" width={54} height={54} className={styles.tickIcon} />
                            <span>Live GPS Tracking</span>
                        </motion.li>
                        <motion.li
                            className={styles.featureItem}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                            }}
                        >
                            <Image src="/images/tick-icon.svg" alt="Tick" width={54} height={54} className={styles.tickIcon} />
                            <span>Destination Radius Alert</span>
                        </motion.li>
                        <motion.li
                            className={styles.featureItem}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                            }}
                        >
                            <Image src="/images/tick-icon.svg" alt="Tick" width={54} height={54} className={styles.tickIcon} />
                            <span>Smart Wake-Up Alarm</span>
                        </motion.li>
                        <motion.li
                            className={styles.featureItem}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                            }}
                        >
                            <Image src="/images/tick-icon.svg" alt="Tick" width={54} height={54} className={styles.tickIcon} />
                            <span>Relax and Sleep During Travel</span>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionSection;
