import { useEffect, useState } from "react";

/**
 * Retorna `true` assim que a página é rolada além de `offset` pixels.
 * Usado para dar fundo sólido ao menu fixo.
 */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}
