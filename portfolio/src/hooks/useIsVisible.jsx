import { useEffect, useState } from "react";

export default function useIsVisible(ref) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref]);

    return isVisible;
}
