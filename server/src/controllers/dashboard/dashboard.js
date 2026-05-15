const dashboardData={
  "dashboard": {
    "welcomeSection": {
      "title": "Welcome Back, Suvendu Mohanta! 👋",
      "description": "Track performance, manage leaves, handle tasks, and access HR documents—seamlessly from a single dashboard.",
      "illustration": "dashboard-illustration.png"
    },
    "leaveSummary": [
      {
        "type": "Sick Leave",
        "used": 2,
        "total": 6,
        "color": "#F26A00"
      },
      {
        "type": "Casual Leave",
        "used": 2,
        "total": 6,
        "color": "#7B3FF2"
      },
      {
        "type": "Earned Leave",
        "used": 2,
        "total": 6,
        "color": "#3BAA4A"
      },
      {
        "type": "Work From Home",
        "used": 2,
        "total": 6,
        "color": "#D81B60"
      }
    ],
    "todos": {
      "count": 1,
      "items": [
        {
          "id": 1,
          "message": "Your onboarding process is pending. Please submit the required documents.",
          "status": "pending"
        }
      ]
    },
    "quickLinks": [
      {
        "id": 1,
        "title": "Apply Leave",
        "icon": "calendar.png",
        "route": "/leave/apply"
      },
      {
        "id": 2,
        "title": "Apply WFH",
        "icon": "monitor.png",
        "route": "/wfh/apply"
      },
      {
        "id": 3,
        "title": "Internet Bill",
        "icon": "internet.png",
        "route": "/reimbursement/internet"
      },
      {
        "id": 4,
        "title": "Gym Bill",
        "icon": "dumbbell.png",
        "route": "/reimbursement/gym"
      },
      {
        "id": 5,
        "title": "Apply Flight",
        "icon": "flight.png",
        "route": "/travel/apply"
      }
    ],
    "recentActivity": [
      {
        "id": 1,
        "title": "Applied for Casual Leave",
        "date": "Mar 28-2026",
        "category": "Casual Leave",
        "timeAgo": "2 hours ago",
        "status": "Approved"
      },
      {
        "id": 2,
        "title": "Reimbursement Request",
        "date": "Mar 01-2026",
        "category": "Gym Bill",
        "amount": "₹2,400",
        "status": "Pending"
      },
      {
        "id": 3,
        "title": "Flight Booked Request",
        "route": "BLR → DEL",
        "date": "Apr 02-2026",
        "category": "Flight Booking",
        "time": "11:26 PM",
        "status": "Approved"
      }
    ],
    "performanceOverview": {
      "title": "Performance Overview",
      "chartData": []
    },
    "upcomingEvents": [
      {
        "id": 1,
        "title": "Scrum Meeting",
        "date": "Mar 28-2026",
        "time": "10:20 AM",
        "icon": "meeting.png"
      },
      {
        "id": 2,
        "title": "Sprint Planning",
        "date": "Mar 28-2026",
        "time": "10:20 AM",
        "icon": "meeting.png"
      },
      {
        "id": 3,
        "title": "Rakesh’s Birthday Celebration",
        "date": "Mar 28-2026",
        "time": "03:20 PM",
        "icon": "birthday.png"
      }
    ],
    "userProfile": {
      "name": "Suvendu Mohanta",
      "designation": "UI/UX Developer",
      "avatar": "profile.png",
      "notifications": 3
    },
    "searchPlaceholder": "Search leave, payslip, reimbursement"
  }
}


export const dashbaord = async (req, res) => {
    try {
        return res.send({
            status: 200,
            message: "Login successful",
            data:dashboardData
        });
        
    } catch (error) {
        return res.send({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}