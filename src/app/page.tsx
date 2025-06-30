
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import StatsSection from "../components/statsSection";
import InsightsSection from "../components/insightsSection";
import PortfolioSection from "../components/portfolioSection";
import FeaturesSection from "../components/featuresSection";
import ReviewSection from "../components/reviewSection";
import FAQSection from "../components/fAQSection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <StatsSection />
      <InsightsSection />
      <PortfolioSection />
      <FeaturesSection />
      <ReviewSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
