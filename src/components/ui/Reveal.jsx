import { useReveal } from "../../hooks/useReveal.js";

/**
 * Envolve qualquer conteúdo e o revela com um fade + leve translação
 * assim que ele entra na tela.
 */
export default function Reveal({ children, className = "" }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: "opacity .7s ease, transform .7s ease",
      }}
    >
      {children}
    </div>
  );
}
