import React, { useEffect, useState } from "react";
import "../App.css";
import cn from "classnames";

export const FourthStep = ({
  step,
  form,
  stepsHandlerNext,
  stepsHandlerBack,
}) => {
  const {
    register,
    getValues,
    formState: { errors },
  } = form;

  const allData = getValues();

  //bill (arcade, advanced, pro), YearlySubscribe ,cloudSave, customProfile, multiplayer
  const dataArr = [
    allData.bill,
    allData.YearlySubscribe,
    allData.cloudSave,
    allData.customProfile,
    allData.multiplayer,
  ];
  //   console.log(dataArr);
  let moneyBill;
  const coeficient = allData.YearlySubscribe ? 10 : 1;
  const billRegim = coeficient === 1 ? "/mo" : "/yr";
  const multiplayer = allData.multiplayer ? 1 : 0;
  const cloud = allData.cloudSave ? 2 : 0;
  const cProfile = allData.customProfile ? 2 : 0;
  if (allData.bill === "arcade") {
    moneyBill = 9;
  } else if (allData.bill === "advanced") {
    moneyBill = 12;
  } else {
    moneyBill = 15;
  }
  const Total = (moneyBill + multiplayer + cloud + cProfile) * coeficient;

  return (
    <div
      className={cn("step-four", {
        hidden: step !== 4,
      })}
    >
      <div className="content">
        <div className="header-block">
          <h3>Finishing up</h3>
          <p className="header-p">
            Double-check everything looks OK befoure continuing.
          </p>
        </div>
        <ul className="billList">
          <li className="billContainer mb-20">
            <div className="billWrapper">
              <div className="billPack bb">
                {allData.bill}{" "}
                {allData.YearlySubscribe === true ? "(Yearly)" : "(Monthly)"}
              </div>
              <div className="d">
                <a>Change</a>
              </div>
            </div>
            <div className="billPrice  bb">
              ${moneyBill * coeficient}
              {billRegim}
            </div>
          </li>
          {allData.multiplayer && (
            <li className="billContainer">
              <div className="billPack">Online service</div>
              <div className="billPrice">
                +${multiplayer * coeficient}
                {billRegim}
              </div>
            </li>
          )}
          {allData.cloudSave && (
            <li className="billContainer">
              <div className="billPack">Larger storage</div>
              <div className="billPrice">
                +${cloud * coeficient}
                {billRegim}
              </div>
            </li>
          )}
          {allData.customProfile && (
            <li className="billContainer">
              <div className="billPack">Custom profile</div>
              <div className="billPrice">
                +${cProfile * coeficient}
                {billRegim}
              </div>
            </li>
          )}
          <li className="billContainer mt-20">
            <div className="billPack">
              Total (per {allData.YearlySubscribe === true ? "year)" : "month)"}
            </div>
            <div className="billPrice bbm">
              ${Total}
              {billRegim}
            </div>
          </li>
        </ul>
        <div className="buttons mt-100">
          <button className="back" onClick={(e) => stepsHandlerBack(e)}>
            Go Back
          </button>
          <button type="submit" className={cn("next submit")}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
