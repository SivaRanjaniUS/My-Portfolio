import { useEffect, useRef } from "react";

const KATAKANA = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const LATIN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "<>/{}[]()#$%&*+=|~:;._-";
const BINARY = "01";
const HEX = "0123456789ABCDEF";

// Letters and digits dominate so the rain reads like source code, with
// katakana, hex and pure binary columns mixed in for texture.
const CHARS = (LATIN + DIGITS).repeat(3) + SYMBOLS + KATAKANA;
const POOLS = [CHARS, CHARS, CHARS, CHARS, BINARY, HEX, SYMBOLS + DIGITS];

export function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const size = 16;
    let drops: number[] = [];
    let speeds: number[] = [];
    let pools: string[] = [];
    let paused = false;
    let pausePoint: { x: number; y: number } | null = null;
    let raf = 0;
    let last = 0;

    const rain = "#39ff88";
    const head = "#d8ffe6";
    const fade = "rgba(7,19,13,0.12)";

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(canvas.offsetWidth / size);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
      speeds = Array.from({ length: cols }, () => 0.4 + Math.random() * 0.6);
      pools = Array.from({ length: cols }, () => POOLS[(Math.random() * POOLS.length) | 0] ?? CHARS);
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (paused || t - last < 45) return;
      last = t;
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.font = `${size}px "JetBrains Mono", monospace`;
      drops.forEach((d, i) => {
        const pool = pools[i] ?? CHARS;
        const ch = pool.charAt((Math.random() * pool.length) | 0);
        const sp = speeds[i] ?? 0.5;
        const x = i * size;
        const y = d * size;
        ctx.fillStyle = Math.random() > 0.96 ? head : rain;
        ctx.globalAlpha = 0.35 + sp * 0.4;
        ctx.fillText(ch, x, y);
        ctx.globalAlpha = 1;
        drops[i] = y > canvas.offsetHeight && Math.random() > 0.975 ? 0 : d + sp;
      });
    };

    const down = (e: PointerEvent) => {
      paused = true;
      const r = canvas.getBoundingClientRect();
      pausePoint = { x: e.clientX - r.left, y: e.clientY - r.top };
      // freeze ring
      ctx.strokeStyle = head;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(pausePoint.x, pausePoint.y, 18, 0, Math.PI * 2);
      ctx.stroke();
    };
    const up = () => {
      paused = false;
      pausePoint = null;
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);

  return <canvas ref={ref} aria-hidden />;
}
