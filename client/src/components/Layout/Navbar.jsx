import React from 'react'
import { useState } from 'react'
import { Bus,MapPinned, Activity, Users, ClipboardList, LogOut, ChevronRight, ChevronLeft, UserCheck, Briefcase, MonitorSmartphone, TvMinimalPlay, CircleCheckBig, LaptopMinimalCheck } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logics_global_logo.png';
import LogicsSocial from '../../assets/logics-social.png';
import '../../styles/Navbar.css';












const navItems = [
  // { icon: Activity, label: 'Dashboard', path: "/dashboard" },
  // { icon: Bus, label: 'Manage Buses', path: "/manage-buses" },
  // { icon: MapPinned, label: 'Track Bus', path: "/track-bus" },
  // { icon: Users, label: 'Boarded Users', path: "/boarded-users" },
  // { icon: ClipboardList, label: 'Manage Bookings', path: "/manage-bookings" },
  // { icon: Bus, label: 'Manage Rental', path: "/manage-rental" },
  { icon: Activity, label: 'Dashboard', path: "/dashboard" },
  { icon: Briefcase, label: 'My HR', path: "/my-hr", child:[
    { icon: Briefcase, label: 'Leave Management', path: "/my-hr/employee-directory" },
    { icon: Briefcase, label: 'Documents', path: "/my-hr/leave-management" },
    { icon: Briefcase, label: 'Onboarding', path: "/my-hr/onboarding" },
    { icon: Briefcase, label: 'Reimbursements', path: "/my-hr/reimbursements" },
    { icon: Briefcase, label: 'Flight Tickets', path: "/my-hr/flight-tickets" },
  ] },
  { icon: UserCheck, label: 'Attendance', path: "/attendance" },
  { icon: LaptopMinimalCheck, label: 'Inventory', path: "/inventory" },
  { icon: TvMinimalPlay, label: 'Social', path: "/social" },
  { icon: CircleCheckBig, label: 'Task', path: "/task" },
];

const Navbar = () => {
      const [count, setCount] = useState(0)
      const [collapsed, setCollapsed] = useState(false)
      const [active, setActive] = useState('Dashboard')



  return (
      <div className={`left-col ${collapsed ? 'collapsed' : ''}`}>
          <div className='sidebar__toggle' onClick={() => setCollapsed(prev => !prev)} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </div>
          <div className="logo_wrapper">
              {collapsed ? <img src={LogicsSocial} alt="logo" className="social-logo" /> : <img src={Logo} alt="logo" className="logo" />}
          </div>
          <aside className="sidebar">
              <nav className="nav">
                  {navItems.map(({ icon, label, path, child }) => {
                      const IconComponent = icon;
                      return (
                        //   <a className={`nav-item ${active === label ? 'active' : ''}`} href="#" key={label} onClick={() => setActive(label)}>
                        //       <IconComponent className="nav-icon" />{!collapsed && <span>{label}</span>}
                        //   </a>

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
                  {/* <a className='nav-item active' href="#"><Activity className="nav-icon" /> <span>Dashboard</span></a>
            <a className='nav-item' href="#"><Bus className="nav-icon" /> <span>Manage Buses</span></a>
            <a className='nav-item' href="#"><MapPinned className="nav-icon" /> <span>Track Bus</span></a>
            <a className='nav-item' href="#"><Users className="nav-icon" /> <span>Boarded Users</span></a>
            <a className='nav-item' href="#"><ClipboardList className="nav-icon" /> <span>Manage Bookings</span></a>
            <a className='nav-item' href="#"><Bus className="nav-icon" /> <span>Manage Rental</span></a> */}
              </nav>
              <div>
                  <a className='nav-item' href="#"><LogOut className="nav-icon" /> <span>Logout</span></a>
              </div>
          </aside>
      </div>
  )
}

export default Navbar
