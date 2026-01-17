import { useState } from "react";
import HeroSection from "@/components/portfolio/HeroSection";
import TabNavigation, { TabId } from "@/components/portfolio/TabNavigation";
import SummarySection from "@/components/portfolio/SummarySection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("summary");

  const renderTabContent = () => {
    switch (activeTab) {
      case "summary":
        return <SummarySection />;
      case "experience":
        return <ExperienceSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "education":
        return <EducationSection />;
      case "certifications":
        return <CertificationsSection />;
      default:
        return <SummarySection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="min-h-[60vh]">
        {renderTabContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
