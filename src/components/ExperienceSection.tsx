import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Shadowfox",
    role: "Cybersecurity Intern",
    period: "2024",
    description:
      "Gained hands-on experience in security analysis, vulnerability assessment, and network monitoring. Conducted penetration testing and implemented security protocols.",
    side: "left" as const,
  },
  {
    company: "Prodigy Infotech",
    role: "Web Development Intern",
    period: "2024",
    description:
      "Developed web applications using modern frameworks and contributed to production-ready projects. Built responsive UIs and integrated REST APIs.",
    side: "right" as const,
  },
];


const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative min-h-screen flex items-center py-24 px-4">
      <div className="container mx-auto max-w-5xl z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4 inline-flex">03 — EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-16">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="w-full h-full"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 0 10px hsl(250 85% 68% / 0.4), 0 0 20px hsl(250 85% 68% / 0.2)",
              }}
            />
          </div>

          <div className="absolute left-6 top-0 bottom-0 w-px md:hidden" style={{ background: "var(--gradient-primary)" }} />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: exp.side === "left" ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.3 }}
                className={`relative flex items-center ${
                  exp.side === "left"
                    ? "md:justify-start md:pr-[52%]"
                    : "md:justify-end md:pl-[52%]"
                } pl-16 md:pl-0`}
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full hidden md:flex items-center justify-center z-10"
                  style={{
                    background: "hsl(var(--background))",
                    border: "2px solid hsl(var(--primary))",
                    boxShadow: "0 0 15px hsl(250 85% 68% / 0.4), 0 0 30px hsl(250 85% 68% / 0.2)",
                  }}
                >
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>

                <div className="absolute left-3 top-6 w-6 h-6 rounded-full md:hidden flex items-center justify-center z-10"
                  style={{
                    background: "hsl(var(--background))",
                    border: "2px solid hsl(var(--primary))",
                    boxShadow: "0 0 10px hsl(250 85% 68% / 0.3)",
                  }}
                >
                  <Briefcase className="w-3 h-3 text-primary" />
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-hover p-6 w-full group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono-code text-primary/70">{exp.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{exp.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
