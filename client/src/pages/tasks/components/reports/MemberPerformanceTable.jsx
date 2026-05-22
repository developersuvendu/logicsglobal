import React from "react";

import { ArrowRight } from "lucide-react";



const members = [
  {
    id: 1,
    name: "Jignesh Surampudi",
    avatar: "JS",

    assigned: 12,
    completed: 10,
    achieved: 8,
    missed: 2,
    contribution: "83%",


  },

  {
    id: 2,
    name: "Suvendu Mohanta",
    avatar: "SM",

    assigned: 10,
    completed: 9,
    achieved: 7,
    missed: 2,
    contribution: "78%",

   
  },

  {
    id: 3,
    name: "Rahul Sharma",
    avatar: "RS",

    assigned: 11,
    completed: 11,
    achieved: 6,
    missed: 5,
    contribution: "55%",

  },

  {
    id: 4,
    name: "Krishna Kumar",
    avatar: "KK",

    assigned: 9,
    completed: 8,
    achieved: 7,
    missed: 1,
    contribution: "87%",


  },

  {
    id: 5,
    name: "Renu Sharma",
    avatar: "RS",

    assigned: 8,
    completed: 7,
    achieved: 6,
    missed: 1,
    contribution: "86%",

    trendColor: "#22c55e",
    trendData: [9, 13, 11, 18, 16, 24],
  },
];

const MemberPerformanceTable = () => {
  return (
    <div className="reports-card member-performance-card">
      {/* HEADER */}

      <div className="reports-card-header">
        <div>
          <h3>Team Member Performance</h3>
        </div>
      </div>

      {/* SCROLL */}

      <div className="member-table-scroll">
        <div className="member-table">
          {/* HEADER */}

          <div className="member-table-header">
            <span>Member</span>
            <span>Assigned</span>
            <span>Completed</span>
            <span>Target Achieved</span>
            <span>Missed</span>
            <span>Contribution %</span>
            {/* <span>Trend</span> */}
          </div>

          {/* ROWS */}

          {members.map((member) => (
            <div className="member-table-row" key={member.id}>
              {/* MEMBER */}

              <div className="member-name-cell">
                <div className="member-avatar">
                  {member.avatar}
                </div>

                <span>{member.name}</span>
              </div>

              <div>{member.assigned}</div>

              <div>{member.completed}</div>

              <div>{member.achieved}</div>

              <div>{member.missed}</div>

              <div className="member-contribution">
                {member.contribution}
              </div>

              {/* <div className="member-trend-chart">
                <KpiTrendChart
                  color={member.trendColor}
                  data={member.trendData}
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}

      <button className="member-view-link">
        View all members

        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default MemberPerformanceTable;