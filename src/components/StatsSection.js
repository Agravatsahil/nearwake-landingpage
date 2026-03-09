"use client";
import { motion } from 'framer-motion';
import styles from './StatsSection.module.css';

const stats = [
    {
        value: '30+',
        label: 'Countries Using the App'
    },
    {
        value: '10K+',
        label: 'Downloads'
    },
    {
        value: '25K+',
        label: 'Trips Completed'
    },
    {
        value: '4.8★',
        label: 'Average Rating'
    }
];

const StatsSection = () => {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <motion.div
                    className={styles.bannerWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statBox}>
                                <h3 className={styles.statValue}>{stat.value}</h3>
                                <p className={styles.statLabel}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
