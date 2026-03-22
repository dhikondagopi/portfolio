import { motion } from "framer-motion";
import { ArrowDown, Globe, Shield, Server, Smartphone, Download } from "lucide-react";
import heroProfile from "@/assets/hero-profile.png";

const skillCards = [
  { icon: Globe, title: "Web Developer" },
  { icon: Smartphone, title: "React Native Developer" },
  { icon: Server, title: "Backend Developer" },
  { icon: Shield, title: "Cybersecurity Enthusiast" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">

      <div className="text-center z-10 max-w-4xl mx-auto pt-24">

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border border-primary/40"
            style={{ boxShadow: "0 0 40px hsl(250 85% 68% / 0.35)" }}
          >
            <img src={heroProfile} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Gopi D
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 mb-10 text-lg">
          Cybersecurity Student & Full Stack Developer — building secure web experiences.
        </p>

        {/* Resume Button */}
        <a
          href="/Gopi_D_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
          bg-gradient-to-r from-purple-500 to-pink-500 
          text-white font-medium shadow-lg hover:scale-105 transition mb-14"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>

        {/* Skill cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {skillCards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] 
              backdrop-blur-md text-center hover:border-purple-500 
              transition hover:shadow-[0_0_20px_hsl(250_85%_68%/0.25)]"
            >
              <card.icon className="mx-auto mb-3 text-purple-400" size={26} />
              <p className="text-sm text-white/80">{card.title}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-white/60"
      >
        <ArrowDown />
      </motion.button>

    </section>
  );
};

export default HeroSection;