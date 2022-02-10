import { useRef } from 'react';
import { useRequestAnimationFrame } from 'beautiful-react-hooks';

export default function Animation() {
  const ref = useRef();
  const options = { increment: 0.5, startAt: 0, finishAt: -1 };

  useRequestAnimationFrame((progress, next) => {
    ref.current.style.transform = `rotate(${progress}deg)`;
    next();
  }, options);

  return (
    <div ref={ref}>
      <p>Thank You For Signing!</p>
    </div>
  );
}
