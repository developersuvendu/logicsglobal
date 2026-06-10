import React from "react";
import BannerCarousel from "../components/carousel/BannerCarousel";

import PerformaceChart from "../components/charts/PerformanceOverview";
import "../styles/Dashboard.css";
import Banner from "../assets/announcement.png";
import ProfileOverview from "../assets/profile_image.webp";
// import BannerIllustration from '../assets/Cross-platform software-rafiki.svg';
// import BannerIllustration from '../assets/Editing-body-text-rafiki.svg';
// import BannerIllustration from '../assets/undraw_online-survey_xq2g.svg';
// import BannerIllustration from '../assets/undraw_work-time_1ogn.svg';
// import BannerIllustration from '../assets/table.svg';

// import reimbursement from "../assets/reimbursement.png";
import RecentFlight from "../assets/recent-flight.svg";
import BannerIllustration from "../assets/human.svg";
import RedBannerIllustration from "../assets/human-red.svg";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

import {
  Star,
  ArrowUp,
  X,
  CalendarDays,
  Video,
  Cake,
  BadgeCheck,
  ShieldAlert,
} from "lucide-react";
import Calender25 from "../assets/calender-25.svg";
import Computer from "../assets/computer.svg";
import Wifi from "../assets/wifi.svg";
import Gym from "../assets/gym.svg";
import Flight from "../assets/flight.svg";
import { LeaveCard } from "../components/LeaveCards/LeaveCard";

export default class Dashboard extends React.Component {
  render() {
    const attendanceChartOptions = {
      chart: {
        type: "areaspline",
        backgroundColor: "transparent",
        height: 280,
        spacing: [10, 10, 10, 10],
      },

      title: {
        text: null,
      },

      credits: {
        enabled: false,
      },

      legend: {
        enabled: false,
      },

      xAxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

        minPadding: 0,
        maxPadding: 0,

        startOnTick: false,
        endOnTick: false,

        lineColor: "#E2E8F0",

        tickColor: "transparent",

        tickmarkPlacement: "on",

        labels: {
          style: {
            color: "#64748B",
            fontSize: "13px",
            fontWeight: "500",
          },
        },
      },

      yAxis: {
        title: {
          text: null,
        },
        lineWidth: 0,
        gridLineColor: "rgba(148,163,184,0.08)",

        labels: {
          style: {
            color: "#94A3B8",
            fontSize: "12px",
          },
        },
      },

      tooltip: {
        backgroundColor: "#fff",

        borderColor: "#FBCFE8",

        borderRadius: 10,

        shadow: false,

        formatter: function () {
          return `
        <b>${this.x}</b><br/>
        Working Hours: <b>${this.y}h</b>
      `;
        },
      },

      plotOptions: {
        areaspline: {
          fillOpacity: 0.18,

          marker: {
            enabled: true,
            radius: 5,
            fillColor: "#F43F5E",
            lineWidth: 3,
            lineColor: "#fff",
          },

          lineWidth: 3,
          states: {
            hover: {
              lineWidthPlus: 0,
            },
          },
        },

        series: {
          animation: {
            duration: 1200,
          },
          pointPlacement: 0,
          groupPadding: 0,
          pointPadding: 0,
        },
      },

      series: [
        {
          name: "Hours",

          data: [8.2, 7.8, 9.1, 8.9, 7.4, 5.2, 6.1],

          pointPlacement: "on",

          color: "#F43F5E",

          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },

            stops: [
              [0, "rgba(254,236,238,0.95)"],
              [0.4, "rgba(254,236,238,0.5)"],
              [1, "rgba(254,236,238,0.02)"],
            ],
          },
        },
      ],
    };

    const leaveChartOptions = {
      chart: {
        type: "column",
        backgroundColor: "transparent",
        height: 320,
        spacing: [10, 10, 0, 10],

        style: {
          overflow: "visible",
        },
      },

      title: {
        text: null,
      },

      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },

      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],

        lineColor: "#E2E8F0",

        tickColor: "transparent",

        labels: {
          style: {
            color: "#64748B",
            fontSize: "12px",
            fontWeight: "500",
          },
        },
      },

      yAxis: {
        min: 0,
        lineWidth: 0,
        allowDecimals: false,

        title: {
          text: null,
        },

        gridLineColor: "rgba(148,163,184,0.08)",

        labels: {
          style: {
            color: "#94A3B8",
            fontSize: "12px",
          },
        },

        stackLabels: {
          enabled: true,

          style: {
            fontWeight: "600",
            color: "#0F172A",
          },
        },
      },

      tooltip: {
        shared: true,

        useHTML: true,

        backgroundColor: "rgba(255,255,255,0.96)",

        borderColor: "#F3E8FF",

        borderRadius: 16,

        borderWidth: 1,

        shadow: false,

        style: {
          zIndex: 9999,
        },

        formatter: function () {
          return `
      <div style="
        padding:14px 14px;
        min-width:180px;
        backdrop-filter: blur(10px);
      ">

        <div style="
          font-size:18px;
          font-weight:700;
          margin-bottom:14px;
          color:#0F172A;
        ">
          ${this.points[0].key} 2026
        </div>

        ${this.points
          .map(
            (point) => `
              <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-bottom:10px;
                gap:24px;
              ">

                <div style="
                  display:flex;
                  align-items:center;
                  gap:8px;
                  color:#475569;
                  font-size:14px;
                  font-weight:500;
                ">

                  <span style="
                    width:10px;
                    height:10px;
                    border-radius:50%;
                    background:${point.color};
                    display:inline-block;
                  "></span>

                  ${point.series.name}

                </div>

                <span style="
                  font-weight:700;
                  color:#0F172A;
                ">
                  ${point.y}
                </span>

              </div>
            `,
          )
          .join("")}

        <div style="
          margin-top:14px;
          padding-top:12px;
          border-top:1px solid rgba(148,163,184,0.12);

          display:flex;
          justify-content:space-between;

          font-size:15px;
          font-weight:700;

          color:#0F172A;
        ">

          <span>Total</span>

          <span>
            ${this.points.reduce((sum, point) => sum + point.y, 0)}
          </span>

        </div>

      </div>
    `;
        },
      },

      plotOptions: {
        column: {
          stacking: "normal",

          borderRadiusTopLeft: 6,

          borderRadiusTopRight: 6,

          borderWidth: 0,

          pointPadding: 0.18,

          groupPadding: 0.18,

          grouping: true,

          states: {
            inactive: {
              opacity: 0.25,
            },

            hover: {
              brightness: -0.18,

              halo: {
                size: 0,
              },
            },
          },
        },

        series: {
          animation: {
            duration: 1400,
            easing: "easeOutQuart",
          },

          stickyTracking: true,
        },
      },
      series: [
        {
          name: "Casual",
          color: "rgb(221, 201, 255)",
          shadow: {
            color: "rgba(221, 201, 255, 0.35)",
            width: 8,
          },
          data: [1, 2, 1, 0, 2, 1, 3, 1, 2, 1, 0, 2],
        },

        {
          name: "Sick",
          color: "rgb(179, 206, 250)",
          shadow: {
            color: "rgba(221, 201, 255, 0.35)",
            width: 8,
          },
          data: [0, 1, 2, 1, 0, 1, 1, 0, 2, 1, 1, 0],
        },

        {
          name: "Earned",
          color: "rgb(193, 255, 189)",
          shadow: {
            color: "rgba(221, 201, 255, 0.35)",
            width: 8,
          },
          data: [2, 1, 3, 2, 2, 1, 2, 3, 1, 2, 2, 1],
        },

        {
          name: "Comp Off",
          color: "rgb(255, 234, 171)",
          shadow: {
            color: "rgba(221, 201, 255, 0.35)",
            width: 8,
          },
          data: [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
        },
      ],
    };
    return (
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <div className="dashboard-main-content">
            <div className="banner-wrapper">
              {/* <img src={Banner} alt="Banner" className="banner-image" /> */}
              <div className="announcement-div">
                <h1 className="banner-heading-text">
                  Welcome Back, Suvendu Mohanta!✋
                </h1>
                <p className="banner-description-text">
                  Track performance, manage leaves, handle tasks, and access HR
                  documents—seamlessly from a single dashboard.
                </p>
                <img
                  src={RedBannerIllustration}
                  alt="Banner Illustration"
                  className="banner-illustration"
                />
              </div>
            </div>
            <LeaveCard />
            <div className="leave-card-wrapper">
              {/* <div className="leave-card">
              <h1 className="leave-card-heading">Sick Leave</h1>
              <p className="leave-card-text">2/6</p>
            </div>
            <div className="leave-card">
              <h1 className="leave-card-heading">Casual Leave</h1>
              <p className="leave-card-text">2/6</p>
            </div>
            <div className="leave-card">
              <h1 className="leave-card-heading">Earned Leave</h1>
              <p className="leave-card-text">2/6</p>
            </div>
            <div className="leave-card">
              <h1 className="leave-card-heading">Work From Home</h1>
              <p className="leave-card-text">2/6</p>
            </div> */}
            </div>
            {/* Todo's Section */}
            <div className="todo-wrapper">
              <div className="todo-heading-text-wrapper">
                <h1 className="heading-text todo-heading-text">Your to-dos</h1>
                <span className="todo-notification-count">1</span>
              </div>
              <div className="todo-message-card">
                <p className="todo-message">
                  Your onboarding process is pending. Please submit the required
                  documents.
                </p>
                <X className="todo-card-close-icon" />
              </div>
            </div>
            {/* Quick Links Section */}
            <div className="quick-link-wrapper">
              <h1 className="heading-text quick-link-heading-text">
                Quick Links
              </h1>
              <div className="quick-link-row">
                <div className="quick-link-columns">
                  <img
                    src={Calender25}
                    alt="Calender"
                    className="quick-link-icon"
                  />
                  <p className="quick-link-text">Apply Leave</p>
                </div>
                <div className="quick-link-columns">
                  <img
                    src={Computer}
                    alt="Computer"
                    className="quick-link-icon"
                  />
                  <p className="quick-link-text">Apply WFH</p>
                </div>
                <div className="quick-link-columns">
                  <img src={Wifi} alt="Wifi" className="quick-link-icon" />
                  <p className="quick-link-text">Internet Bill</p>
                </div>
                <div className="quick-link-columns gym-bill">
                  <img src={Gym} alt="Gym" className="quick-link-icon" />
                  <p className="quick-link-text">Gym Bill</p>
                </div>
                <div className="quick-link-columns">
                  <img src={Flight} alt="Flight" className="quick-link-icon" />
                  <p className="quick-link-text">Apply Flight</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-overview-wrapper">
            <div className="attendance-overview-card">
              <div className="attendance-header">
                <div>
                  <p className="attendance-label">Today's Attendance</p>

                  <h2 className="attendance-time">09:12 AM</h2>

                  <p className="attendance-subtext">Check-in Time</p>
                </div>

                <div className="checkin-badge">Checked In</div>
              </div>

              <div className="attendance-progress-wrapper">
                <div className="attendance-circle">
                  <svg className="progress-ring" width="160" height="160">
                    <defs>
                      <linearGradient
                        id="attendanceGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#FB7185" />

                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="progress-ring-bg"
                      stroke="#E5E7EB"
                      strokeWidth="10"
                      fill="transparent"
                      r="65"
                      cx="80"
                      cy="80"
                    />

                    <circle
                      className="progress-ring-progress"
                      stroke="url(#attendanceGradient)"
                      strokeWidth="10"
                      fill="transparent"
                      r="65"
                      cx="80"
                      cy="80"
                    />
                  </svg>

                  <div className="attendance-center-text">
                    <h2>6h 12m</h2>
                    <p>Work Duration</p>
                  </div>
                </div>
              </div>

              <div className="attendance-footer">
                <div className="progress-label-row">
                  <span>Working Progress</span>
                  <span>62%</span>
                </div>

                <div className="progress-bar">
                  <div className="attendance-progress-fill"></div>
                </div>

                <div className="break-time-row">
                  <span className="break-time-label">Break Time</span>
                  <span>
                    <span className="break-time-value">00:48m</span> / 01:00h
                  </span>
                </div>
              </div>
            </div>
            <div className="attendance-overview-card">
              <div className="upcoming-events-wrapper">
                <div className="upcoming-events-header">
                  <h2 className="upcoming-events-heading">Upcoming Events</h2>

                  <span className="view-calendar-text">View Calendar →</span>
                </div>

                {/* EVENT CARD */}
                <div className="events-column">
                  <div className="modern-event-card">
                    <div className="event-icon-wrapper blue">
                      <Video size={22} />
                    </div>

                    <div className="event-content">
                      <h3>Sprint Planning</h3>

                      <p>Mar 28, 2026 • 10:20 AM</p>
                    </div>
                  </div>

                  {/* EVENT CARD */}
                  <div className="modern-event-card">
                    <div className="event-icon-wrapper pink">
                      <Cake size={22} />
                    </div>

                    <div className="event-content">
                      <h3>Rakesh’s Birthday Celebration</h3>

                      <p>Mar 28, 2026 • 03:20 PM</p>
                    </div>
                  </div>

                  {/* EVENT CARD */}
                  <div className="modern-event-card">
                    <div className="event-icon-wrapper orange">
                      <ShieldAlert size={22} />
                    </div>

                    <div className="event-content">
                      <h3>HR Policy Update</h3>

                      <p>Mar 30, 2026 • 11:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-bottom-section">


          {/* <div className="analytics-card">
            <div className="analytics-card-header">
              <div>
                <h2 className="analytics-heading">Attendance Insights</h2>
                <p className="analytics-subtitle">Last 7 Days Working Hours</p>
              </div>
              <div className="analytics-badge">+12%</div>
            </div>
            <div className="analytics-chart-wrapper">
              <HighchartsReact
                highcharts={Highcharts}
                options={attendanceChartOptions}
              />
            </div>
            <div className="analytics-stats-row">
              <div className="analytics-stat-card">
                <p className="analytics-stat-label">Avg Hours</p>

                <h3 className="analytics-stat-value">8.2h</h3>
              </div>

              <div className="analytics-stat-card">
                <p className="analytics-stat-label">Best Day</p>

                <h3 className="analytics-stat-value">Thursday</h3>
              </div>

              <div className="analytics-stat-card">
                <p className="analytics-stat-label">Attendance</p>

                <h3 className="analytics-stat-value">96%</h3>
              </div>
            </div>
          </div> */}

          {/* LEAVE ANALYTICS */}

          {/* <div className="analytics-card">
            <div className="analytics-card-header">
              <div>
                <h2 className="analytics-heading">Leave Analytics</h2>
                <p className="analytics-subtitle">
                  Monthly Leave Trends & Usage
                </p>
              </div>
              <div className="analytics-badge leave-badge">2026</div>
            </div>
            <div className="analytics-chart-wrapper">
              <HighchartsReact
                highcharts={Highcharts}
                options={leaveChartOptions}
              />
            </div>
            <div className="leave-legends-row">
              <div className="leave-legend-item">
                <span className="legend-dot" style={{ background: "#FB7185" }}></span>
                <span>Casual Leave</span>
              </div>
              <div className="leave-legend-item">
                <span className="legend-dot" style={{ background: "#A78BFA" }}></span>
                <span>Sick Leave</span>
              </div>
              <div className="leave-legend-item">
                <span className="legend-dot" style={{ background: "#34D399" }}></span>
                <span>Earned Leave</span>
              </div>
              <div className="leave-legend-item">
                <span className="legend-dot" style={{ background: "#FBBF24" }}></span>
                <span>Comp Off</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
