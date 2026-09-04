import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  base: number;
};

/**
 * Animated cyber-network canvas: drifting nodes, proximity links, radial glow,
 * concentric rings and a central shield glyph. Mouse repels nearby nodes.
 */
export function HeroNetwork({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    const count = isMobile ? 26 : 54;
    let nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
        base: Math.random() * 0.5 + 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const unit = Math.min(w, h) * 0.16;

      // Core glow
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, unit * 2.6);
      glow.addColorStop(0, "rgba(59,130,246,0.22)");
      glow.addColorStop(0.5, "rgba(6,182,212,0.10)");
      glow.addColorStop(1, "rgba(59,130,246,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, unit * 2.6, 0, Math.PI * 2);
      ctx.fill();

      // Concentric rings
      ctx.strokeStyle = "rgba(59,130,246,0.10)";
      ctx.lineWidth = 0.6;
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, unit * (1.4 + i * 0.7), 0, Math.PI * 2);
        ctx.stroke();
      }

      // Nodes
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12000) {
            const push = (1 - d2 / 12000) * 0.6;
            n.x += (dx / Math.sqrt(d2 + 1)) * push;
            n.y += (dy / Math.sqrt(d2 + 1)) * push;
          }
        }
        ctx.fillStyle = `rgba(59,130,246,${n.base})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Links
      const range = isMobile ? 90 : 120;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]!;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < range) {
            ctx.strokeStyle = `rgba(99,102,241,${(1 - dist / range) * 0.22})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const dxc = a.x - cx;
        const dyc = a.y - cy;
        const dc = Math.sqrt(dxc * dxc + dyc * dyc);
        if (dc < unit * 3.2) {
          ctx.strokeStyle = `rgba(6,182,212,${(1 - dc / (unit * 3.2)) * 0.18})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(cx, cy);
          ctx.stroke();
        }
      }


      // Shield outline
      ctx.strokeStyle = "rgba(59,130,246,0.55)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      const u = unit;
      ctx.moveTo(cx, cy - u);
      ctx.bezierCurveTo(cx + u, cy - u, cx + u, cy + u * 0.4, cx, cy + u);
      ctx.bezierCurveTo(cx - u, cy + u * 0.4, cx - u, cy - u, cx, cy - u);
      ctx.stroke();

      // Check mark
      ctx.strokeStyle = "rgba(6,182,212,0.9)";
      ctx.lineWidth = 1.8;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(cx - u * 0.35, cy);
      ctx.lineTo(cx - u * 0.05, cy + u * 0.3);
      ctx.lineTo(cx + u * 0.4, cy - u * 0.3);
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    draw();

    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);

    if (isMobile) {
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
      };
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
