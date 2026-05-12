import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SocialFeedSection } from "@/components/home/SocialFeedSection";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Lockwood's Ranch | Home",
    description:
      "Your Frontier, Refined. ATV rentals, horse rides, weddings, and events at Lockwood's Ranch.",
  };
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <SocialFeedSection />
      <NewsletterSignup />
    </div>
  );
}
