import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * Elements slide in from left (odd index) or right (even index) when entering viewport
 * 
 * @param {number} threshold - Percentage of element visibility to trigger animation (0-1)
 * @returns {function} - Function to attach to elements needing animation
 */
const useScrollAnimation = (threshold = 0.6) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-visible');
                        entry.target.classList.remove('scroll-hidden');
                    }
                });
            },
            {
                threshold: threshold,
                rootMargin: '0px'
            }
        );

        // Observe all elements
        elementsRef.current.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup
        return () => {
            elementsRef.current.forEach((element) => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [threshold]);

    // Function to add element to the refs array
    const addToRefs = (el, index) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current[index] = el;
            // Add initial hidden class and direction class based on index
            el.classList.add('scroll-hidden');
            el.classList.add(index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right');
        }
    };

    return addToRefs;
};

export default useScrollAnimation;
