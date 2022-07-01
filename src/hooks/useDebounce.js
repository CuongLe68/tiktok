import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setdebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setdebounceValue(value), delay);

    return () => clearTimeout(handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
