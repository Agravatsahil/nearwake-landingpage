import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GlobalTravelersSection from "@/components/GlobalTravelersSection";
import StatsSection from "@/components/StatsSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <GlobalTravelersSection />
      <StatsSection />
      <AppPreviewSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
