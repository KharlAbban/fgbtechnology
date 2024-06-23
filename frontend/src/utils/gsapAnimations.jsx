import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const animateItemNoScroll = (target, delay, animationOptions) => {
    useGSAP(() => {
        gsap.from(target, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'bounce.out',
            delay: delay,
            ...animationOptions
        })
    }, []);
}

export const animateItem = (target, delay, animationOptions, scrollOptions) => {
    useGSAP(() => {
        gsap.from(target, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'bounce.out',
            delay: delay,
            ...animationOptions,
            scrollTrigger: {
                trigger: target,
                start: 'bottom 95%',
                ...scrollOptions
            }
        })
    }, []);
}