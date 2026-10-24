import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { EditorPreview } from "@/components/landing/EditorPreview";
import { PricingSection } from "@/components/landing/PricingSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <HeroSection />
      <FeaturesSection />
      <EditorPreview />
      <PricingSection />
    </main>
  );
}
