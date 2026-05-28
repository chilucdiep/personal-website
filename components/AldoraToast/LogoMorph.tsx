"use client";

import { useRef, useEffect, useId } from "react";

const SHAPES: number[][] = [
  [0.90, 0.52, 0.35, 0.90, 0.52, 0.35, 0.90, 0.52, 0.35, 0.90, 0.52, 0.35],
  [0.90, 0.52, 0.36, 0.52, 0.90, 0.52, 0.36, 0.52, 0.90, 0.52, 0.36, 0.52],
  [0.88, 0.55, 0.84, 0.52, 0.88, 0.55, 0.84, 0.52, 0.88, 0.55, 0.84, 0.52],
];

const HOLD_MS = 2500;
const TRANS_MS = 1700;
const CX = 50, CY = 50, R = 43;
const K = 0.40;
const ROT_RATE = 0.000025;
const MAX_TILT = 20;
const TILT_LERP = 0.08;

function eio(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function lerpShapes(a: number[], b: number[], t: number): number[] {
  const e = eio(Math.max(0, Math.min(1, t)));
  return a.map((v, i) => v + (b[i] - v) * e);
}

function f(n: number) { return n.toFixed(2); }

function toPath(radii: number[], rot: number): string {
  const n = radii.length;
  const pts: [number, number][] = radii.map((r, i) => {
    const a = -Math.PI / 2 + (i / n) * 2 * Math.PI + rot;
    return [CX + r * R * Math.cos(a), CY + r * R * Math.sin(a)];
  });
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i];
    const p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) * K, c1y = p1[1] + (p2[1] - p0[1]) * K;
    const c2x = p2[0] - (p3[0] - p1[0]) * K, c2y = p2[1] - (p3[1] - p1[1]) * K;
    d += `C${f(c1x)},${f(c1y)},${f(c2x)},${f(c2y)},${f(p2[0])},${f(p2[1])}`;
  }
  return d + "Z";
}

export function LogoMorph({ size = 48 }: { size?: number }) {
  const uid = useId().replace(/:/g, "");
  const fillId = `lmf-${uid}`;
  const blurId = `lmb-${uid}`;
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const gradRef = useRef<SVGRadialGradientElement>(null);

  useEffect(() => {
    if (!wrapRef.current || !pathRef.current || !glowRef.current || !gradRef.current) return;
    const wrap = wrapRef.current;
    const path = pathRef.current;
    const glow = glowRef.current;
    const grad = gradRef.current;

    const tiltTarget = { x: 0, y: 0 };
    const tiltSmooth = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      tiltTarget.x = (e.clientX / window.innerWidth - 0.5) * 2;
      tiltTarget.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const TOTAL = SHAPES.length * (HOLD_MS + TRANS_MS);
    const t0 = performance.now();
    let raf: number;

    function tick() {
      const elapsed = performance.now() - t0;
      const cycleT = elapsed % TOTAL;
      const slot = Math.floor(cycleT / (HOLD_MS + TRANS_MS)) % SHAPES.length;
      const slotT = cycleT - slot * (HOLD_MS + TRANS_MS);
      const next = (slot + 1) % SHAPES.length;
      const rot = elapsed * ROT_RATE;

      const radii = slotT <= HOLD_MS
        ? SHAPES[slot]
        : lerpShapes(SHAPES[slot], SHAPES[next], (slotT - HOLD_MS) / TRANS_MS);

      const d = toPath(radii, rot);
      path.setAttribute("d", d);
      glow.setAttribute("d", d);

      const gx = 0.38 + tiltSmooth.x * 0.18 + Math.sin(elapsed * 0.00014) * 0.08;
      const gy = 0.33 - tiltSmooth.y * 0.14 + Math.cos(elapsed * 0.00010) * 0.08;
      grad.setAttribute("cx", gx.toFixed(3));
      grad.setAttribute("cy", gy.toFixed(3));

      tiltSmooth.x += (tiltTarget.x - tiltSmooth.x) * TILT_LERP;
      tiltSmooth.y += (tiltTarget.y - tiltSmooth.y) * TILT_LERP;
      const rotX = (-tiltSmooth.y * MAX_TILT).toFixed(2);
      const rotY = (tiltSmooth.x * MAX_TILT).toFixed(2);
      wrap.style.transform = `perspective(300px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;

      raf = requestAnimationFrame(tick);
    }

    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", willChange: "transform", flexShrink: 0 }}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        style={{
          width: size,
          height: size,
          overflow: "visible",
          filter: "drop-shadow(0 0 6px rgba(255,248,218,0.55)) drop-shadow(0 0 18px rgba(255,234,185,0.18))",
        }}
      >
        <defs>
          <radialGradient ref={gradRef} id={fillId} cx="0.38" cy="0.33" r="0.68" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#fffef6" stopOpacity="1" />
            <stop offset="42%" stopColor="#f0e9d4" stopOpacity="0.93" />
            <stop offset="100%" stopColor="#b8ae8c" stopOpacity="0.76" />
          </radialGradient>
          <filter id={blurId} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4.5" />
          </filter>
        </defs>
        <path
          ref={glowRef}
          fill="rgba(255,242,200,0.20)"
          style={{ filter: `url(#${blurId})`, transform: "scale(1.12)", transformOrigin: "50px 50px" }}
        />
        <path
          ref={pathRef}
          fill={`url(#${fillId})`}
          stroke="rgba(255,255,255,0.42)"
          strokeWidth="0.55"
        />
      </svg>
    </div>
  );
}
