import Banner from "@/components/Banner/Banner";
import { landingPageData } from "./components/LandingPageData";
import AboutSection from "./components/AboutSection";
import OurClient from "./components/OurClient";
import WhyPartner from "./components/WhyPartner";
import AiSolution from "./components/AiSolution";
import Milestone from "./components/Milestone";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import SlidingTitle from "@/components/sliders/SlidingTitle";

export default function Home() {
  return (
    <main className="bg-background">
      <Banner {...landingPageData.bannerData} />
      <AboutSection {...landingPageData.aboutData} />
      <OurClient {...landingPageData.clientsData} />
      <SlidingTitle titles={landingPageData.title} />
      <WhyPartner {...landingPageData.whyPartnerData} />
      <AiSolution {...landingPageData.aiSolutionData} />
      <Milestone {...landingPageData.milestoneData} />
      <OurTeam {...landingPageData.teamData} />
      <Testimonials {...landingPageData.testimonialData} />
    </main>
  );
}
