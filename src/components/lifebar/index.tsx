import React from "react";
import "./styles/lifebar.scss";

interface RangeProps {
  percentRange: number;
}

interface LifeBarProps {
  life: number;
}

const Range = (props: RangeProps) => {
  return <div className="range" style={{ width: `${props.percentRange}%` }} />;
};

const ProgressBar = (props: RangeProps) => {
  return (
    <div className="progress-bar">
      <Range percentRange={props.percentRange} />
    </div>
  );
};

export const LifeBar = (props: LifeBarProps) => {
  return (
    <div className="progress-bar-surround">
      <ProgressBar percentRange={props.life} />
    </div>
  );
};
