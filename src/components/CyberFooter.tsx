import { Github, Linkedin, Mail } from "lucide-react";

const CyberFooter = () => {
  return (
    <footer className="relative z-10 border-t border-border/20">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm font-bold gradient-text">Gopi.D</span>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gopi D. Built with passion & code.
          </p>

          <div className="flex items-center gap-2">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-xl flex items-center justify-center bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CyberFooter;
