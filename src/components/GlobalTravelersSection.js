import Image from 'next/image';
import styles from './GlobalTravelersSection.module.css';
import globalBg from '../../public/images/global-bg.png';

const GlobalTravelersSection = () => {
    return (
        <section className={styles.globalSection}>
            <div className={styles.globeWrapper}>
                <Image
                    src={globalBg}
                    alt="Global Travelers Map"
                    priority
                    className={styles.globeImage}
                />
            </div>

            <div className={`container ${styles.contentContainer}`}>
                <div className={styles.header}>
                    <div className={styles.sectionBadge}>
                        <span>Global Travelers</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Trusted by Travelers Around <span className="italic-serif">the World</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        From daily commuters to long-distance travelers, people across the globe rely on our smart travel alarm to reach their destination without worry.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GlobalTravelersSection;
