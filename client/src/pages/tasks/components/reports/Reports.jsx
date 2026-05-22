import React from "react";
import { CalendarDays, Download, Share2, Filter } from "lucide-react";

import Dropdown from "../../../../components/common/Dropdown";

import "../../styles/reports/reports.css";

import KpiCard from "./KpiCard";
import SprintProgressChart from "./SprintProgressChart";
import TargetStatusCard from "./TargetStatusCard";
import MissedTargetsTable from "./MissedTargetsTable";
import MemberPerformanceTable from "./MemberPerformanceTable";

const kpiData = [
  {
    id: 1,
    title: "Sprint Contribution",
    badge: "+12%",
    badgeClass: "success",

    value: "82%",
    valueColor: "purple",
    description: "Based on target achievement",

    showRing: true,
    ringColor: "purple",
    ringText: "82%",

    footer: "↑ 12% vs last sprint",
    footerType: "positive",
  },

  {
    id: 2,
    title: "Target Achievement",

    badge: "85%",
    badgeClass: "green",

    value: "34",
    valueColor: "green",
    subValue: "/40",

    description: "Work items reached target status",

    analytics: "85% Achieved",

    trendColor: "#4CB782",
    trendData: [12, 18, 14, 24, 19, 30],
  },
  {
    id: 3,
    title: "Missed Targets",

    badge: "15%",
    badgeClass: "danger",

    value: "6",
    valueColor: "red",

    description: "Failed sprint commitments",

    analytics: "15% Missed",

    trendColor: "#F26B6B",
    trendData: [10, 16, 11, 24, 18, 30],
  },
  {
    id: 4,
    title: "Velocity",

    badge: "+8 SP",
    badgeClass: "blue",

    value: "48",
    valueColor: "blue",
    subValue: "SP",

    description: "Story points completed",

    analytics: "↑ 8 SP vs last sprint",

    trendColor: "#5B8DEF",
    trendData: [8, 12, 10, 18, 14, 26],
  },

  //   {
  //     id: 5,

  //     type: "health",

  //     title: "Sprint Health",

  //     healthTitle: "Healthy",

  //     description: "Sprint execution is on track",

  //     icon: "❤",
  //   },
];

const Reports = () => {
  return (
    <div className="reports-page">
      {/* HEADER */}
      <div className="reports-header">
        <div className="reports-title-section">
          <h1>Reports</h1>

          <p>
            Track sprint execution, target achievement and team contribution
          </p>
        </div>

        <div className="reports-actions">
          <button className="reports-action-btn">
            <Share2 size={16} />
            Share
          </button>

          <button className="reports-action-btn">
            <CalendarDays size={16} />
            Schedule Report
          </button>

          <button className="reports-export-btn">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="reports-filter-bar">
        <Dropdown
          placeholder="Sprint"
          value=""
          onChange={() => {}}
          options={[
            {
              label: "Sprint 3 (27 Apr - 11 May)",
              value: "sprint3",
            },
          ]}
        />

        <Dropdown
          placeholder="Team"
          value=""
          onChange={() => {}}
          options={[
            {
              label: "All Teams",
              value: "teams",
            },
          ]}
        />

        <Dropdown
          placeholder="Member"
          value=""
          onChange={() => {}}
          options={[
            {
              label: "All Members",
              value: "members",
            },
          ]}
        />

        <Dropdown
          placeholder="Status"
          value=""
          onChange={() => {}}
          options={[
            {
              label: "All Status",
              value: "status",
            },
          ]}
        />

        <button className="reports-date-btn">
          <CalendarDays size={16} />
          27 Apr - 11 May 2026
        </button>

        <button className="reports-more-filter-btn">
          <Filter size={16} />
          More Filters
        </button>
      </div>

      {/* KPI GRID */}
      <div className="reports-kpi-grid">
        {kpiData.map((item) => (
          <KpiCard key={item.id} data={item} />
        ))}
      </div>

      {/* CHART GRID */}
      <div className="reports-chart-grid">
        <SprintProgressChart />

        <MemberPerformanceTable />

        {/* <div className="reports-card reports-team-card" /> */}
      </div>

      {/* TABLE GRID */}
      <div className="reports-table-grid">
        <TargetStatusCard />

       <MissedTargetsTable />

        {/* <div className="reports-card reports-insight-card" /> */}
      </div>

      
      {/* <div className="reports-workflow-grid">
        <div className="reports-card workflow-card" />

        <div className="reports-card workflow-card" />

        <div className="reports-card workflow-card" />

        <div className="reports-card workflow-card" />

        <div className="reports-card workflow-card" />
      </div> */}
    </div>
  );
};

export default Reports;
