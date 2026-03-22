import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import GradientMesh from "@/components/GradientMesh";
import CSSParticles from "@/components/CSSParticles";
import CyberNav from "@/components/CyberNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import CyberFooter from "@/components/CyberFooter";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  if (loading) return <LoadingScreen onComplete={handleLoadComplete} />;

  return (
    <div className="relative min-h-screen bg-background">
      <GradientMesh />
      <CSSParticles />
      <CyberNav />
      <div className="relative z-10">
        <HeroSection />
        <ParallaxSection offset={40}>
          <AboutSection />
        </ParallaxSection>
        <ParallaxSection offset={45}>
          <ProjectsSection />
        </ParallaxSection>
        <ParallaxSection offset={40}>
          <ExperienceSection />
        </ParallaxSection>
        <ParallaxSection offset={35}>
          <SkillsSection />
        </ParallaxSection>
        <ParallaxSection offset={35}>
          <ContactSection />
        </ParallaxSection>
        <CyberFooter />
      </div>
    </div>
  );
};

export default Index;
