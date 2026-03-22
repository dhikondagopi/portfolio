import { motion } from "framer-motion";
import { ArrowDown, Globe, Shield, Server, Smartphone, Download } from "lucide-react";
import heroProfile from "@/assets/hero-profile.png";

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
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      

      <div className="text-center z-10 max-w-4xl mx-auto pt-20">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-primary/30"
            style={{ boxShadow: "0 0 30px hsl(250 85% 68% / 0.3), 0 0 60px hsl(250 85% 68% / 0.1)" }}
          >
            <img src={heroProfile} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-3 leading-tight"
        >
          <span className="gradient-text">Gopi D</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Cybersecurity Student & Full Stack Developer — building secure, scalable web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-10"
        >
          <a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
        >
          {skillCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-hover p-5 flex flex-col items-center gap-3 cursor-default group"
              style={{ boxShadow: `0 0 0 0 transparent` }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} p-[1px] group-hover:shadow-lg transition-shadow duration-500`}
                style={{ boxShadow: `0 0 20px ${card.shadow}` }}
              >
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-foreground" />
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {card.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollTo("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
