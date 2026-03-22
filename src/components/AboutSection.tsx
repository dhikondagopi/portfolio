import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Folder, Award, Cpu } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+", icon: Folder },
  { label: "Internships", value: "2+", icon: Award },
  { label: "Technologies", value: "15+", icon: Cpu },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative min-h-screen flex items-center py-24 px-4">
      <div className="container mx-auto max-w-5xl z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge mb-4 inline-flex">01 — ABOUT</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-10">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 glass-highlight p-8"
          >
            <p className="text-foreground/90 text-lg leading-relaxed mb-4">
              B.Tech <span className="text-primary font-medium">Cybersecurity</span> student at{" "}
              <span className="gradient-text font-semibold">Parul University</span>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Passionate about building secure and scalable web applications. Experienced in full stack development and cybersecurity tools.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Constantly exploring new technologies and pushing the boundaries of what&apos;s possible in the digital world.
            </p>
          </motion.div>

          <div className="md:col-span-2 flex flex-col gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-hover p-5 flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center gradient-border" style={{ background: "hsl(250 85% 68% / 0.1)" }}>
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
