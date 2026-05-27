import "./styles/Onboarding.css";

import OnboardingHero from "./components/onboarding/OnboardingHero";
import OnboardingStats from "./components/onboarding/OnboardingStats";
import OnboardingTimeline from "./components/onboarding/OnboardingTimeline";
import DocumentSummaryCard from "./components/onboarding/DocumentSummaryCard";

const Onboarding = () => {
  return (
    <div className="onboarding-page">

      <div className="onboarding-main-content">

        <OnboardingHero />

        <OnboardingStats />

        <div className="onboarding-bottom-layout">

          <OnboardingTimeline />

          <DocumentSummaryCard />

        </div>

      </div>

    </div>
  );
};

export default Onboarding;