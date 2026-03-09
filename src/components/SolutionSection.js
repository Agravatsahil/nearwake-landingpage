import Image from 'next/image';
import styles from './SolutionSection.module.css';

const SolutionSection = () => {
    return (
        <section className={styles.solutionSection}>
            <div className={`container ${styles.container}`}>
                {/* Left Side - Mockup */}
                <div className={styles.leftColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/solution-left-img.png"
                            alt="Solution Mockup"
                            fill
                            className={styles.mockupImage}
                            priority
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className={styles.rightColumn}>
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

                    <ul className={styles.featureList}>
                        <li className={styles.featureItem}>
                            <Image src="/images/tick-icon.svg" alt="Tick" width={54} height={54} className={styles.tickIcon} />
                            <span>Live GPS Tracking</span>
                        </li>
                        <li className={styles.featureItem}>
                            <Image src="/images/tick-icon.svg" alt="Tick" width={54} height={54} className={styles.tickIcon} />
                            <span>Destination Radius Alert</span>
                        </li>
                        <li className={styles.featureItem}>
                            <Image src="/images/tick-icon.svg" alt="Tick" width={54} height={54} className={styles.tickIcon} />
                            <span>Smart Wake-Up Alarm</span>
                        </li>
                        <li className={styles.featureItem}>
                            <Image src="/images/tick-icon.svg" alt="Tick" width={54} height={54} className={styles.tickIcon} />
                            <span>Relax and Sleep During Travel</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
