import {React, Button} from 'react'
import '../../styles/Attendance.css';
import AttendanceScanImage from '../../assets/face-scanning.svg';
import WebCam from './WebCam';
import Calendar from '../../components/common/Calendar';


import { CircleCheck, Circle } from 'lucide-react';
const Attendance = () => {
  return (
    <div className="container height-100">
      <div className="attendance-heading-wrapper">
        <h1 className="heading-text attendance-heading">Attendance</h1>
        <p>Face ID · Geo-verified</p>
      </div>
      <div className='attendance-content-wrapper'>
        <div className="flex height-100 width-100">
          <div className="attendance_left_col">
            <div className="attendance_card_wrapper">
                <div className="attendance_card">
                    <div className="attendance_scanner">
                        <img src={AttendanceScanImage} alt="Attendance Scanner" />
                        {/* <WebCam /> */}
                        
                         <div style={{display:"flex",justifyContent: "center", alignItems: "center",marginTop: "2px", "marginBottom": "10px"}}> 
                          {/* <CircleCheck fill="currentColor" stroke="white" className='verification-check-icon'/> */}
                          <Circle fill="currentColor" stroke="currentColor" className='verification-check-icon'/>
                          <p className="text verified-text">Location Verified · IntelliRose HQ, Bengaluru</p>
                         </div>
                          <button className="button submit-button" onClick={() => console.log("Clicked")}>⏱ Mark Check-In — 9:41 AM</button>
                    </div>
                    <div className="attendance_calender">
                      <Calendar />
                     
                     
                    </div>
                </div>
            </div>
            <div className="attendance_grid_wrapper">
                <div className="attendance_grid">

                </div>
            </div>
          </div>
          <div className="attendance_right_col">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance
