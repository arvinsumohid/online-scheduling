import "../../styles/style.scss";
import HeroSection from "@/components/homepage/HeroSection";
import ServiceSection from "@/components/homepage/ServiceSection";
import FeatureSection from "@/components/homepage/FeatureSection";
import OurTeam from "@/components/homepage/OurTeam";
import ContactSection from "@/components/homepage/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <FeatureSection />
      <OurTeam />
      <ContactSection />
      <Footer />
    </>
  );
}
