'use client';

import { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';

interface SplineSceneProps {
  scene: string;
  className?: string;
  onSplineLoaded?: () => void;
}

const SplineScene = ({ scene, className, onSplineLoaded }: SplineSceneProps) => {
  const splineRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const isPlayingRef = useRef(true);

  const onLoad = (splineApp: Application) => {
    appRef.current = splineApp;
    isPlayingRef.current = true;

    if (onSplineLoaded) {
      onSplineLoaded();
    }
  };

  useEffect(() => {
    const currentElement = splineRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const app = appRef.current;
          if (!app) return;

          if (entry.isIntersecting) {
            // 뷰포트에 들어왔을 때 - 애니메이션 재생
            if (!isPlayingRef.current) {
              app.play();
              isPlayingRef.current = true;
            }
          } else {
            // 뷰포트에서 나갔을 때 - 애니메이션 정지
            if (isPlayingRef.current) {
              app.stop();
              isPlayingRef.current = false;
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '50px',
      },
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
      if (appRef.current) {
        appRef.current.stop();
      }
    };
  }, []);

  return (
    <div ref={splineRef} className={className}>
      <Spline scene={scene} onLoad={onLoad} />
    </div>
  );
};

export default SplineScene;
