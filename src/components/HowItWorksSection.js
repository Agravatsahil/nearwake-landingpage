import Image from 'next/image';
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
        <section className={styles.howItWorksSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.sectionBadge}>
                        <span>How It Works</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        <span className="italic-serif">Three</span> Simple Steps
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Getting started is incredibly easy. No complex setup needed.
                    </p>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <div key={index} className={`${styles.stepBox} ${index === 1 ? styles.stepBoxReverse : ''}`}>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
