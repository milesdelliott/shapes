import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/Progress.scss";

const Pie = ({value,children}) => {
    return (<svg className="pie" viewBox="0 0 20 20">
    <circle r="10" cx="10" cy="10" fill="white" />
    <circle r="5" cx="10" cy="10" fill="transparent"
            stroke="black"
            stroke-width="10"
            stroke-dasharray={`calc(${value} * 31.4 / 100) 31.4`}
            transform="rotate(-90) translate(-20)" />
            {children}

  </svg>)
}

const Donut = ({value, width = 4}) => {
    return (
        <Pie value={value}>
            <circle r={10-width} cx="10" cy="10" fill="white"></circle>
            <text className="donut-text" x="10" y="12" textAnchor="middle">{value}%</text>
        </Pie>
    );
}

const Bar = ({value}) => {
    return (
        <svg className="bar" viewBox="0 0 106 16">
    <rect className="border" x="0" y="0" height='16' width="106" />
    <rect className="value" x="3" y="3" height='10' width={value} />
  </svg>
    )
}

const Progress = () => {
  return (
      <div>
          <Donut value={53} />
          <Pie value={62} />
          <Bar value={40} />
      </div>
  )
}

export default Progress
