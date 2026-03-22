import { motion } from "framer-motion";
import { ArrowDown, Globe, Shield, Server, Smartphone, Download } from "lucide-react";
import heroProfile from "@/assets/hero-profile.png";
import AnimatedGlobe from "@/components/AnimatedGlobe";   // ⭐ ADD THIS

const skillCards = [
  {
    icon: Globe,
    title: "Web Developer",
    gradient: "from-[hsl(200,90%,60%)] to-[hsl(250,85%,68%)]",
    shadow: "hsl(200 90% 60% / 0.2)",
  },
  {
    icon: Smartphone,
    title: "React Native Developer",
    gradient: "from-[hsl(250,85%,68%)] to-[hsl(330,75%,62%)]",
    shadow: "hsl(250 85% 68% / 0.2)",
  },
  {
    icon: Server,
    title: "Backend Developer",
    gradient: "from-[hsl(330,75%,62%)] to-[hsl(20,90%,65%)]",
    shadow: "hsl(330 75% 62% / 0.2)",
  },
  {
    icon: Shield,
    title: "Cybersecurity Enthusiast",
    gradient: "from-[hsl(150,80%,50%)] to-[hsl(200,90%,60%)]",
    shadow: "hsl(150 80% 50% / 0.2)",
  },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">

      {/* ⭐ GLOBE BACKGROUND */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-70 hidden md:block">
        <AnimatedGlobe />
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto pt-20">
        
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-primary/30"
            style={{ boxShadow: "0 0 30px hsl(250 85% 68% / 0.3)" }}
          >
            <img src={heroProfile} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Gopi D
        </h1>

        <p className="text-muted-foreground mb-8">
          Cybersecurity Student & Full Stack Developer — building secure web experiences.
        </p>

        <a
          href="/Gopi_D_Resume.pdf"
          download
          className="btn-primary inline-flex items-center gap-2 mb-12"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>

        {/* Skill cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {skillCards.map((card) => (
            <div key={card.title} className="glass-hover p-5 text-center">
              <card.icon className="mx-auto mb-2" />
              <p className="text-sm">{card.title}</p>
            </div>
          ))}
        </div>

      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <ArrowDown />
      </motion.button>

    </section>
  );
};

export default HeroSection;