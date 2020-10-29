import React from "react";
import "./styles/lifebar.scss";

interface RangeProps {
  percentRange: number;
}

interface LifeBarProps {
  life: number;
}

const Range: Function = (props: RangeProps) => {
  return <div className="range" style={{ width: `${props.percentRange}%` }} />;
};

const ProgressBar: Function = (props: RangeProps) => {
  return (
    <div className="progress-bar">
      <Range percentRange={props.percentRange} />
    </div>
  );
};

export const LifeBar: Function = (props: LifeBarProps) => {
  return (
    <div className="progress-bar-surround">
      <ProgressBar percentRange={props.life} />
    </div>
  );
};
