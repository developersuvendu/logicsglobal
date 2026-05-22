import React from "react";

import Highcharts from "highcharts";
import HighchartsReactOfficial from "highcharts-react-official";

const HighchartsReact =
  HighchartsReactOfficial.default || HighchartsReactOfficial;

const SprintProgressChart = () => {
  const options = {
    accessibility: {
      enabled: false,
    },

    chart: {
      type: "spline",
      backgroundColor: "transparent",
      height: 300,

      spacingTop: 10,
      spacingLeft: 0,
      spacingRight: 10,
      spacingBottom: 0,
    },

    title: {
      text: null,
    },

    credits: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    legend: {
      align: "right",
      verticalAlign: "top",

      symbolRadius: 0,

      itemDistance: 24,

      itemStyle: {
        color: "#667085",
        fontWeight: "600",
        fontSize: "12px",
      },
    },

    xAxis: {
      categories: [
        "27 Apr",
        "29 Apr",
        "1 May",
        "3 May",
        "5 May",
        "7 May",
        "9 May",
        "11 May",
      ],

      tickLength: 0,

      lineColor: "transparent",

      gridLineWidth: 0,

      labels: {
        style: {
          color: "#98a2b3",
          fontSize: "11px",
          fontWeight: "500",
        },
      },
    },

    yAxis: {
      title: {
        text: null,
      },

      tickPositions: [0, 20, 40, 60, 80, 100],

      gridLineColor: "#eef2f7",

      gridLineDashStyle: "Dash",

      labels: {
        style: {
          color: "#98a2b3",
          fontSize: "11px",
        },
      },
    },

    tooltip: {
      shared: true,

      backgroundColor: "#ffffff",

      borderColor: "#e9eef5",

      borderRadius: 14,

      borderWidth: 1,

      shadow: false,

      padding: 14,

      style: {
        color: "#0f172a",
        fontSize: "12px",
      },
    },

    plotOptions: {
      series: {
        animation: false,

        states: {
          hover: {
            enabled: false,
          },
        },
      },

      spline: {
        lineWidth: 2.5,

        marker: {
          enabled: true,

          radius: 3.5,

          lineWidth: 2,
        },
      },
    },

    series: [
      {
        name: "Target",

        type: "spline",

        data: [95, 70, 66, 54, 42, 28, 12, 0],

        color: "#b8c1d9",

        dashStyle: "Dash",

        lineWidth: 2,

        marker: {
          enabled: false,
        },
      },

      {
        name: "Actual",

        type: "spline",

        data: [95, 84, 79, 66, 54, 42, 28, 16],

        color: "#7c3aed",

        marker: {
          fillColor: "#ffffff",

          lineColor: "#7c3aed",

          lineWidth: 2,

          radius: 3.5,

          symbol: "circle",
        },
      },
    ],
  };
  return (
    <div className="reports-card sprint-progress-card">
      <div className="reports-card-header">
        <div>
          <h3>Sprint Progress</h3>

          <p>Target vs actual sprint execution</p>
        </div>
      </div>

      <div className="reports-chart-wrapper">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default SprintProgressChart;
