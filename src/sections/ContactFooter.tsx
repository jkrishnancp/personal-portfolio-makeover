import { profileData } from "@/data/portfolioData";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactFooter() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 gradient-hero text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Let's Connect</h2>
        <p className="text-white/70 mb-6">Open to new opportunities and strategic collaborations.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href={`mailto:${profileData.email}`}>
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10" asChild>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
        <p className="text-white/50 text-sm mt-8">
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
