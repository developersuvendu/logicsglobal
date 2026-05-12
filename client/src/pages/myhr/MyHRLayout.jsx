import React from 'react'
import { Outlet } from "react-router-dom";

import MyHRTabs from './MyHRTabs';
import '../../styles/MyHr.css';
const MyHRLayout = () => {
  return (
    <div className='container my-hr-container'>
      <MyHRTabs />
      <Outlet />
    </div>
  )
}

export default MyHRLayout
