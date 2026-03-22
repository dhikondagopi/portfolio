import { motion } from "framer-motion";

const GradientMesh = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* blob 1 */}
      <motion.div
        animate={{ x: [0, 20, -15, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -left-1/4 w-[45vw] h-[45vw] rounded-full opacity-25 blur-[80px]"
        style={{
          background: "radial-gradient(circle, hsl(250 85% 60%), transparent 70%)",
        }}
      />

      {/* blob 2 */}
      <motion.div
        animate={{ x: [0, -20, 20, 0], y: [0, 15, -15, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -right-1/4 w-[40vw] h-[40vw] rounded-full opacity-20 blur-[80px]"
        style={{
          background: "radial-gradient(circle, hsl(330 75% 60%), transparent 70%)",
        }}
      />

      {/* subtle grid grain */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
        }}
      />
    </div>
  );
};

export default GradientMesh;