import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
  ExternalLink,
  Send,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    title: "Email",
    value: "dhikondagopinaidu@gmail.com",
    href: "mailto:dhikondagopinaidu@gmail.com",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/dhikondagopi",
    href: "https://github.com/dhikondagopi",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/gopidhikonda1",
    href: "https://linkedin.com/in/gopidhikonda1",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="section-badge mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 / Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-5">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Feel free to reach out for internships, collaborations, hackathons,
            projects, or developer opportunities.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-hover p-6 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground truncate">
                      {item.value}
                    </p>
                  </div>

                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-12 glass p-6 sm:p-8 rounded-2xl text-center"
        >
          <Send className="w-8 h-8 text-primary mx-auto mb-4" />

          <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">
            Open to Opportunities
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            I am actively improving my skills in MERN stack, cybersecurity,
            AI/ML, cloud, and real-world project development. I am open to
            internships, hackathons, and developer opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;