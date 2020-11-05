import React, { useState } from "react";
import Chart from "react-google-charts";
import { ReactGoogleChartEvent } from "react-google-charts/dist/types";
import s from "./mapchart.module.scss";

interface Props {
  data: { country: string; continent: string; value: number }[];
}

export const MapChart = ({ data }: Props) => {
  const [resolution, setResolution] = useState(
    "continents" as "continents" | "countries"
  );
  const [region, setRegion] = useState("world" as string);
  const [previousRegion, setPreviousRegion] = useState(undefined as string | undefined);

  const displayData = [["Region", "Customer"]] as (string | number)[][];
  if (resolution === "countries") {
    data.forEach((item) => {
      displayData.push([item.country, item.value]);
    });
  } else {
    const byContinents = new Map<string, number>();
    data.forEach((item) => {
      byContinents.set(
        item.continent,
        (byContinents.get(item.continent) || 0) + item.value
      );
    });
    byContinents.forEach((value, key) => {
      displayData.push([key, value]);
    });
  }

  const onZoomMoreClick = () => {
      if (previousRegion) {
        setRegion(previousRegion);
        setResolution("countries");
      } else {
        setRegion(data[0].continent);
        setResolution("countries");
      }
  };

  const onZoomLessClick = () => {
      if (resolution === 'countries') {
        setRegion('world');
        setResolution("continents");
      }
  };

  return (
    <div className={s.container}>
      <Chart
        height={"284px"}
        className={s.map}
        chartType="GeoChart"
        data={displayData}
        options={{
          legend: "none",
          colorAxis: {
            values: [0, 999, 1000, 4999, 5000, 9999, 10000, 1000000],
            colors: ["#99DFFF", "#99DFFF", "#56C2F3", "#56C2F3", "#0891CD", "#0891CD", "#0071A3", "#0071A3"],
          },
          backgroundColor: "white",
          datalessRegionColor: "#E9E9E9",
          defaultColor: "#99DFFF",
          region: region,
          resolution: resolution,
          tooltip: {
            trigger: "none",
          },
        }}
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0 || resolution === 'countries') return;
              const region = displayData[selection[0].row + 1];
              setRegion(region[0] as string);
              setResolution("countries");
              setPreviousRegion(region[0] as string)
            },
          } as ReactGoogleChartEvent,
        ]}
      />
      <div className={s.buttons}>
        <button className={s.zoom_more} onClick={onZoomMoreClick}>
          <span />
        </button>
        <button className={s.zoom_less} onClick={onZoomLessClick}>
          <span />
        </button>
      </div>
      <div className={s.legend}>
        <p className={s.description}>
          Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget
          libero posuere vulputate.
        </p>
        <div className={s.colors}>
          <p className={s.category}>
            <span className={s.category_1} />
            {"< 1000"}
          </p>
          <p className={s.category}>
            <span className={s.category_2} />
            1000 — 4,999
          </p>
          <p className={s.category}>
            <span className={s.category_3} />
            5000 — 9,999
          </p>
          <p className={s.category}>
            <span className={s.category_4} />
            {"10,000 >"}
          </p>
        </div>
      </div>
    </div>
  );
};
