import {
  HeroSection,
  FeaturesSection,
  DetailedFeaturesSection,
  UseCasesSection,
  HowItWorksSection,
  FinalCTASection,
} from '../components/sections';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <DetailedFeaturesSection />
      <UseCasesSection />
      <HowItWorksSection />
      <FinalCTASection />
    </main>
  );
}
