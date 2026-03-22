import { useEffect, useRef } from "react";

const AnimatedGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const size = 300;   // ⭐ slightly smaller → smoother
    canvas.width = size;
    canvas.height = size;

    const cx = size / 2;
    const cy = size / 2;
    const radius = 100;

    const animate = () => {
      const t = Date.now() * 0.0007;
      ctx.clearRect(0, 0, size, size);

      // glow
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.4);
      glow.addColorStop(0, "hsla(250,85%,65%,0.15)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, size, size);

      // sphere
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "hsla(250,85%,65%,0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // rotating lines
      for (let i = 0; i < 3; i++) {
        const angle = t + i * 1.5;
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          radius * Math.abs(Math.cos(angle)),
          radius,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = "hsla(200,90%,60%,0.25)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative z-20 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
      />
    </div>
  );
};

export default AnimatedGlobe;