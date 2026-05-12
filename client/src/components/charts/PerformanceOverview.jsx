import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PerformanceOverview = () => {
  const options = {
    chart: {
      type: "column",
      height: 200,
    },
    title: {
      text: null,
    },
    xAxis: {
      lineColor: "#f6f7f8",
      categories: ["Home", "Doc", "Bill", "Media"],
      title: {
        text: "",
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
      gridLineWidth: 0,
      lineWidth: 0,
      tickWidth: 0,
      maxPadding: 0,
      minPadding: 0,
      endOnTick: false,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "",
      pointFormat: "<b>{point.y}</b> Hours",
      backgroundColor: "#FF8F6B",
      borderColor: "#FF8F6B",
      borderRadius: 8,
      borderWidth: 0,
      style: {
        color: "#ffffff",
        fontSize: "13px",
      },
    },
    plotOptions: {
      column: {
        borderColor: "#f9f9fb",
        borderWidth: 1,
        borderRadius: 5,
        pointWidth: 48,
        pointPadding: 0.4,
        states: {
          hover: {
            color: "#FF8F6B",
          },
        },
      },
      series: {
        label: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Deals",
        data: [10, 15, 20, 9],
        color: "#fde9e0",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PerformanceOverview;