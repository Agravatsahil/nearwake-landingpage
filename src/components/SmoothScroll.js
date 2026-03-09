"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.08,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Add cleanup to avoid memory leaks
        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
