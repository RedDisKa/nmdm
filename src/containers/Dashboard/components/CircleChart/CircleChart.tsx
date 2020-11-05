import React from "react";
import s from "./circlechart.module.scss";

interface Props { 
    minValue: number, 
    maxValue: number, 
    value: number, 
    diameter: number, 
    color: string }

export const CircleChart = ({ minValue, maxValue, value, color }: Props) => {

    const percent = value / (maxValue - minValue);
	const cOffSet = 157 * percent;

    return <figure className={s.chart}>
	<svg role="img" xmlns="http://www.w3.org/2000/svg">
		<circle className={s.circle_background} />
		<circle className={s.circle_foreground} style={{stroke: color, strokeDasharray: `${cOffSet}px 157px`}} />
	</svg>
</figure>
    
}