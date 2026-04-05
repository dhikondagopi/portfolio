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

    // ✅ Basic validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_a5mxs2t",       // ✅ your service ID
        "template_h5c30lp",     // ✅ your template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "REPLACE_WITH_YOUR_PUBLIC_KEY"  // 🔥 IMPORTANT: replace this
      )
      .then((response) => {
        console.log("SUCCESS:", response);
        setLoading(false);
        setSent(true);

        setTimeout(() => setSent(false), 4000);

        setForm({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("FAILED:", error);
        setLoading(false);
        alert("Failed to send message ❌");
      });
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-16">
        <span className="text-xs tracking-widest text-purple-400">
          04 — CONTACT
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-white/60 mt-4 max-w-xl mx-auto">
          Feel free to reach out for collaborations, internships, or opportunities.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* FORM */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(139,92,246,0.08)]">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              name="name"   // ✅ IMPORTANT
              placeholder="Your Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
              focus:border-purple-500 outline-none text-white placeholder:text-white/40"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"   // ✅ IMPORTANT
              placeholder="Your Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
              focus:border-purple-500 outline-none text-white placeholder:text-white/40"
            />

            {/* MESSAGE */}
            <textarea
              name="message"   // ✅ IMPORTANT
              placeholder="Write your message..."
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
              focus:border-purple-500 outline-none text-white placeholder:text-white/40 resize-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
              text-white font-medium tracking-wide hover:scale-[1.02] transition 
              shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS MESSAGE */}
            {sent && (
              <p className="text-green-400 text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-6 mt-10">

            <a
              href="https://github.com/dhikondagopi"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center 
              bg-white/[0.03] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition"
            >
              <Github className="text-white/80" size={20} />
            </a>

            <a
              href="https://linkedin.com/in/gopidhikonda1"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center 
              bg-white/[0.03] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition"
            >
              <Linkedin className="text-white/80" size={20} />
            </a>

            <a
              href="mailto:dhikondagopinaidu@gmail.com"
              className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center 
              bg-white/[0.03] hover:border-purple-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition"
            >
              <Mail className="text-white/80" size={20} />
            </a>

          </div>
        </div>

        {/* GLOBE */}
        <div className="hidden md:flex justify-center relative">
          <div className="opacity-60 scale-110">
            <AnimatedGlobe />
          </div>
        </div>

      </div>

      {/* BACKGROUND */}
      <div className="absolute right-[-180px] bottom-[-120px] opacity-30 pointer-events-none hidden xl:block">
        <AnimatedGlobe />
      </div>

    </section>
  );
};

export default ContactSection;