import { motion } from "framer-motion";

const GradientMesh = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      
      {/* blob 1 */}
      <motion.div
        animate={{ x: [0, 20, -15, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -left-1/4 w-[45vw] h-[45vw] rounded-full opacity-25 blur-[60px]"
        style={{ background: "radial-gradient(circle, hsl(250 85% 60%), transparent 70%)" }}
      />

      {/* blob 2 */}
      <motion.div
        animate={{ x: [0, -20, 20, 0], y: [0, 15, -15, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -right-1/4 w-[40vw] h-[40vw] rounded-full opacity-20 blur-[60px]"
        style={{ background: "radial-gradient(circle, hsl(330 75% 60%), transparent 70%)" }}
      />

      {/* grain overlay (light) */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
};

export default GradientMesh;