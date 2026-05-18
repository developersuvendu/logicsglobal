import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
  // import Logo from './assets/logics_global_logo.png';
// import DashboardIcon from './assets/dashboard.svg';
// import DashboardWhite from './assets/dashboard-white.svg';
// import MyHR from './assets/myhr.svg';
// import Attendance from './assets/attendance.svg';
// import Assets from './assets/assets.svg';
// import Social from './assets/social.svg';
// import Task from './assets/task.svg';
// import Logout from './assets/logout.svg';
// import LogicsSocial from './assets/logics-social.png';
import './App.css'

import { NavLink } from "react-router-dom";

import { Bus,MapPinned, Activity, Users, ClipboardList, LogOut, ChevronRight, ChevronLeft } from 'lucide-react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';

// Pages
import Leave from './pages/myhr/Leave';
import Documents from './pages/myhr/Documents';
import Onboarding from './pages/myhr/Onboarding';
import FlightTickets from './pages/myhr/FlightTickets';
import MyHRLayout from './pages/myhr/MyHRLayout';
import Holidays from './pages/myhr/Holidays';



import Attendance from './pages/attendance/Attendance';
import Inventory from './pages/inventory/Inventory';
import Social from './pages/social/Social';
import Tasks from './pages/tasks/Tasks';
// import NotFound from './pages/NotFound';
import Dashbaord from './pages/Dashboard';

import Layout from './components/Layout/Layout';

const iconMap = {
  Activity,
  Bus,
  MapPinned,
  Users,
  ClipboardList,
};

const navItems = [
  // { icon: Activity, label: 'Dashboard', path: "/dashboard" },
  // { icon: Bus, label: 'Manage Buses', path: "/manage-buses" },
  // { icon: MapPinned, label: 'Track Bus', path: "/track-bus" },
  // { icon: Users, label: 'Boarded Users', path: "/boarded-users" },
  // { icon: ClipboardList, label: 'Manage Bookings', path: "/manage-bookings" },
  // { icon: Bus, label: 'Manage Rental', path: "/manage-rental" },
  { icon: Activity, label: 'Dashboard', path: "/dashboard" },
  { icon: Bus, label: 'My HR', path: "/my-hr" },
  { icon: MapPinned, label: 'Attendance', path: "/attendance" },
  { icon: Users, label: 'Assets', path: "/assets" },
  { icon: ClipboardList, label: 'Social', path: "/social" },
  { icon: Bus, label: 'Task', path: "/task" },
];

function App() {
  const [count, setCount] = useState(0)
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('Dashboard')


  return (
    // <div className="flex App height-full">
    //   <div className={`left-col ${collapsed ? 'collapsed' : ''}`}>
    //     <div className='sidebar__toggle'  onClick={() => setCollapsed(prev => !prev)} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
    //       {collapsed ? <ChevronRight /> : <ChevronLeft />}
    //     </div>
    //     <div className="logo_wrapper">
    //       {collapsed ? <img src={LogicsSocial} alt="logo" className="social-logo" />:<img src={ Logo } alt="logo" className="logo" />}
    //     </div>
    //     <aside className="sidebar">
    //       <nav className="nav">
    //         {navItems.map(({ icon, label, path }) => {
    //           const IconComponent = icon;
    //           return (
    //             <a className={`nav-item ${active === label ? 'active' : ''}`} href="#" key={label} onClick={() => setActive(label)}>
    //               <IconComponent className="nav-icon" />{!collapsed && <span>{label}</span>}
    //             </a>
    //             // <NavLink
    //             //   to={path}
    //             //   key={label}
    //             //   className={({ isActive }) =>
    //             //     `nav-item ${isActive ? "active" : ""}`
    //             //   }
    //             // >
    //             //   <IconComponent className="nav-icon" />
    //             //   {!collapsed && <span>{label}</span>}
    //             // </NavLink>
    //           );
    //         })}
    //         {/* <a className='nav-item active' href="#"><Activity className="nav-icon" /> <span>Dashboard</span></a>
    //         <a className='nav-item' href="#"><Bus className="nav-icon" /> <span>Manage Buses</span></a>
    //         <a className='nav-item' href="#"><MapPinned className="nav-icon" /> <span>Track Bus</span></a>
    //         <a className='nav-item' href="#"><Users className="nav-icon" /> <span>Boarded Users</span></a>
    //         <a className='nav-item' href="#"><ClipboardList className="nav-icon" /> <span>Manage Bookings</span></a>
    //         <a className='nav-item' href="#"><Bus className="nav-icon" /> <span>Manage Rental</span></a> */}
    //       </nav>
    //       <div>
    //         <a className='nav-item' href="#"><LogOut className="nav-icon" /> <span>Logout</span></a>
    //       </div>
    //     </aside>
    //   </div>
    //   <Navbar />
    //   <div className="right-col">
    //     <Header />
    //     <Dashboard />
    //   </div>
    // </div>


    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/" element={<Layout />}>
            {/* <Route index element={<Navigate to="/dashboard" replace />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route index element={<Navigate to="/myhr/leave" replace />} />
              <Route path="/myhr" element={<MyHRLayout />}>
                <Route index element={<Navigate to="/myhr/leave" replace />} />
                <Route path="leave" element={<Leave />} />
                <Route path="documents" element={<Documents />} />
                <Route path="onboarding" element={<Onboarding />} />
                <Route path="flight-tickets" element={<FlightTickets />} />
                <Route path="holidays" element={<Holidays />} />
              </Route>
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/social" element={<Social />} />
            <Route path="/task" element={<Tasks />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
        <Route path="*" element={<Navigate to="/myhr/leave" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
