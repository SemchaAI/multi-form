import React, { useState } from "react";
import "../App.css";
import cn from "classnames";

import { ReactComponent as Arcade } from "../assets/images/icon-arcade.svg";
import { ReactComponent as Advanced } from "../assets/images/icon-advanced.svg";
import { ReactComponent as Pro } from "../assets/images/icon-pro.svg";

export const SecondStep = ({
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

  const [toggle, setToggle] = useState(false);
  const [bill, setBill] = useState(getValues("bill"));

  const validate = Object.keys(errors).length === 0 && bill !== undefined;

  const goNext = (e) => {
    if (validate) {
      stepsHandlerNext(e);
    }
  };

  return (
    <div
      className={cn("step-two", {
        hidden: step !== 2,
      })}
    >
      <div className="content">
        <div className="header-block">
          <h3>Select your plan</h3>
          <p className="header-p">
            You have the option of monthly, or yearly billing.
          </p>
        </div>
        <div className="billTypesWrapper">
          {errors.bill?.type === "required" && (
            <p className="error">Please select one of the bill plans</p>
          )}
          <div className="billTypes">
            <input
              className="Radio-button"
              {...register("bill", {
                required: true,
              })}
              type="radio"
              value="arcade"
              id="arcade"
              onChange={(e) => setBill(e.target.value)}
            />
            <label className="box" htmlFor="arcade">
              <Arcade />
              <div className="billInfo">
                <h4>Arcade</h4>
                <p
                  className={cn({
                    hidden: toggle === true,
                  })}
                >
                  $9/mo
                </p>
                <p
                  className={cn({
                    hidden: toggle === false,
                  })}
                >
                  $90/yr
                </p>
              </div>
              <p
                className={cn({
                  hidden: toggle === false,
                })}
              >
                2 months free
              </p>
            </label>
            <input
              className="Radio-button"
              {...register("bill", {
                required: true,
              })}
              type="radio"
              value="advanced"
              id="advanced"
              onChange={(e) => setBill(e.target.value)}
            />
            <label className="box" htmlFor="advanced">
              <Advanced />
              <div className="billInfo">
                <h4>Advanced</h4>
                <p
                  className={cn({
                    hidden: toggle === true,
                  })}
                >
                  $12/mo
                </p>
                <p
                  className={cn({
                    hidden: toggle === false,
                  })}
                >
                  $120/yr
                </p>
              </div>
              <p
                className={cn({
                  hidden: toggle === false,
                })}
              >
                2 months free
              </p>
            </label>
            <input
              className="Radio-button"
              {...register("bill", {
                required: true,
              })}
              type="radio"
              value="pro"
              id="pro"
              onChange={(e) => setBill(e.target.value)}
            />
            <label className="box" htmlFor="pro">
              <Pro />
              <div className="billInfo">
                <h4>Pro</h4>
                <p
                  className={cn({
                    hidden: toggle === true,
                  })}
                >
                  $15/mo
                </p>
                <p
                  className={cn({
                    hidden: toggle === false,
                  })}
                >
                  $150/yr
                </p>
              </div>
              <p
                className={cn({
                  hidden: toggle === false,
                })}
              >
                2 months free
              </p>
            </label>
          </div>
        </div>
        <div className="plan">
          <div
            className={cn({
              inactive: toggle === true,
            })}
          >
            Monthly
          </div>
          <label className="switch">
            <input
              type="checkbox"
              name="YearlySubscribe"
              onClick={() => setToggle(!toggle)}
              {...register("YearlySubscribe")}
            />
            <span className="slider round"></span>
          </label>
          <div
            className={cn({
              inactive: toggle === false,
            })}
          >
            Yearly
          </div>
        </div>
        <div className="buttons">
          <button className="back" onClick={(e) => stepsHandlerBack(e)}>
            Go Back
          </button>
          <button
            className={cn("next", {
              disabled: validate === false,
            })}
            onClick={(e) => {
              goNext(e);
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};
