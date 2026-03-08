import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>


            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span>Smart Travel Companion</span>
                    </div>

                    <h1 className={styles.title}>
                        Sleep During Travel. <br />
                        <span className="italic-serif">Wake Up</span> Exactly Where You Need.
                    </h1>

                    <p className={styles.description}>
                        Relax on your journey while our smart travel alarm tracks your route and wakes you up before your destination. No more checking maps again and again.
                    </p>

                    <div className={styles.ctas}>
                        <button className={styles.videoBtn}>
                            <div className={styles.playIcon}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M10.5 6L3 10.5V1.5L10.5 6Z" fill="currentColor" />
                                </svg>
                            </div>
                            See How It Works
                        </button>
                        <button className={styles.primaryBtn}>Download App</button>
                    </div>

                    <div className={styles.socialProof}>
                        <div className={styles.avatars}>
                            <Image src="/images/Avatar.png" alt="User" width={100} height={32} className={styles.avatarImg} />
                        </div>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FFC107">
                                        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
                                    </svg>
                                ))}
                            </div>
                            <p>Loved by 50,000+ travelers</p>
                        </div>
                    </div>
                </div>

                <div className={styles.mockupWrapper}>
                    <Image
                        src="/images/hero-right-mockup.png"
                        alt="NearWake App Mockup"
                        width={600}
                        height={700}
                        className={styles.mockup}
                        priority
                    />
                </div>
            </div>

            <div className={styles.logosStrip}>
                <div className="container">
                    <div className={styles.logosList}>
                        <Image src="/images/logo1.png" alt="Clerk" width={100} height={32} className={styles.partnerLogo} />
                        <Image src="/images/logo2.png" alt="together.ai" width={120} height={32} className={styles.partnerLogo} />
                        <Image src="/images/logo3.png" alt="Inflection" width={100} height={32} className={styles.partnerLogo} />
                        <Image src="/images/logo4.png" alt="Trustpilot" width={100} height={32} className={styles.partnerLogo} />
                        <Image src="/images/logo5.png" alt="X STATE" width={100} height={32} className={styles.partnerLogo} />
                        <Image src="/images/logo6.png" alt="algolia" width={100} height={32} className={styles.partnerLogo} />
                        <Image src="/images/logog7.png" alt="web.dev" width={100} height={32} className={styles.partnerLogo} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
