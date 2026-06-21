import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Trophy,
  Sparkles,
  Cloud,
  Database,
  GitBranch,
} from "lucide-react";

const certifications = [
  {
    icon: Cloud,
    title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
    issuer: "Oracle University",
    year: "2025",
    validUntil: "Valid until Oct 28, 2027",
    category: "Cloud Certification",
    certificateLink: "/certificates/oracle-oci-architect-associate.pdf",
    description:
      "Oracle Certified Associate recognition for Oracle Cloud Infrastructure architecture fundamentals and cloud solution design.",
  },
  {
    icon: GitBranch,
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    issuer: "Oracle University",
    year: "2025",
    validUntil: "Valid until Oct 29, 2027",
    category: "DevOps Certification",
    certificateLink: "/certificates/oracle-oci-devops-professional.pdf",
    description:
      "Oracle Certified Professional recognition focused on DevOps practices, automation, deployment, and cloud infrastructure workflows.",
  },
  {
    icon: Database,
    title: "Oracle Database@AWS Certified Architect Professional",
    issuer: "Oracle University",
    year: "2025",
    validUntil: "Certified Oct 27, 2025",
    category: "Database Certification",
    certificateLink: "/certificates/oracle-database-aws-professional.pdf",
    description:
      "Oracle Certified Professional recognition related to Oracle Database@AWS architecture and database cloud infrastructure concepts.",
  },

];

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
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
            <span>04 / Certifications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-5">
            Important <span className="gradient-text">Certifications</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Professional certifications and recognitions that highlight my
            practical learning, cloud knowledge, hackathon participation, and
            technical growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-hover p-6 rounded-2xl group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono-code px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {cert.category}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.year}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-1">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-primary mb-1">{cert.issuer}</p>

                    <p className="text-xs text-muted-foreground">
                      {cert.validUntil}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {cert.description}
                </p>

                {cert.certificateLink ? (
                  <a
                    href={cert.certificateLink}
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
                    className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-muted text-muted-foreground cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;