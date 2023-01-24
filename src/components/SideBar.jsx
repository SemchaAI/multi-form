import React from "react";

import "../App.css";
import cn from "classnames";

export const SideBar = ({ step }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-block">
        <li className="step">
          <div
            className={cn("step-icon", {
              "step-icon__active": step === 1,
            })}
          >
            1
          </div>
          <div className="step-block">
            <div className="step-number">step 1</div>
            <div className="step-info">your info</div>
          </div>
        </li>
        <li className="step">
          <div
            className={cn("step-icon", {
              "step-icon__active": step === 2,
            })}
          >
            2
          </div>
          <div className="step-block">
            <div className="step-number">step 2</div>
            <div className="step-info">select plan</div>
          </div>
        </li>
        <li className="step">
          <div
            className={cn("step-icon", {
              "step-icon__active": step === 3,
            })}
          >
            3
          </div>
          <div className="step-block">
            <div className="step-number">step 3</div>
            <div className="step-info">add-ons</div>
          </div>
        </li>
        <li className="step">
          <div
            className={cn("step-icon", {
              "step-icon__active": step === 4,
            })}
          >
            4
          </div>
          <div className="step-block">
            <div className="step-number">step 4</div>
            <div className="step-info">summary</div>
          </div>
        </li>
      </ul>
    </div>
  );
};
