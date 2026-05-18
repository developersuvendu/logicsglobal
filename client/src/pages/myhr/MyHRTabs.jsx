import React from 'react'
import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Leave", to: "/myhr/leave" },
  { label: "Documents", to: "/myhr/documents" },
  { label: "Onboarding", to: "/myhr/onboarding" },
  { label: "Flight Tickets", to: "/myhr/flight-tickets" },
  { label: "Holiday List", to: "/myhr/holidays" },
];

const MyHRTabs = () => {
  return (
    <div className="my-hr-tabs-container">
      <nav className="flex gap-1">
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            className={({ isActive }) => `my-hr-tab-link ${isActive ? "active" : ""}`}
          >
            {t.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default MyHRTabs
