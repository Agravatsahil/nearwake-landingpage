import Image from 'next/image';
import styles from './AppPreviewSection.module.css';
import appScreen1 from '../../public/images/app-screen1.png';
import appScreen2 from '../../public/images/app-screen2.png';
import appScreen3 from '../../public/images/app-screen3.png';
import appScreen4 from '../../public/images/app-screen4.png';

const screens = [
    { src: appScreen1, alt: 'Set Destination Screen' },
    { src: appScreen2, alt: 'Tracking Active Screen' },
    { src: appScreen3, alt: 'Wake Up Alert Screen' },
    { src: appScreen4, alt: 'Trip History Screen' }
];

const AppPreviewSection = () => {
    return (
        <section id="app-preview" className={styles.previewSection}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.header}>
                    <div className={styles.sectionBadge}>
                        <span>App Preview</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        See the App in <span className="italic-serif">Action</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        A simple and powerful interface designed to help you travel peacefully and wake up before your destination.
                    </p>
                </div>
            </div>

            <div className={`container ${styles.screensContainer}`}>
                <div className={styles.screensGrid}>
                    {screens.map((screen, index) => (
                        <div key={index} className={styles.screenWrapper}>
                            <Image
                                src={screen.src}
                                alt={screen.alt}
                                className={styles.screenImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppPreviewSection;
