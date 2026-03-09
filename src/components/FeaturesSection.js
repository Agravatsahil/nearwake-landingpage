import Image from 'next/image';
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
                <div className={styles.header}>
                    <div className={styles.sectionBadge}>
                        <span>Features</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Everything You Need for <span className="italic-serif">Stress-Free Travel</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Relax during your journey while our app keeps track of the route and alerts you before your destination arrives.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureBox}>
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={48}
                                height={48}
                                className={styles.iconImage}
                            />
                            <h3 className={styles.boxTitle}>{feature.title}</h3>
                            <p className={styles.boxDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
