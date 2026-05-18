import React, { useState } from "react";

import {
  Activity,
  LogOut,
  ChevronRight,
  ChevronLeft,
  UserCheck,
  Briefcase,
  TvMinimalPlay,
  CircleCheckBig,
  LaptopMinimalCheck,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../../assets/logics_global_logo.png";

import LogicsSocial from "../../assets/logics-social.png";

import "../../styles/Navbar.css";

const navItems = [
  {
    icon: Activity,
    label: "Dashboard",
    path: "/dashboard",
  },

  {
    icon: Briefcase,
    label: "My HR",
    path: "/myhr",
  },

  {
    icon: UserCheck,
    label: "Attendance",
    path: "/attendance",
  },

  {
    icon: LaptopMinimalCheck,
    label: "Inventory",
    path: "/inventory",
  },

  {
    icon: TvMinimalPlay,
    label: "Social",
    path: "/social",
  },

  {
    icon: CircleCheckBig,
    label: "Task",
    path: "/task",
  },
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login");
  };

  return (
    <div className={`left-col ${collapsed ? "collapsed" : ""}`}>
      {/* Sidebar Toggle */}

      <div
        className="sidebar__toggle"
        onClick={() => setCollapsed((prev) => !prev)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
      </div>

      {/* Logo */}

      <div className="logo_wrapper">
        {collapsed ? (
          <img src={LogicsSocial} alt="logo" className="social-logo" />
        ) : (
          <img src={Logo} alt="logo" className="logo" />
        )}
      </div>

      {/* Sidebar */}

      <aside className="sidebar">
        <nav className="nav">
          {navItems.map(({ icon, label, path }) => {
            const IconComponent = icon;

            return (
              <NavLink
                to={path}
                key={label}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                <IconComponent className="nav-icon" />

                {!collapsed && <span>{label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Logout */}

        <div className="nav-item logout-button" onClick={handleLogout}>
          <LogOut className="nav-icon" />

          {!collapsed && <span>Logout</span>}
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
