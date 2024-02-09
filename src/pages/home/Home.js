import React from "react";
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";

import "./Home.css";
import Features from "../../components/features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home-page">
      <div className="feature-container_home">
        <Features
          title="Revenue"
          amount="112,576.7"
          percent="+10.2"
          icon={<ArrowUpwardIcon className="feature-icon" />}
        />
        <Features
          title="Sale"
          amount="43,453.3"
          percent="+35.6"
          icon={<ArrowUpwardIcon className="feature-icon" />}
        />
        <Features
          title="Cost"
          amount="10,595.7"
          percent="-19.34"
          icon={<ArrowDownwardIcon className="feature-icon negative" />}
        />
      </div>
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
