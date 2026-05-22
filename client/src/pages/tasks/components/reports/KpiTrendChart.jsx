import React from "react";

import Highcharts from "highcharts";
import HighchartsReactOfficial from "highcharts-react-official";

const HighchartsReact = HighchartsReactOfficial.default;

const KpiTrendChart = ({ color = "#22c55e", data = [] }) => {
  const options = {
    chart: {
      type: "areaspline",

      backgroundColor: "transparent",

      height: 52,

      marginTop: 2,
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
    },

    title: null,

    credits: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    legend: {
      enabled: false,
    },

    tooltip: {
      enabled: false,
    },

    xAxis: {
      visible: false,
    },

    yAxis: {
      visible: false,
    },

    plotOptions: {
      series: {
        animation: false,

        marker: {
          enabled: false,
        
        },

        lineWidth: 1.5,

        states: {
          hover: {
            enabled: false,
          },
        },
      },

      areaspline: {
        fillOpacity: 0.18,
      },
    },

    series: [
      {
        data,

        color,

        fillColor: {
          linearGradient: [0, 0, 0, 80],

          stops: [
            [0, `${color}55`],
            [1, `${color}00`],
          ],
        },
      },
    ],
  };

  return (
    <div className="kpi-trend-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default KpiTrendChart;
