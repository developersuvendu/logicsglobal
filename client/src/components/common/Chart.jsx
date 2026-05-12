import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReactImport from "highcharts-react-official";

const HighchartsReact = (HighchartsReactImport )?.default ?? HighchartsReactImport;

const Chart = ({ options }) => {
  return (
    <div className="chart-wrapper" style={{"backgroundColor":"#fff"}}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
