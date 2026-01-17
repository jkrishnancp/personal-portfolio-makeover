import { Mail, Linkedin, MapPin, Shield, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/portfolioData";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cybersecurity Leader</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">{profileData.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-4">
            {profileData.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {profileData.tagline}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-4 h-4" />
            <span>{profileData.location}</span>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-secondary" />
                <span className="text-3xl md:text-4xl font-bold gradient-text">
                  {profileData.stats.yearsExperience}+
                </span>
              </div>
              <span className="text-sm text-muted-foreground">Years Experience</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-3xl md:text-4xl font-bold gradient-text">
                  {profileData.stats.certifications}+
                </span>
              </div>
              <span className="text-sm text-muted-foreground">Certifications</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-3xl md:text-4xl font-bold gradient-text">
                  {profileData.stats.projectsCompleted}+
                </span>
              </div>
              <span className="text-sm text-muted-foreground">Projects Delivered</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="gradient-bg hover:opacity-90 transition-opacity glow-primary"
              asChild
            >
              <a href={`mailto:${profileData.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
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
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
