import styles from './ProblemSection.module.css';

const ProblemSection = () => {
    return (
        <section className={styles.problemSection}>
            <div className={`${styles.container} container`}>
                <div className={styles.header}>
                    <div className={styles.sectionBadge}>
                        <span>The Problem</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        <span className="italic-serif">Traveling</span> While Tired?
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Millions of commuters face these problems every single day.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Box 1 - Top/Full */}
                    <div className={`${styles.box} ${styles.boxLarge} ${styles.box1}`}>
                        <div className={styles.boxContent}>
                            <h3 className={styles.boxTitle}>Missed Your Stop?</h3>
                            <p className={styles.boxText}>
                                Many travelers fall asleep and miss their destination, wasting time and money on backtracking.
                            </p>
                        </div>
                    </div>

                    <div className={styles.bottomGrid}>
                        {/* Box 2 - Bottom Left */}
                        <div className={`${styles.box} ${styles.boxMedium} ${styles.box2}`}>
                            <div className={styles.boxContent}>
                                <h3 className={styles.boxTitle}>Constantly Checking Maps</h3>
                                <p className={styles.boxText}>
                                    Many travelers fall asleep and miss their destination, wasting time and money on backtracking.
                                </p>
                            </div>
                        </div>

                        {/* Box 3 - Bottom Right */}
                        <div className={`${styles.box} ${styles.boxMedium} ${styles.box3}`}>
                            <div className={styles.boxContent}>
                                <h3 className={styles.boxTitle}>Travel Stress</h3>
                                <p className={styles.boxText}>
                                    Worrying about missing stops makes the entire travel experience uncomfortable and exhausting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
