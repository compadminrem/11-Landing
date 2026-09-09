import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServiceDetailsSection } from "@/components/sections/ServiceDetailsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => <Layout><HeroSection /><BenefitsSection /><StatsSection /><ServicesSection /><ProcessSection /><AboutSection /><ServiceDetailsSection /><GallerySection /><BookingSection /><ReviewsSection /><GuaranteeSection /><FAQSection /><ContactSection /><FinalCTASection /></Layout>;
export default Index;
