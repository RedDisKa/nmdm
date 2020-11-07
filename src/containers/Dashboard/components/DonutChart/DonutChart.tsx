import React from "react";
import { Chart } from "react-google-charts";
import s from "./donutchart.module.scss";

interface Item {
  value: number;
  color: string;
  title: string;
}

interface Props {
  data: Item[];
}

export const DonutChart = ({ data }: Props) => {
  const getLegendItem = (item: Item, key: number) => (
    <p key={key}>
      <span style={{ background: item.color }} />
      {item.title}
    </p>
  );

  const chartData = [["", ""]] as (string | number)[][]
  const colors = [] as string[]
  data.forEach(item => {
    chartData.push([item.title, item.value])
    colors.push(item.color)
  })

  return (
    <div className={s.container}>
      <div className={s.chart}>
        <Chart
            className={s.pie_chart}
          chartType="PieChart"
          width="100%"
          height="272px"
          data={chartData}
          options={{
            legend: "none",
            pieHole: 0.4,
            is3D: false,
            backgroundColor: 'none',
            pieSliceText: 'none',
            colors,
            tooltip: {
                textStyle: {
                    fontName: 'LatoRegular',
                    fontSize: '10px',
                    color: '#999999'
                },
                text: 'percentage'
            }
          }}
        />
      </div>
      <div className={s.legend}>
        <div>
          {data.map((item, index) =>
            index < data.length / 2 ? getLegendItem(item, index) : null
          )}
        </div>
        <div>
          {data.map((item, index) =>
            index >= data.length / 2 ? getLegendItem(item, index) : null
          )}
        </div>
      </div>
    </div>
  );
};
