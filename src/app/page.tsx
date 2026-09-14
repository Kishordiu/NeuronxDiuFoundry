import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Philosophy from "@/components/Philosophy";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import RulesAndFAQ from "@/components/RulesAndFAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-deep-charcoal min-h-screen">
      <Navigation />
      <Hero />
      <Philosophy />
      <Tracks />
      <Timeline />
      <Prizes />
      <RulesAndFAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
