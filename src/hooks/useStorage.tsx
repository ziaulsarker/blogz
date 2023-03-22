import { useState, useEffect } from "react";

export default function useStorage(key: string, initialState: string) {
  const [value, setValue] = useState<string>(initialState);

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue];
}