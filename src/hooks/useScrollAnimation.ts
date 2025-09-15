'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '-200px 0px',
  triggerOnce = true,
}: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 첫번째 엔트리 (html 태그) 가져오기
        const [entry] = entries;
        // 트리깅한 엔트리가 뷰포트에 접근시
        if (entry.isIntersecting) {
          // 보임 상태로 state 변경
          setIsVisible(true);
          // 렌더링 시 한번만 트리거 하고 관찰 중지 시킴
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
        // 트리깅이 되지 않앗다면 숨김 상태
        else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: elementRef, isVisible };
}
