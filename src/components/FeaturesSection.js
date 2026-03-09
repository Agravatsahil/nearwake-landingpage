"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './FeaturesSection.module.css';

const features = [
    {
        icon: '/images/icon1.png',
        title: 'Live Route Tracking',
        description: 'Watch your route from current location to destination in real time.'
    },
    {
        icon: '/images/icon2.png',
        title: 'Smart Wake-Up Alert',
        description: 'The app alerts you before you reach your stop with a gentle alarm.'
    },
    {
        icon: '/images/icon3.png',
        title: 'Sleep Peacefully',
        description: 'Relax during long bus or train rides without any travel anxiety.'
    },
    {
        icon: '/images/icon4.png',
        title: 'Destination Radius Alert',
        description: 'Customize how early you want to be woken up before arrival.'
    },
    {
        icon: '/images/icon5.png',
        title: 'Save Frequent Locations',
        description: 'Quickly start trips to your most visited destinations.'
    },
    {
        icon: '/images/icon6.png',
        title: 'Trip History Tracking',
        description: 'Review all your past trips with complete route details.'
    }
];

const FeaturesSection = () => {
    return (
        <section id="features" className={styles.featuresSection}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionBadge}>
                        <span>Features</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Everything You Need for <span className="italic-serif">Stress-Free Travel</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Relax during your journey while our app keeps track of the route and alerts you before your destination arrives.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.featureBox}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                        >
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={48}
                                height={48}
                                className={styles.iconImage}
                            />
                            <h3 className={styles.boxTitle}>{feature.title}</h3>
                            <p className={styles.boxDescription}>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
