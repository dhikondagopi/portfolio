import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "emailjs-com";
import AnimatedGlobe from "@/components/AnimatedGlobe";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_a5mxs2t",
        "template_h5c30lp",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message ❌");
      });
  };

  return (
    <section id="contact" className="relative py-28 px-4 overflow-hidden">
      
      <div className="container mx-auto max-w-4xl relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-widest text-purple-400">
            04 — CONTACT
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let’s Connect
          </h2>

          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Feel free to reach out for collaborations, internships, or opportunities.
          </p>
        </motion.div>

        {/* FORM CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(139,92,246,0.08)]">

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              placeholder="Your Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
              focus:border-purple-500 outline-none text-white placeholder:text-white/40"
            />

            <input
              type="email"
              placeholder="Your Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
              focus:border-purple-500 outline-none text-white placeholder:text-white/40"
            />

            <textarea
              placeholder="Write your message..."
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
              focus:border-purple-500 outline-none text-white placeholder:text-white/40 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
              text-white font-medium tracking-wide hover:scale-[1.02] transition 
              shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-400 text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-6 mt-8">

            <a
              href="https://github.com/dhikondagopi"
              target="_blank"
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center 
              bg-white/[0.03] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition"
            >
              <Github className="text-white/80" size={20} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center 
              bg-white/[0.03] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition"
            >
              <Linkedin className="text-white/80" size={20} />
            </a>

            <a
              href="mailto:dhikondagopi@gmail.com"
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center 
              bg-white/[0.03] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition"
            >
              <Mail className="text-white/80" size={20} />
            </a>

          </div>
        </div>
      </div>

      {/* ⭐ GLOBE FIXED POSITION */}
     <div className="absolute right-[-120px] bottom-[-60px] opacity-40 hidden xl:block pointer-events-none">
      <AnimatedGlobe />
     </div>

    </section>
  );
};

export default ContactSection;