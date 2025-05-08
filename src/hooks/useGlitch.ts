import { useState, useCallback } from "react";

export function useGlitch(duration: number = 500) {
  const [glitchEffect, setGlitchEffect] = useState(false);

  const triggerGlitch = useCallback(() => {
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), duration);
  }, [duration]);

  return { glitchEffect, triggerGlitch };
}
