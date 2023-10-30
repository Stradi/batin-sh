import { useEffect, useState } from 'react';

export default function useScrollPosition(): number {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY);
    }

    updatePosition();

    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return position;
}
