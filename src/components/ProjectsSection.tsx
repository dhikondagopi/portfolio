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
    description:
      "AI-powered interview preparation platform with real-time feedback and performance analytics.",
    tech: ["React", "Node.js", "AI/ML", "MongoDB"],
    gradient: "from-purple-500 to-indigo-500",
    image: projectInterviewX,
  },
  {
    title: "UpLink",
    description:
      "Real-time communication platform enabling language learners to connect via chat and video.",
    tech: ["React", "Express", "Socket.io", "MongoDB"],
    gradient: "from-indigo-500 to-pink-500",
    image: projectUplink,
  },
  {
    title: "ThreatGuard AI",
    description:
      "Cybersecurity threat detection system analyzing logs using machine learning algorithms.",
    tech: ["React", "Python", "TensorFlow", "MongoDB"],
    gradient: "from-pink-500 to-orange-400",
    image: projectThreatguard,
  },
  {
    title: "Food Bridge",
    description:
      "Platform connecting food donors with NGOs to reduce waste and improve social impact.",
    tech: ["React", "Node", "MongoDB", "Express"],
    gradient: "from-green-400 to-sky-400",
    image: projectFoodbridge,
    github: "https://github.com/dhikondagopi/food-bridge",
     live: "https://foodbridgge.netlify.app/"
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center py-24 px-4"
    >
      <div className="container mx-auto max-w-6xl z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-widest text-purple-400">
            02 — PROJECTS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-14 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group rounded-2xl border border-white/10 
              bg-gradient-to-b from-white/5 to-white/[0.02] 
              backdrop-blur-xl overflow-hidden 
              transition-all duration-500 
              hover:border-purple-500/40 
              hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
            >
              {/* IMAGE */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* GRADIENT LINE */}
              <div
                className={`h-[2px] bg-gradient-to-r ${project.gradient}`}
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition">
                  {project.title}
                </h3>

                <p className="text-sm text-white/60 mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-lg 
                      bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-6">
                  <button className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                    <Github size={14} />
                    Code
                  </button>

                  <button className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow hover:scale-105 transition">
                    <ExternalLink size={14} />
                    Live
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