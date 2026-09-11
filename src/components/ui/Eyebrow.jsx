/**
 * Rótulo pequeno em versalete usado no topo de cada seção.
 * `light` troca a cor para o tom usado sobre fundos escuros.
 */
export default function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`font-body text-xs font-semibold uppercase tracking-[0.16em] ${
        light ? "text-vela-suave" : "text-vela"
      }`}
    >
      {children}
    </p>
  );
}
