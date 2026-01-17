import { Mail, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm always open to discussing cybersecurity strategies, career opportunities, or interesting projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="gradient-bg hover:opacity-90 transition-opacity"
              asChild
            >
              <a href={`mailto:${profileData.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                {profileData.email}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} {profileData.name}. Made with <Heart className="w-4 h-4 text-destructive" /> for cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
