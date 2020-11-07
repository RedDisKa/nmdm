import React from "react";
import Chart from "react-google-charts";
import s from "./mergestatschart.module.scss";

interface Props {
  data: (string | number)[][];
}

export const MergeStatsChart = ({ data }: Props) => {
  const getLegendItem = (
    title: string,
    value: string,
    style: string,
    positive: boolean
  ) => (
    <div className={s.legend_item}>
      <div className={style}>
        <span />
      </div>
      <div>
        <p className={s.value}>
          {value}
          <span className={positive ? s.positive : s.negative} />
        </p>
        <p className={s.title}>{title}</p>
      </div>
    </div>
  );

  const maxValue = Math.max(
    ...data.reduce((res: number[], value: (string | number)[]) => {
      value.forEach((current) => {
        if (typeof current === "number") {
          res.push(current);
        }
      });
      return res;
    }, [])
  );

  const maxChartValue = Math.ceil(maxValue / 200) * 200;

  const ticks = [];
  for (let i = 0; i <= maxChartValue; i += 200) {
    ticks.push(i);
  }

  return (
    <div>
      <Chart
        height={280}
        className={s.chart}
        chartType="ColumnChart"
        data={data}
        options={{
          legend: "none",
          colors: ["#38D728", "#87DBFF", "#FFB500"],
          hAxis: {
            textStyle: {
              fontName: "LatoRegular",
              fontSize: "10px",
              color: "#999999",
            },
          },
          vAxis: {
            minValue: 0,
            maxValue: maxChartValue,
            ticks: ticks,
            baselineColor: "none",
            gridlines: { color: "rgba(120, 115, 137, .5)" },
            textStyle: {
              fontName: "LatoRegular",
              fontSize: "10px",
              color: "#999999",
            },
          },
        }}
      />
      <div className={s.legend}>
        {getLegendItem("Auto Merge", "4,2k", s.green, false)}
        {getLegendItem("Manual Merge", "2,9k", s.blue, false)}
        {getLegendItem("Unmerged", "6,4k", s.orange, true)}
      </div>
    </div>
  );
};
