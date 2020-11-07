import React from "react";
import s from "./triplecirclechart.module.scss";

interface Props {
  data: {
    minValue: number;
    maxValue: number;
    value: number;
    color: string;
    title: string;
  }[];
  value: number;
  title: string;
}

export const TripleCircleChart = ({ data, value, title }: Props) => {
  const percent1 = data[0].value / (data[0].maxValue - data[0].minValue);
  const percent2 = data[1].value / (data[1].maxValue - data[1].minValue);
  const percent3 = data[2].value / (data[2].maxValue - data[2].minValue);

  const cOffSet1 = percent1*353.25;
  const cOffSet2 = percent2*266.11;
  const cOffSet3 = percent3*178.98;

  return (
    <div className={s.container}>
      <div className={s.chart}>
        <figure className={s.chart_one}>
          <svg role="img" xmlns="http://www.w3.org/2000/svg">
            <circle className={s.circle_background} />
            <circle className={s.circle_foreground} style={{stroke: data[0].color, strokeDasharray: `${cOffSet1}px 353.25px`}} />
          </svg>
        </figure>
        <figure className={s.chart_two}>
          <svg role="img" xmlns="http://www.w3.org/2000/svg">
            <circle className={s.circle_background} />
            <circle className={s.circle_foreground} style={{stroke: data[1].color, strokeDasharray: `${cOffSet2}px 266.11px`}} />
          </svg>
        </figure>
        <figure className={s.chart_three}>
          <svg role="img" xmlns="http://www.w3.org/2000/svg">
            <circle className={s.circle_background} />
            <circle className={s.circle_foreground} style={{stroke: data[2].color, strokeDasharray: `${cOffSet3}px 178.98px`}} />
          </svg>
        </figure>
        <p className={s.value}>{value}</p>
        <p className={s.title}>{title}</p>
      </div>
      <div className={s.legend}>
        <div>
          <p>
            <span style={{ background: data[0].color }} />
            {`${data[0].title} (${Math.round(percent1 * 100)}%)`}
          </p>
          <p>
            <span style={{ background: data[1].color }} />
            {`${data[1].title} (${Math.round(percent2 * 100)}%)`}
          </p>
        </div>
        <div>
          <p>
            <span style={{ background: data[2].color }} />
            {`${data[2].title} (${Math.round(percent3 * 100)}%)`}
          </p>
        </div>
      </div>
    </div>
  );
};
