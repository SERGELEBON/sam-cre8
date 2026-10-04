import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton, BackToTop } from "@/components/site/floating";
import { HeroSection, ServiceTiles, IntroBox } from "@/components/site/sections-hero";
import {
  ExpertiseSection,
  ProjectsBanner,
  CoverflowCarousel,
} from "@/components/site/sections-expertise";
import {
  WhoWeAre,
  ValuesSection,
  NumbersSection,
  ClientsWall,
} from "@/components/site/sections-about";
import { QuoteForm, ServicesDetail } from "@/components/site/sections-quote";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* 1. Hero mosaic */}
        <HeroSection />
        {/* 2. Service tiles band (checkerboard) */}
        <ServiceTiles />
        {/* 3. Intro box */}
        <IntroBox />
        {/* 4. Our Expertise carousel */}
        <ExpertiseSection />
        {/* 5. Our Projects banner */}
        <ProjectsBanner />
        {/* 6. Projects coverflow 3D carousel */}
        <CoverflowCarousel />
        {/* 7. Who We Are */}
        <WhoWeAre />
        {/* 8. Our Values */}
        <ValuesSection />
        {/* 9. Our Numbers */}
        <NumbersSection />
        {/* 10. Clients logo wall */}
        <ClientsWall />
        {/* Services detail blocks (inner-page content on one page) */}
        <ServicesDetail />
        {/* 11. Quote form */}
        <QuoteForm />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating: WhatsApp + back-to-top */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
