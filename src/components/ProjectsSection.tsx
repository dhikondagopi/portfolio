import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

import projectInterviewX from "@/assets/project-interviewx.jpg";
import projectUplink from "@/assets/project-uplink.jpg";
import projectThreatguard from "@/assets/project-threatguard.jpg";
import projectFoodbridge from "@/assets/project-foodbridge.jpg";

const projects = [
  {
    title: "InterviewX",
    description: "AI-powered interview preparation platform that helps candidates practice and improve their skills with real-time feedback.",
    tech: ["React", "Node.js", "AI/ML", "MongoDB"],
    gradient: "from-[hsl(200,90%,60%)] to-[hsl(250,85%,68%)]",
    accent: "hsl(200 90% 60%)",
    image: projectInterviewX,
  },
  {
    title: "UpLink",
    description: "Language learning and communication platform connecting learners worldwide with real-time chat and video sessions.",
    tech: ["React", "Express.js", "Socket.io", "MongoDB"],
    gradient: "from-[hsl(250,85%,68%)] to-[hsl(330,75%,62%)]",
    accent: "hsl(250 85% 68%)",
    image: projectUplink,
  },
  {
    title: "ThreatGuard AI",
    description: "Advanced cybersecurity threat detection platform that analyzes network and system logs to detect malicious activities using AI.",
    tech: ["React", "Python", "TensorFlow", "MongoDB"],
    gradient: "from-[hsl(330,75%,62%)] to-[hsl(20,90%,65%)]",
    accent: "hsl(330 75% 62%)",
    image: projectThreatguard,
  },
  {
    title: "Food Bridge",
    description: "Social impact platform connecting restaurants, event organizers, and households with NGOs to donate surplus food and reduce food waste.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    gradient: "from-[hsl(150,80%,50%)] to-[hsl(200,90%,60%)]",
    accent: "hsl(150 80% 50%)",
    image: projectFoodbridge,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative min-h-screen flex items-center py-24 px-4">
      <div className="container mx-auto max-w-6xl z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4 inline-flex">02 — WORK</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-12">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-hover group relative overflow-hidden"
            >
              {/* Project image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card pointer-events-none" />
              </div>

              {/* Gradient accent bar */}
              <div
                className={`h-[2px] bg-gradient-to-r ${project.gradient}`}
                style={{ boxShadow: `0 0 12px ${project.accent}` }}
              />

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary/80 border border-primary/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="btn-glass flex items-center gap-1.5 !px-4 !py-2 text-xs">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </button>
                  <button className="btn-primary flex items-center gap-1.5 !px-4 !py-2 text-xs !shadow-none">
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
