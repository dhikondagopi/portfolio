import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedGlobe from "@/components/AnimatedGlobe";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden"
    >
      {/* ⭐ RIGHT SIDE GLOBE */}
      <div className="absolute right-0 md:right-10 bottom-10 opacity-60 hidden md:block">
        <AnimatedGlobe />
      </div>

      <div className="w-full max-w-4xl z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-badge mb-4 inline-flex">
            04 — CONTACT
          </span>

          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-3">
            Get in Touch
          </h2>

          <p className="text-white/60">
            Feel free to reach out for collaborations, internships or opportunities.
          </p>
        </motion.div>

        {/* Form Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 shadow-[0_0_40px_rgba(139,92,246,0.08)]">

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
              focus:border-purple-500 outline-none text-white/80 placeholder:text-white/40"
            />

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
              focus:border-purple-500 outline-none text-white/80 placeholder:text-white/40"
            />

            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
              focus:border-purple-500 outline-none text-white/80 placeholder:text-white/40"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
              font-semibold text-white tracking-wide hover:scale-[1.02] transition 
              shadow-[0_0_25px_rgba(236,72,153,0.35)]"
            >
              Send Message
            </button>
          </form>

          {/* ⭐ SOCIAL ICONS */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/dhikondagopi"
              target="_blank"
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center 
              bg-white/[0.03] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] 
              transition"
            >
              <Github className="text-white/70" size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center 
              bg-white/[0.03] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] 
              transition"
            >
              <Linkedin className="text-white/70" size={20} />
            </a>

            <a
              href="mailto:2303031260053@paruluniversity.ac.in"
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center 
              bg-white/[0.03] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] 
              transition"
            >
              <Mail className="text-white/70" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;