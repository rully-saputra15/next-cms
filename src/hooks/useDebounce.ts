import React from 'react';

export default function useDebounce(callback: Function, delay: number) {
  const timer = React.useRef<any>(null);

  // eslint-disable-next-line arrow-body-style
  React.useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
}
