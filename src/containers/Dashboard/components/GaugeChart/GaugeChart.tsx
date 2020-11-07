import React from "react";
import s from "./gaugechart.module.scss";

interface Props {
  name: string,
  color: string,
  minValue: number;
  maxValue: number;
  value: number;
  formattedMinValue: string,
  formattedMaxValue: string,
  formattedValue: string
}

export const GaugeChart = ({ minValue, maxValue, value, formattedValue, formattedMinValue, formattedMaxValue, name, color }: Props) => {
  const percent = value / (maxValue - minValue);
  const degree = 230 * percent - 110;

  const cOffSet = percent * 287.37;

  return (
    <div className={s.container}>
        <p className={s.value}>{formattedValue}</p>
        <figure className={s.chart}>
          <svg role="img" xmlns="http://www.w3.org/2000/svg" className={s.circles}>
            <circle className={s.circle_background} />
            <circle className={s.circle_foreground} style={{stroke: color, strokeDasharray: `${cOffSet}px 449.02px`}} />
          </svg>
          <svg className={s.pointer} width="19px" height="70px" viewBox="0 0 19 70" version="1.1" style={{transform: `translate(-50%, 8px) rotateZ(${degree}deg)`}}>
            <defs>
              <filter
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
                id="filter_1"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="0" dy="-1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5019608 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect0_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect0_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
            <g filter="url(#filter_1)">
              <path
                d="M16 59C16 56.1303 14.4889 53.6133 12.2188 52.2016L8.47456 0.444608C8.43142 -0.148203 7.56858 -0.148203 7.52544 0.444608L3.78119 52.2016C1.51113 53.6133 0 56.1303 0 59C0 63.4179 3.58155 67 8 67C12.4185 67 16 63.4179 16 59ZM3 58.9995C3 61.7566 5.24339 64 8.00054 64C10.7577 64 13 61.7566 13 58.9995C13 56.2423 10.7577 54 8.00054 54C5.24339 54 3 56.2423 3 58.9995Z"
                transform="translate(1.5 2.5)"
                id="Pointer"
                fill="#3C3C3C"
                fillRule="evenodd"
                stroke="none"
              />
            </g>
          </svg>
        </figure>
        <p className={s.min_value}>{formattedMinValue}</p>
        <p className={s.max_value}>{formattedMaxValue}</p>
        <p className={s.title}>{name}</p>
    </div>
  );
};
