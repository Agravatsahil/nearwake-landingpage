"use client";
import { motion } from 'framer-motion';
import styles from './ProblemSection.module.css';

const ProblemSection = () => {
    return (
        <section className={styles.problemSection}>
            <div className={`${styles.container} container`}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionBadge}>
                        <span>The Problem</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        <span className="italic-serif">Traveling</span> While Tired?
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Millions of commuters face these problems every single day.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Box 1 - Top/Full */}
                    <motion.div
                        className={`${styles.box} ${styles.boxLarge} ${styles.box1}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className={styles.boxContent}>
                            <h3 className={styles.boxTitle}>Missed Your Stop?</h3>
                            <p className={styles.boxText}>
                                Many travelers fall asleep and miss their destination, wasting time and money on backtracking.
                            </p>
                        </div>
                    </motion.div>

                    <div className={styles.bottomGrid}>
                        {/* Box 2 - Bottom Left */}
                        <motion.div
                            className={`${styles.box} ${styles.boxMedium} ${styles.box2}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className={styles.boxContent}>
                                <h3 className={styles.boxTitle}>Constantly Checking Maps</h3>
                                <p className={styles.boxText}>
                                    Many travelers fall asleep and miss their destination, wasting time and money on backtracking.
                                </p>
                            </div>
                        </motion.div>

                        {/* Box 3 - Bottom Right */}
                        <motion.div
                            className={`${styles.box} ${styles.boxMedium} ${styles.box3}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className={styles.boxContent}>
                                <h3 className={styles.boxTitle}>Travel Stress</h3>
                                <p className={styles.boxText}>
                                    Worrying about missing stops makes the entire travel experience uncomfortable and exhausting.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
