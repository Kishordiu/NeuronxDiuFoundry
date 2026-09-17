import Hero from "@/components/Hero";
import EventFacts from "@/components/EventFacts";
import Navigation from "@/components/Navigation";
import Philosophy from "@/components/Philosophy";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import PartnersAndJudge from "@/components/PartnersAndJudge";
import RulesAndFAQ from "@/components/RulesAndFAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-deep-charcoal min-h-screen">
      <Navigation />
      <Hero />
      <EventFacts />
      <Philosophy />
      <Tracks />
      <Timeline />
      <Prizes />
      <PartnersAndJudge />
      <RulesAndFAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
