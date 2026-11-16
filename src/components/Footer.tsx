import { Zap } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t border-border/50 bg-muted/30">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">Neonest</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="mailto:hello@neonest.ai" className="hover:text-foreground transition-colors">hello@neonest.ai</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Neonest. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
