import React from "react";
import Notification from "../../assets/notification.png";
import Profile from "../../assets/profile_image.webp";
import Search from "../../assets/search.png";
import "../../styles/Header.css";
import { Bell, ChevronDown } from 'lucide-react';
const Header = () => {
  return (
    <div className="flex justify-space-between align-center header-wrapper">
      <div className="searchbar-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search h-4 w-4 search-icon"
          aria-hidden="true"
        >
          <path d="m21 21-4.34-4.34"></path>
          <circle cx="11" cy="11" r="8"></circle>
        </svg>
        <input type="text" className="searchbar" maxLength={50} />
        <span className="search-placeholder-text">
          Search leave, payslip, reimbursement
        </span>
      </div>
      <div className="flex align-center">
        <div className="notification-wrapper flex align-center">
          <Bell className="notification" />
          <span className="notification-count">3</span>
        </div>
        <div className="profile-wrapper flex align-center">
          <div className="profile-info">
            <p className="text user-name">Suvendu Mohanta</p>
            <p className="text text-center user-role">UI/UX Developer</p>
          </div>
           <img src={Profile} alt="profile" className="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
