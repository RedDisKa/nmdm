import React from "react";
import { Panel } from "../../components/Panel/Panel";
import s from "./dashboard.module.scss";
import classnames from "classnames";
import { Chart } from "react-google-charts";
import { ReactGoogleChartEvent } from "react-google-charts/dist/types";
import { clone } from "../../utils";
import { MapChart } from "./components/MapChart/MapChart";
import { ListTitle } from "../../components/List/List";
import { FrequentlyUsedTable } from "./components/FrequentlyUsedTable/FrequentlyUsedTable";
import { AssignedTask } from "../../types";
import { TasksAssignedList } from "./components/TasksAssignedList/TasksAssignedList";
import { GaugeChart } from "./components/GaugeChart/GaugeChart";
import { MergeStatsChart } from "./components/MergeStats/MergeStatsChart";
import { CircleChart } from "./components/CircleChart/CircleChart";
import { TripleCircleChart } from "./components/TripleCircleChart/TripleCircleChart";
import { DonutChart } from "./components/DonutChart/DonutChart";

const TEST_FREQUENTLY_USED = [
  {
    country: "USA",
    countryCode: "us",
    companies:
      "Walmart, Amazon, Exxon, Apple Inc, Google, LLC, Other different companies",
  },
  {
    country: "Sweden",
    countryCode: "se",
    companies:
      "Volvo, Ericsson, H&M, Skanska, Spotify, Vattenfall, Other different companies",
  },
  {
    country: "Finland",
    countryCode: "fi",
    companies:
      "Volvo, Ericsson, H&M, Skanska, Spotify, Vattenfall, Other different companies",
  },
  {
    country: "UK",
    countryCode: "gb",
    companies:
      "Unilever, AstraZeneca, GlaxoSmithKline, HSBC Holdings plc, Other different companies",
  },
  {
    country: "USA",
    countryCode: "us",
    companies:
      "Walmart, Amazon, Exxon, Apple Inc, Google, LLC, Other different companies",
  },
  {
    country: "Sweden",
    countryCode: "se",
    companies:
      "Volvo, Ericsson, H&M, Skanska, Spotify, Vattenfall, Other different companies",
  },
  {
    country: "Finland",
    countryCode: "fi",
    companies:
      "Volvo, Ericsson, H&M, Skanska, Spotify, Vattenfall, Other different companies",
  },
  {
    country: "UK",
    countryCode: "gb",
    companies:
      "Unilever, AstraZeneca, GlaxoSmithKline, HSBC Holdings plc, Other different companies",
  },
  {
    country: "USA",
    countryCode: "us",
    companies:
      "Walmart, Amazon, Exxon, Apple Inc, Google, LLC, Other different companies",
  },
  {
    country: "Sweden",
    countryCode: "se",
    companies:
      "Volvo, Ericsson, H&M, Skanska, Spotify, Vattenfall, Other different companies",
  },
] as {
  country: string;
  companies: string;
  countryCode: string;
}[];

const TEST_TASKS_ASSIGNED = [
  {
    priority: "high",
    customer: {
      logo:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Apple Inc.",
    },
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Andries Grootoonk",
    },
    description:
      "Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. ",
    created: "12 min. ago",
    type: "Hierarchy Updated",
    dueDate: "12 Nov. 20",
  },
  {
    priority: "high",
    customer: {
      logo:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Google, LLC",
    },
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Awaatif Al Sadek",
    },
    description:
      "Fugit asperiores aut enim ut dolorem. Aut et atque voluptatem est tempore natus placeat deleniti. Corrupti ex quia praesentium ad esse qui est dolor ex.",
    created: "47 min. ago",
    type: "Updated",
    dueDate: "01 Dec. 20",
  },
  {
    priority: "medium",
    customer: {
      logo:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Microsoft Corp.",
    },
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Laura Sofía Ureña",
    },
    description:
      "Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. ",
    created: "2 hr. ago",
    type: "Created",
    dueDate: "05 Dec. 20",
  },
  {
    priority: "low",
    customer: {
      logo:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Amazon.com, Inc.",
    },
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Jontray Arnold",
    },
    description:
      "Quisquam error molestiae velit nemo qui a voluptatem qui. Laborum quas reiciendis iste ipsam sunt dolores.",
    created: "2 hr. ago",
    type: "Hierarchy Updated",
    dueDate: "05 Dec. 20",
  },
  {
    priority: "high",
    customer: {
      logo:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Apple Inc.",
    },
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1276481413127299072/F_itR06f_400x400.png",
      name: "Andries Grootoonk",
    },
    description:
      "Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. ",
    created: "12 min. ago",
    type: "Hierarchy Updated",
    dueDate: "12 Nov. 20",
  },
] as AssignedTask[];

const TEST_CUSTOMERS = [
  { country: "Germany", continent: "150", value: 4200 },
  { country: "United States", continent: "019", value: 7490 },
  { country: "Brazil", continent: "019", value: 400 },
  { country: "Canada", continent: "019", value: 3521 },
  { country: "France", continent: "150", value: 600 },
  { country: "RU", continent: "150", value: 2700 },
  { country: "Australia", continent: "009", value: 11456 },
  { country: "Egypt", continent: "002", value: 3113 },
  { country: "China", continent: "142", value: 6143 },
];

const TEST_MERGE_STATS = [
  ["Month", "Auto Merge", "Manual Merge", "Unmerged"],
  ["JAN", 1000, 400, 200],
  ["FEB", 1170, 460, 250],
  ["MAR", 660, 1120, 300],
  ["APR", 1030, 540, 350],
  ["MAY", 1030, 540, 350],
  ["JUN", 1030, 540, 350],
  ["JUL", 1030, 540, 350],
  ["AUG", 1030, 540, 350],
  ["SEPT", 1030, 540, 350],
  ["OCT", 1030, 540, 350],
  ["NOV", 1030, 540, 350],
  ["DEC", 1030, 540, 350],
];

export const DashboardPage = () => {
  const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 16],
    ["Silver", 38],
    ["Gold", 31],
    ["Platinum", 26],
    ["Platinum", 26],
    ["Platinum", 16],
    ["Platinum", 26],
    ["Platinum", 26],
    ["Platinum", 31],
    ["Platinum", 33],
    ["Platinum", 50],
    ["Platinum", 33],
    ["Platinum", 13],
  ] as any[][];

  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }: any) {
        console.log(
          "Selected ",
          data[chartWrapper.getChart().getSelection()[0].row + 1]
        );
      },
    },
  ] as ReactGoogleChartEvent[];

  const getFilterPanel = (
    title: string,
    value: string | number,
    change: string,
    positive: boolean,
    color: string,
    circle?: boolean,
    chartData?: number | number[],
    minValueForCircle?: number,
    maxValueForCircle?: number
  ) => {
    const newData: any[][] = clone(data);
    newData.forEach((item, index) => {
      if (index > 0) item.push(color);
    });

    return (
      <Panel classNames={s.panel}>
        <p className={s.filter_title}>{title}</p>
        <div className={s.filter_columns_first}>
          <p className={s.filter_value}>{value}</p>
          <div
            className={circle ? s.circle_chart_container : s.chart_container}
          >
            {!circle && (
              <Chart
                chartType="ColumnChart"
                width="166px"
                height="84px"
                data={newData}
                options={{
                  backgroundColor: "none",
                  legend: "none",
                  hAxis: {
                    textPosition: "none",
                    baselineColor: "white",
                    gridlines: { color: "white" },
                  },
                  vAxis: {
                    textPosition: "none",
                    baselineColor: "none",
                    gridlines: { color: "white" },
                  },
                  tooltip: {
                    trigger: "none",
                  },
                }}
                chartEvents={chartEvents}
              />
            )}
            {circle && (
              <CircleChart
                minValue={minValueForCircle || 0}
                maxValue={maxValueForCircle || 100}
                diameter={56}
                color={color}
                value={chartData as number}
              />
            )}
          </div>
        </div>
        <div className={s.filter_columns_second}>
          <p
            className={classnames(
              s.filter_change,
              positive ? s.positive : s.negative
            )}
          >
            {change}
            <span />
          </p>
          <p className={s.vs_previous_month}>vs previous month</p>
        </div>
      </Panel>
    );
  };

  return (
    <React.Fragment>
      <div className={s.filters_container}>
        {getFilterPanel("New Customers", "3,2k", "34%", false, "#38D72B")}
        {getFilterPanel("Customers Updated", "12,3k", "21%", true, "#FFB500")}
        {getFilterPanel(
          "Subscribed Customers",
          "21,7k",
          "15%",
          false,
          "#87DBFF"
        )}
        {getFilterPanel(
          "Requests Created",
          "08:29",
          "28%",
          true,
          "#AD81E8",
          true,
          33,
          0,
          100
        )}
        {getFilterPanel("Requests Completed", "1,3k", "0.5%", false, "#0891CD")}
      </div>
      <div className={s.dashboard_columns}>
        <div className={s.left_column}>
          <Panel classNames={s.panel}>
            <ListTitle title="Customer Distribution" />
            <MapChart data={TEST_CUSTOMERS} />
          </Panel>
          <Panel classNames={s.panel}>
            <ListTitle title="Merge Stats" actions={[]} />
            <MergeStatsChart data={TEST_MERGE_STATS} />
          </Panel>
          <Panel classNames={s.panel}>
            <ListTitle title="Stages" actions={[]} />
            <div className={s.records_container}>
              <GaugeChart
                minValue={0}
                maxValue={1000}
                value={802}
                formattedValue="802k"
                formattedMinValue="0"
                formattedMaxValue="1M"
                name="Ingestion"
                color="#26C1C9"
              />
              <GaugeChart
                minValue={0}
                maxValue={1000}
                value={545}
                formattedValue="545k"
                formattedMinValue="0"
                formattedMaxValue="1M"
                name="Inicial Filter"
                color="#E89981"
              />
              <GaugeChart
                minValue={0}
                maxValue={1000}
                value={391}
                formattedValue="391k"
                formattedMinValue="0"
                formattedMaxValue="1M"
                name="Outbound"
                color="#E8DC81"
              />
            </div>
          </Panel>
          <Panel classNames={s.panel}>
            <ListTitle title="Records" actions={[]} />
            <div className={s.records_container}>
              <GaugeChart
                minValue={0}
                maxValue={1000}
                value={425}
                formattedValue="425k"
                formattedMinValue="0"
                formattedMaxValue="1M"
                name="Cleansed"
                color="#5CC4AD"
              />
              <GaugeChart
                minValue={0}
                maxValue={1000}
                value={129}
                formattedValue="129k"
                formattedMinValue="0"
                formattedMaxValue="1M"
                name="Standarized"
                color="#E881B7"
              />
              <GaugeChart
                minValue={0}
                maxValue={1000}
                value={551}
                formattedValue="551k"
                formattedMinValue="0"
                formattedMaxValue="1M"
                name="De-Dup"
                color="#87DBFF"
              />
            </div>
          </Panel>
        </div>
        <div className={s.right_column}>
          <Panel classNames={s.panel}>
            <ListTitle title="Frequently Used" actions={[]} />
            <FrequentlyUsedTable items={TEST_FREQUENTLY_USED} />
          </Panel>
          <Panel classNames={s.panel}>
            <ListTitle title="Tasks Assigned" actions={[]} />
            <TasksAssignedList items={TEST_TASKS_ASSIGNED} />
          </Panel>
          <div className={s.panel}>
            <Panel classNames={s.panel}>
              <ListTitle title="Users" actions={[]} />
              <DonutChart
                data={[
                  {
                    value: 25,
                    title: "Mauris non tempo.",
                    color: "#E89981",
                  },
                  {
                    value: 25,
                    title: "Nam porttitor.",
                    color: "#E881B7",
                  },
                  {
                    value: 35,
                    title: "Vestibulum ru.",
                    color: "#E8DC81",
                  },
                  {
                    value: 15,
                    title: "In hac habi.",
                    color: "#5CC4AD",
                  },
                ]}
              />
            </Panel>
            <Panel classNames={s.panel}>
              <ListTitle title="Active Users" actions={[]} />
              <TripleCircleChart
                value={6675}
                title="Active users"
                data={[
                  {
                    minValue: 0,
                    maxValue: 100,
                    value: 90,
                    title: "Mauris",
                    color: "#5CC4AD",
                  },
                  {
                    minValue: 0,
                    maxValue: 100,
                    value: 64,
                    title: "Porttitor",
                    color: "#DE77AD",
                  },
                  {
                    minValue: 0,
                    maxValue: 100,
                    value: 42,
                    title: "Vestibulum",
                    color: "#E8DC81",
                  },
                ]}
              />
            </Panel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
