import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setdebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setdebounceValue(value), delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
