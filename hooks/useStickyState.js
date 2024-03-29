// https://www.joshwcomeau.com/snippets/react-hooks/use-sticky-state/
import {useEffect, useState} from 'react'

export function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(defaultValue);
  
    useEffect(() => {
      const stickyValue = window.localStorage.getItem(key);
  
      if (stickyValue !== null) {
        setValue(JSON.parse(stickyValue));
      }
    }, [key]);
  
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  }
  