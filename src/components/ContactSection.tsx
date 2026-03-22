import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "emailjs-com";

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
        "template_dknkthj",
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
    <section id="contact" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">

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
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Your Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 text-white"
            />

            <input
              type="email"
              placeholder="Your Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 text-white"
            />

            <textarea
              placeholder="Write your message..."
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 text-white resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:scale-[1.02] transition"
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
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com/dhikondagopi"
              target="_blank"
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center hover:border-purple-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center hover:border-purple-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:dhikondagopi@gmail.com"
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center hover:border-purple-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;