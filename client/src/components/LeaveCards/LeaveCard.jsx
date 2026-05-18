import React from 'react';
import './LeaveCard.css';

import CasualLeave from '../../assets/leave/casual-leave.svg';
import SickLeave from '../../assets/leave/sick-leave.svg';
import EarnedLeave from '../../assets/leave/ios-icon.svg';
import CompOff from '../../assets/leave/web-users.svg';
import LossOfPay from '../../assets/leave/uninstall-user.svg';

export const LeaveCard = () => {
  return (
    <div className="leave-wrapper">
      <div className="tile_internal_row">
        <div className="tiles_column">
          <div className="dashboard-tile">
            <div className="tile_row">
              <div className="tile_text">
                <span className="tile_title">Casual Leave</span>
                <span className="tile_value">1/10</span>
              </div>
              <div className="tile_icon">
                <img src={CasualLeave} alt="Total Leads Icon" />
              </div>
            </div>
            <div>
              <div className="performance_decription">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                    fill="#00B69B"
                  ></path>
                </svg>
                <span>8.5%</span> Up from yesterday
              </div>
            </div>
          </div>
        </div>
        <div className="tiles_column">
          <div className="dashboard-tile">
            <div className="tile_row">
              <div className="tile_text">
                <span className="tile_title">Sick Leave</span>
                <span className="tile_value">2/10</span>
              </div>
              <div className="tile_icon">
                <img src={SickLeave} alt="Sick Leave Icon" />
              </div>
            </div>
            <div>
              <div className="performance_decription">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                    fill="#00B69B"
                  ></path>
                </svg>
                <span>1.3%</span> Up from yesterday
              </div>
            </div>
          </div>
        </div>
        <div className="tiles_column">
          <div className="dashboard-tile">
            <div className="tile_row">
              <div className="tile_text">
                <span className="tile_title">Earned Leave</span>
                <span className="tile_value">12/12</span>
              </div>
              <div className="tile_icon">
                <img src={EarnedLeave} alt="Earned Leave Icon" />
              </div>
            </div>
            <div>
              <div className="performance_decription">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                    fill="#00B69B"
                  ></path>
                </svg>
                <span>8.5%</span> Up from yesterday
              </div>
            </div>
          </div>
        </div>
        <div className="tiles_column">
          <div className="dashboard-tile">
            <div className="tile_row">
              <div className="tile_text">
                <span className="tile_title">Comp OFF</span>
                <span className="tile_value">0/0</span>
              </div>
              <div className="tile_icon">
                <img src={CompOff} alt="Comp OFF Icon" />
              </div>
            </div>
            <div>
              <div className="performance_decription">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                    fill="#00B69B"
                  ></path>
                </svg>
                <span>1.8%</span> Up from yesterday
              </div>
            </div>
          </div>
        </div>
        <div className="tiles_column">
          <div className="dashboard-tile">
            <div className="tile_row">
              <div className="tile_text">
                <span className="tile_title">Loss of Pay</span>
                <span className="tile_value">00</span>
              </div>
              <div className="tile_icon">
                <img src={LossOfPay} alt="Loss of Pay Icon" />
              </div>
            </div>
            <div>
              <div className="performance_decription">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z"
                    fill="#F93C65"
                  ></path>
                </svg>
                <span className="down_percentage">4.3%</span> Down from
                yesterday
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
