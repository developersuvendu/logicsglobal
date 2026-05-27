import { CircleCheckBig, Clock3, FileWarning, TimerReset } from "lucide-react";

const OnboardingHero = () => {
  return (
    <div className="onboarding-hero-card">
      <div className="onboarding-hero-top">
        <div>
          <h1 className="onboarding-hero-title">
            Welcome to Logics Global, Jigenesh! 👋
          </h1>

          <p className="onboarding-hero-description">
            We're excited to have you with us. Complete your onboarding journey
            to get fully set up and ready to go.
          </p>
        </div>
      </div>

      <div className="onboarding-progress-stats">
        <div className="onboarding-progress-stat-card">
          <div className="progress-stat-icon progress-icon-primary">
            <Clock3 size={16} />
          </div>

          <div>
            <h3>50%</h3>
            <p>Onboarding Progress</p>
          </div>
        </div>

        <div className="onboarding-progress-stat-card">
          <div className="progress-stat-icon progress-icon-success">
            <CircleCheckBig size={16} />
          </div>

          <div>
            <h3>3 of 6</h3>
            <p>Tasks Completed</p>
          </div>
        </div>

        <div className="onboarding-progress-stat-card">
          <div className="progress-stat-icon progress-icon-warning">
            <FileWarning size={16} />
          </div>

          <div>
            <h3>2</h3>
            <p>Pending Documents</p>
          </div>
        </div>

        <div className="onboarding-progress-stat-card">
          <div className="progress-stat-icon progress-icon-danger">
            <TimerReset size={16} />
          </div>

          <div>
            <h3>12 Days</h3>
            <p>Time Remaining</p>
          </div>
        </div>
      </div>

      <div className="onboarding-progress-bar-wrapper">
        <div className="onboarding-progress-bar-track">
          <div className="onboarding-progress-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingHero;
