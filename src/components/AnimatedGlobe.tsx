import { useEffect, useRef } from "react";

const AnimatedGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const size = 320;
    canvas.width = size;
    canvas.height = size;

    const cx = size / 2;
    const cy = size / 2;
    const radius = 110;

    const animate = () => {
      const t = Date.now() * 0.0006;
      ctx.clearRect(0, 0, size, size);

      // simple glow
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.5, cx, cy, radius * 1.3);
      glow.addColorStop(0, "hsla(250,85%,65%,0.12)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, size, size);

      // sphere
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "hsla(250,85%,65%,0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // rotating longitude lines (only 3)
      for (let i = 0; i < 3; i++) {
        const angle = t + i;
        ctx.beginPath();
        ctx.ellipse(cx, cy, radius * Math.abs(Math.cos(angle)), radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "hsla(200,90%,60%,0.18)";
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="flex items-center justify-center w-full min-h-[320px]">
      <canvas ref={canvasRef} className="w-[280px] h-[280px] md:w-[320px] md:h-[320px]" />
    </div>
  );
};

export default AnimatedGlobe;