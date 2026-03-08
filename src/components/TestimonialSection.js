"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './TestimonialSection.module.css';
import videoBg from '../../public/images/video-bg.png';
import playIcon from '../../public/images/play-icon.svg';
import avatarImg from '../../public/images/Avatar.png';

const testimonials = [
    {
        quote: "Finally I can sleep in the bus without worrying about missing my stop. This app is a lifesaver!",
        name: "Priya Sharma",
        role: "Daily Commuter",
        stars: 5,
    },
    {
        quote: "I travel by train every weekend. This app changed my travel experience completely. I just set it and forget.",
        name: "Priya Sharma",
        role: "Daily Commuter",
        stars: 5,
    },
    {
        quote: "As a student, I take the metro daily. Now I can nap peacefully and wake up right at my station.",
        name: "Priya Sharma",
        role: "Daily Commuter",
        stars: 5,
    },
    {
        quote: "Finally I can sleep in the bus without worrying about missing my stop. This app is a lifesaver!",
        name: "Priya Sharma",
        role: "Daily Commuter",
        stars: 5,
    },
    {
        quote: "This is easily the best travel companion I've ever downloaded. Highly recommended!",
        name: "Priya Sharma",
        role: "Daily Commuter",
        stars: 5,
    },
    {
        quote: "No more panic waking up on the train wondering if I missed my stop. 10/10.",
        name: "Priya Sharma",
        role: "Daily Commuter",
        stars: 5,
    },
    {
        quote: "A must-have app for anyone who commutes daily or travels long distances.",
        name: "Priya Sharma",
        role: "Daily Commuter",
        stars: 5,
    },
    {
        quote: "Simple, effective, and beautifully designed. Exactly what I needed.",
        name: "Priya Sharma",
        role: "Daily Commuter",
        stars: 5,
    }
];

const TestimonialSection = () => {
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        sliderRef.current.classList.add(styles.activeDrag);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        sliderRef.current.classList.remove(styles.activeDrag);
    };

    const handleMouseUp = () => {
        setIsDown(false);
        sliderRef.current.classList.remove(styles.activeDrag);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast multiplier
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className={styles.testimonialSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.sectionBadge}>
                        <span>Testimonials</span>
                    </div>
                    <h2 className={styles.sectionTitle}>
                        Travel Smarter, Rest Better
                    </h2>
                </div>
            </div>

            <div className={styles.layoutWrapper}>
                <div className={styles.leftColumn}>
                    <div className={styles.videoThumbnail}>
                        <Image
                            src={videoBg}
                            alt="Testimonial Video Thumbnail"
                            className={styles.videoOriginal}
                        />
                        <button className={styles.playButton} aria-label="Play video">
                            <div className={styles.playCircle}>
                                <Image src={playIcon} alt="Play" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div
                        className={styles.cardsScrollContainer}
                        ref={sliderRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={styles.testimonialCard}>
                                <div className={styles.stars}>
                                    {'★'.repeat(testimonial.stars)}
                                </div>
                                <p className={styles.quote}>
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className={styles.profileRow}>
                                    <div className={styles.profileAvatar}>
                                        <Image src={avatarImg} alt={testimonial.name} fill className={styles.avatarImage} />
                                    </div>
                                    <div className={styles.profileDetails}>
                                        <h4 className={styles.profileName}>{testimonial.name}</h4>
                                        <p className={styles.profileRole}>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
