import { motion } from "framer-motion";
import {
  Trophy,
  Calendar,
  Sparkles,
  Code2,
  ShieldCheck,
  Leaf,
  Utensils,
  CheckCircle2,
  ExternalLink,
  Github,
} from "lucide-react";

const submittedProjects = [
  {
    icon: Utensils,
    title: "CafeFlow POS",
    category: "Hackathon Project",
    year: "2026",
    status: "Submitted / Built",
    liveDemo: "hhttps://cafeflowpos.vercel.app/",
    github: "https://github.com/dhikondagopi",
    description:
      "A real-time restaurant POS system inspired by Odoo POS with cashier terminal, admin dashboard, kitchen display, table management, payments, receipts, and reports.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    highlights: [
      "Real-time Kitchen Display",
      "Admin, Cashier, Kitchen Roles",
      "Payments & Receipts",
    ],
  },
  {
    icon: Leaf,
    title: "Environment Hackathon Project",
    category: "Hackathon Project",
    year: "2026",
    status: "Top 17 / Submitted",
    liveDemo: "https://your-environment-project-live-demo-link.com",
    github: "https://github.com/dhikondagopi",
    description:
      "An environment-focused hackathon project built for Parul University Environment Hackathon 2026, designed to solve real-world sustainability and environmental impact problems.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
    highlights: [
      "Top 17 Selection",
      "Sustainability Solution",
      "Team Presentation",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Odoo Hackathon Participant",
    year: "2026",
    certificatePdf: "/certificates/odoo-certificate.pdf",
    description:
      "Participated in the Odoo hackathon and worked on a real-time Cafe POS solution based on Odoo-style requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Top 17 - Environment Hackathon",
    year: "2026",
    certificatePdf: "/certificates/environment-certificate.pdf",
    description:
      "Selected among the Top 17 teams in Parul University Environment Hackathon 2026.",
  },
];

const stats = [
  {
    value: "2+",
    label: "Submitted Projects",
  },
  {
    value: "2+",
    label: "Hackathons",
  },
  {
    value: "MERN",
    label: "Main Stack",
  },
  {
    value: "AI/ML",
    label: "Learning Track",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="section-badge mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / Project Submissions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-5">
            Submitted Projects &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            These are the main projects I have built, submitted, or presented
            during hackathons, academic learning, and personal development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass text-center p-5 sm:p-6 rounded-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-display font-bold gradient-text mb-1">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {submittedProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-hover p-6 sm:p-7 rounded-2xl group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-mono-code px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {project.category}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>

                    <p className="inline-flex items-center gap-1.5 text-xs text-primary mb-4">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {project.status}
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Tech Stack
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1.5 rounded-full bg-muted/40 text-muted-foreground border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Key Highlights
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                          Live Demo
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-muted/40 text-foreground border border-border/60 hover:border-primary/40 transition-colors"
                        >
                          GitHub
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="section-badge mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>Achievements</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Hackathon & Recognition
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="glass-hover p-6 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </div>

                      <h4 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>

                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {item.certificatePdf ? (
                        <a
                          href={item.certificatePdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                          View Certificate
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium bg-muted text-muted-foreground cursor-not-allowed"
                        >
                          Certificate Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 glass p-6 sm:p-8 rounded-2xl text-center"
        >
          <Code2 className="w-8 h-8 text-primary mx-auto mb-4" />

          <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">
            Building Real-World Projects
          </h3>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I focus on building practical projects using full-stack development,
            cybersecurity concepts, AI/ML basics, and clean user interfaces that
            solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;