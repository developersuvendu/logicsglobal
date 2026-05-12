import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import '../../styles/Layout.css';
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
      <div className="flex App height-100">
          <Navbar />
          <div className="right-col">
              <Header />
              <Outlet />
          </div>
      </div>
  )
}

export default Layout
