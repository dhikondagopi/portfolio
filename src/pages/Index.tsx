import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import GradientMesh from "@/components/GradientMesh";
import CyberNav from "@/components/CyberNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import InternshipsSection from "@/components/InternshipsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import CyberFooter from "@/components/CyberFooter";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={handleLoadComplete} />;
  }

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <GradientMesh />
      <CyberNav />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <InternshipsSection />
        <SkillsSection />
        <ContactSection />
        <CyberFooter />
      </main>
    </div>
  );
};

export default Index;