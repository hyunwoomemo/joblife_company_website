import { useEffect, useRef, useState } from 'react'

const useIntersectionObsever = (targetRef) => {

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          target.style.opacity = 1;
          target.style.transitionDuration = `1s`;
        } else {
          target.style.opacity = 0;
        }
      });
    }, options);

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [targetRef]);

}
export default useIntersectionObsever
