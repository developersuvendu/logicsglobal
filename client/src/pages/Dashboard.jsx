import React from 'react';
import BannerCarousel from '../components/carousel/BannerCarousel';

import PerformaceChart from '../components/charts/PerformanceOverview';
import '../styles/Dashboard.css';
import Banner from '../assets/announcement.png';
import ProfileOverview from '../assets/profile_image.webp';
// import BannerIllustration from '../assets/Cross-platform software-rafiki.svg';
// import BannerIllustration from '../assets/Editing-body-text-rafiki.svg';
// import BannerIllustration from '../assets/undraw_online-survey_xq2g.svg';
// import BannerIllustration from '../assets/undraw_work-time_1ogn.svg';
// import BannerIllustration from '../assets/table.svg';

import reimbursement from '../assets/reimbursement.png';
import RecentFlight from '../assets/recent-flight.svg';
import BannerIllustration from '../assets/human.svg';
import RedBannerIllustration from '../assets/human-red.svg';

import { Star,ArrowUp, X, CalendarDays, Video,Cake } from 'lucide-react';
import Calender25 from '../assets/calender-25.svg';
import Computer from '../assets/computer.svg';
import Wifi from '../assets/wifi.svg';
import Gym from '../assets/gym.svg';
import Flight from '../assets/flight.svg';
import { LeaveCard } from '../components/LeaveCards/LeaveCard';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-wrapper">
        <div className="dashboard">
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
          <LeaveCard/>
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
          <div className="recent-activity-wrapper">
            <div className="recent-activity-heading-wrapper">
              <h1 className="heading-text recent-activity-heading-text">
                Recent Activity
              </h1>
            </div>
            <div className="recent-activity-card-wrapper">
              <div className="recent-activity-card">
                <div className="recent-activity-card-row">
                  <div className="recent-activity-card-left-col">
                    <div className="recent-activity-inner-row">
                      <div className="recent-activity-inner-left-col">
                        <div className="icon-background-wrapper">
                          <CalendarDays strokeWidth={1.5} className="recent-activity-profile-image" />
                        </div>
                      </div>
                      <div className="recent-activity-inner-right-col">
                        <h3 className="recent-activity-card-heading">
                          Applied for Casual Leave
                        </h3>
                        <p className="recent-activity-card-time">
                          Mar 28–2026 · Casual Leave · 2 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="recent-activity-card-right-col">
                    <div className="status-button">
                      <span className="status-button-text">Approved</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-activity-card">
                <div className="recent-activity-card-row">
                  <div className="recent-activity-card-left-col">
                    <div className="recent-activity-inner-row">
                      <div className="recent-activity-inner-left-col">
                        <div className="icon-background-wrapper">
                          {/* <CalendarDays className="recent-activity-profile-image" /> */}
                          <img
                            src={reimbursement}
                            alt="Reimbursement"
                            className="recent-activity-profile-image"
                          />
                        </div>
                      </div>
                      <div className="recent-activity-inner-right-col">
                        <h3 className="recent-activity-card-heading">
                          Reimbursement Request
                        </h3>
                        <p className="recent-activity-card-time">
                          Mar 01–2026 · Gym Bill · ₹2,400
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="recent-activity-card-right-col">
                    <div className="status-button pending-status">
                      <span className="status-button-text">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-activity-card">
                <div className="recent-activity-card-row">
                  <div className="recent-activity-card-left-col">
                    <div className="recent-activity-inner-row">
                      <div className="recent-activity-inner-left-col">
                        <div className="icon-background-wrapper">
                          {/* <CalendarDays className="recent-activity-profile-image" /> */}
                          <img
                            src={Flight}
                            alt="Recent Flight"
                            className="recent-activity-profile-image"
                          />
                        </div>
                      </div>
                      <div className="recent-activity-inner-right-col">
                        <h3 className="recent-activity-card-heading">
                          Flight Booked Request
                        </h3>
                        <p className="recent-activity-card-time">
                          BLR → DEL · Apr 02-2026 · Flight Booking · 11:26 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="recent-activity-card-right-col">
                    <div className="status-button">
                      <span className="status-button-text">Approved</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-activity-card">
                <div className="recent-activity-card-row">
                  <div className="recent-activity-card-left-col">
                    <div className="recent-activity-inner-row">
                      <div className="recent-activity-inner-left-col">
                        <div className="icon-background-wrapper">
                          <CalendarDays strokeWidth={1.5} className="recent-activity-profile-image" />
                        </div>
                      </div>
                      <div className="recent-activity-inner-right-col">
                        <h3 className="recent-activity-card-heading">
                          Applied for Casual Leave
                        </h3>
                        <p className="recent-activity-card-time">
                          Mar 28–2026 · Casual Leave · 2 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="recent-activity-card-right-col">
                    <div className="status-button">
                      <span className="status-button-text">Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-overview-wrapper">
          <div className="profile-overview">
            {/* <h2 className="heading-text quick-link-heading-text">Profile Overview</h2> */}
              <div className="profile-header">

              </div>
              <div className="profile-image-wrapper">
<img src={ProfileOverview} alt="" />
              </div>
              <div className='flex align-center' style={{"display":"flex","marginBottom":"3px"}}>
                <div><h2 className="heading-text quick-link-heading-text" style={{"marginBottom":"0px"}}>Suvendu Mohanta</h2></div>
                <div><p className="designation-text">Active</p></div>
              </div>
              <div>
                <p className='text-muted-foreground'>HR Manager</p>
                <p className='text-muted-foreground'>+91 9078322645</p>
              </div>
          </div>
          <div className="upcoming-events-wrapper">
            <h2 className="heading-text upcoming-events-heading-text quick-link-heading-text">Upcoming Events</h2>
            <div className="upcoming-event-card-wrapper">
              <div className="upcoming-event-card">
                <div className="upcoming-event-left-col">
                  <div className="icon-background-wrapper">
                          {/* <CalendarDays className="recent-activity-profile-image" /> */}
                          <Video strokeWidth={1.5} className="recent-activity-profile-image" />
                  </div>
                </div>
                <div className="upcoming-event-right-col">
                  <h3 className="recent-activity-card-heading">
                          Scrum Meeting
                        </h3>
                        <p className="recent-activity-card-time">
                          Mar 28–2026 · 10:20 AM
                        </p>
                </div>
              </div>
              <div className="upcoming-event-card">
                <div className="upcoming-event-left-col">
                  <div className="icon-background-wrapper">
                          {/* <CalendarDays className="recent-activity-profile-image" /> */}
                          <Video strokeWidth={1.5} className="recent-activity-profile-image" />
                  </div>
                </div>
                <div className="upcoming-event-right-col">
                  <h3 className="recent-activity-card-heading">
                          Sprint Planning
                        </h3>
                        <p className="recent-activity-card-time">
                         Mar 28–2026 · 10:20 AM
                        </p>
                </div>
              </div>
              <div className="upcoming-event-card">
                <div className="upcoming-event-left-col">
                  <div className="icon-background-wrapper">
                          {/* <CalendarDays className="recent-activity-profile-image" /> */}
                          <Cake strokeWidth={1.5} className="recent-activity-profile-image" />
                  </div>
                </div>
                <div className="upcoming-event-right-col">
                  <h3 className="recent-activity-card-heading">
                          Rakesh’s Birthday Celebration
                        </h3>
                        <p className="recent-activity-card-time">
                        Mar 28–2026 · 03:20 PM
                        </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}