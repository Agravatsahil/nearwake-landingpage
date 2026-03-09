"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HowItWorksSection.module.css';

const steps = [
    {
        title: 'Set Destination',
        description: 'Enter where you want to go. Search for a place or drop a pin on the map.',
        image: '/images/step1.png'
    },
    {
        title: 'Start Travel Mode',
        description: 'The app monitors your journey using GPS. Sit back and close your eyes.',
        image: '/images/step2.png'
    },
    {
        title: 'Wake Up Before Arrival',
        description: 'Receive a gentle alert before your stop. Never miss your destination again.',
        image: '/images/step3.png'
    }
];

const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className={styles.howItWorksSection}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionBadge}>
                        <span>How It Works</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        <span className="italic-serif">Three</span> Simple Steps
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Getting started is incredibly easy. No complex setup needed.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.stepBox} ${index === 1 ? styles.stepBoxReverse : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                        >
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                            <div className={styles.stepImageWrapper}>
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className={styles.stepImage}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
