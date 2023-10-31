import { useEffect, useState } from 'react';

const isServer = typeof window === 'undefined';

export default function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => initialValue);

  function initialize() {
    if (isServer) {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as string) : initialValue;
    } catch (error) {
      return initialValue;
    }
  }

  useEffect(() => {
    if (!isServer) {
      setStoredValue(initialize());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Stupid
  }, []);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  function setValue(value: string) {
    try {
      // Allow value to be a function so we have same API as useState
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      /* empty */
    }
  }
  return [storedValue, setValue] as const;
}
