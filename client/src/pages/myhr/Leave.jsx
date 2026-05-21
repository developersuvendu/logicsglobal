import React from "react";
import { useState } from "react";
import "./styles/Leave.css";
import CasualLeave from "../../assets/leave/casual-leave.svg";
import SickLeave from "../../assets/leave/sick-leave.svg";
import EarnedLeave from "../../assets/leave/ios-icon.svg";
import CompOff from "../../assets/leave/web-users.svg";
import LossOfPay from "../../assets/leave/uninstall-user.svg";

import Chart from "../../components/common/Chart";

import {
  CalendarDays,
  Plane,
  Heart,
  GraduationCap,
  Plus,
  Filter,
} from "lucide-react";
import { Dialog } from "../../components/common/Dialog.jsx";
import { CustomButton } from "../../components/common/CustomButton.jsx";
import { ApplyLeaveModal } from "./dilogs/ApplyLeavesDialog.jsx";
import { useEffect } from "react";

import { getLeavesApi } from "../../api/leaveApi";

import { getUser } from "../../utils/storage";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/common/Table";
import { Card } from "../../components/common/Card.jsx";
import Dropdown from "../../components/common/Dropdown";
import { LeaveCard } from "../../components/LeaveCards/LeaveCard.jsx";

const baseChart = {
  credits: { enabled: false },
  title: {
    text: null,
  },
  chart: { backgroundColor: "transparent", style: { fontFamily: "inherit" } },
};
const columnOptions = {
  ...baseChart,
  chart: { ...baseChart.chart, type: "column", height: 280 },
  xAxis: {
    lineColor: "#f6f7f8",
    title: {
      text: "",
    },
    categories: ["Home", "Documents", "Billing", "Media", "FAQ"],
  },
  yAxis: {
    title: {
      text: null,
    },
    gridLineColor: "#f6f7f8",
    labels: {
      enabled: true,
    },
  },
  legend: {
    enabled: false, // Hide the series indicator (legend)
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: false,
        format: "{point.y}%",
        inside: false,
        verticalAlign: "top",
        y: -10,
      },
      borderColor: "#f9f9fb",
      borderWidth: 1,
      borderRadius: 5,
      pointWidth: 50,
      pointPadding: 0.4,
    },
    series: {
      label: {
        enabled: false,
      },
    },
  },
  series: [
    {
      type: "column",
      name: "Deals",
      color: "#4784fa",
      data: [50, 35, 25, 15, 5],
    },
  ],
};

// const history = [
//   { id: "LV-1042", type: "Annual Leave", from: "12 Apr 2026", to: "18 Apr 2026", days: 7, status: "Approved", reason: "Family vacation" },
//   { id: "LV-1041", type: "Sick Leave", from: "02 Apr 2026", to: "03 Apr 2026", days: 2, status: "Approved", reason: "Flu" },
//   { id: "LV-1038", type: "Casual Leave", from: "20 Mar 2026", to: "20 Mar 2026", days: 1, status: "Pending", reason: "Personal work" },
//   { id: "LV-1031", type: "Annual Leave", from: "08 Feb 2026", to: "10 Feb 2026", days: 3, status: "Rejected", reason: "Short notice" },
//   { id: "LV-1027", type: "Casual Leave", from: "15 Jan 2026", to: "15 Jan 2026", days: 1, status: "Approved", reason: "Bank work" },
// ];

const Leave = () => {
  const [leaves, setLeaves] = useState([]);

  const [filter, setFilter] = useState("all");
  const [openApplyLeaveModal, setOpenApplyLeaveModal] = useState(false);
  const fetchLeaves = async () => {
    try {
      const user = getUser();

      const response = await getLeavesApi({
        userId: user._id,
      });

      const formattedLeaves = response.data.map((leave, index) => ({
        id: leave._id.slice(-6) || index,

        type: leave.leaveType,

        from: leave.startDate,

        to: leave.endDate,

        days: leave.days,

        reason: leave.reason,

        status: leave.status,
      }));

      setLeaves(formattedLeaves);
    } catch (error) {
      console.log("Fetch Leaves Error :", error);
    }
  };
  useEffect(() => {
    fetchLeaves();
  }, []);
  return (
    <div className="leave-wrapper">
      <div className="tile_internal_row">
        <div className="tiles_column">
          <div className="tile">
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
          <div className="tile">
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
          <div className="tile">
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
          <div className="tile">
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
          <div className="tile">
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
      <div className="leave-wrapper">
        {/* <Chart options={columnOptions} />
       <Chart options={columnOptions} /> */}
        <Card className="leave-history-card">
          <div className="flex justify-between border border-bottom table-toolbar">
            <div>
              <h2 className="text text-lg font-semibold table-title">
                Leave History
              </h2>
              <p className="text text-sm text-muted">
                View and track your leave applications
              </p>
            </div>
            <div className="flex align-center apply-leave-button-wrapper">
              <div>
                <div className="leave-filter-dropdown">
                  <Dropdown
                    value={filter}
                    onChange={setFilter}
                    placeholder="Filter Status"
                    options={[
                      { label: "All Status", value: "all" },
                      { label: "Approved", value: "approved" },
                      { label: "Pending", value: "pending" },
                      { label: "Rejected", value: "rejected" },
                    ]}
                  />
                </div>
              </div>
              <div>
                <CustomButton onClick={() => setOpenApplyLeaveModal(true)}>
                  <Plus className="custom-button-icon" />
                  New Request
                </CustomButton>
                {/* <button className="custom-button apply-leave-button">
                  <Plus className="custom-button-icon plus-icon" />
                  New Request 
                </button> */}
              </div>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaves.map((h) => (
                <TableRow key={h.id}>
                  <TableCell className="font-medium">{h.id}</TableCell>
                  <TableCell>{h.type}</TableCell>
                  <TableCell>{h.from}</TableCell>
                  <TableCell>{h.to}</TableCell>
                  <TableCell>{h.days}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {h.reason}
                  </TableCell>
                  <TableCell>{h.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      <ApplyLeaveModal
        isOpen={openApplyLeaveModal}
        onClose={() => setOpenApplyLeaveModal(false)}
        refreshLeaves={fetchLeaves}
      />
    </div>
    // <div className="leave-wrapper">
    //   <Chart options={columnOptions} />
    //   <Chart options={columnOptions} />
    // </div>
  );
};

export default Leave;
