import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Sparkles,
  CheckCircle2,
  Building2,
  Clock,
} from "lucide-react";

const internships = [
  {
    icon: Briefcase,
    title: "Infosys Springboard Virtual Internship 7.0",
    company: "Infosys Springboard",
    year: "2026",
    batch: "Batch 3",
    status: "Selected / Upcoming",
    startDate: "Expected Start: August 3, 2026",
    description:
      "Selected for Infosys Springboard Virtual Internship 7.0 - Batch 3. The internship is expected to begin on August 3, 2026, subject to successful document verification.",
    highlights: [
      "Virtual Internship",
      "Batch 3 Selection",
      "Professional Learning",
      "Document Verification Pending",
    ],
  },
];

const InternshipsSection = () => {
  return (
    <section
      id="internships"
      className="relative py-20 md:py-28 overflow-hidden"
    >
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
            <span>04 / Internships</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-5">
            Internship <span className="gradient-text">Experience</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Internship selections and professional learning opportunities that
            support my growth as a developer.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {internships.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-hover p-6 sm:p-8 rounded-2xl group"
              >
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono-code px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {item.status}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {item.batch}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
                      {item.title}
                    </h3>

                    <p className="inline-flex items-center gap-2 text-primary text-sm sm:text-base mb-3">
                      <Building2 className="w-4 h-4" />
                      {item.company}
                    </p>

                    <p className="text-sm text-muted-foreground mb-5">
                      {item.startDate}
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-3 py-1.5 rounded-full bg-muted/40 text-muted-foreground border border-border/50"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;