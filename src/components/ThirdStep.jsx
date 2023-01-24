import React, { useEffect, useState } from "react";
import "../App.css";
import cn from "classnames";

export const ThirdStep = ({
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

  const validate = Object.keys(errors).length === 0;

  const [multiplayer, setMultiplayer] = useState(true);
  const [cloudSave, setCloudSave] = useState(true);
  const [customProfile, setCustomProfile] = useState(true);

  const [yearlySub, setYearlySub] = useState(getValues("YearlySubscribe"));

  useEffect(() => {
    setYearlySub(getValues("YearlySubscribe"));
  }, [step]);

  const clickMultiplayer = () => {
    setMultiplayer(getValues("multiplayer"));
  };
  const clickCloudSave = () => {
    setCloudSave(getValues("cloudSave"));
  };
  const clickCustomProfile = () => {
    setCustomProfile(getValues("customProfile"));
  };

  const goNext = (e) => {
    if (validate) {
      stepsHandlerNext(e);
    }
  };

  return (
    <div
      className={cn("step-three", {
        hidden: step !== 3,
      })}
    >
      <div className="content">
        <div className="header-block">
          <h3>Pick add-ons</h3>
          <p className="header-p">
            Add-ons help enhance your gaming expirience.
          </p>
        </div>
        <div className="billTypesWrapper">
          <div className="billTypes-step3">
            <div className="add">
              <input
                className="checkbox"
                {...register("multiplayer")}
                type="checkbox"
                id="multiplayer"
                onClick={clickMultiplayer}
              />
              <label
                className={cn("box-step3", {
                  checked: multiplayer === false,
                })}
                htmlFor="multiplayer"
              >
                <div className="billInfoWrapper">
                  <div className="billInfo">
                    <h4>Online service</h4>
                    <p>Access to multiplayes games</p>
                  </div>
                  <p
                    className={cn("billPrice", {
                      hidden: yearlySub === true,
                    })}
                  >
                    +1$/mo
                  </p>
                  <p
                    className={cn("billPrice", {
                      hidden: yearlySub === false,
                    })}
                  >
                    +10$/yr
                  </p>
                </div>
              </label>
            </div>
            <div className="add">
              <input
                className="checkbox"
                {...register("cloudSave")}
                type="checkbox"
                id="cloudSave"
                onClick={clickCloudSave}
              />
              <label
                className={cn("box-step3", {
                  checked: cloudSave === false,
                })}
                htmlFor="cloudSave"
              >
                <div className="billInfoWrapper">
                  <div className="billInfo">
                    <h4>Larger storage</h4>
                    <p>Extra 1TB of cloud space</p>
                  </div>
                  <p
                    className={cn("billPrice", {
                      hidden: yearlySub === true,
                    })}
                  >
                    +2$/mo
                  </p>
                  <p
                    className={cn("billPrice", {
                      hidden: yearlySub === false,
                    })}
                  >
                    +20$/yr
                  </p>
                </div>
              </label>
            </div>
            <div className="add">
              <input
                className="checkbox"
                {...register("customProfile")}
                type="checkbox"
                id="customProfile"
                onClick={clickCustomProfile}
              />
              <label
                className={cn("box-step3", {
                  checked: customProfile === false,
                })}
                htmlFor="customProfile"
              >
                <div className="billInfoWrapper">
                  <div className="billInfo">
                    <h4>Customizable profile</h4>
                    <p>Custom theme on your profile</p>
                  </div>
                  <p
                    className={cn("billPrice", {
                      hidden: yearlySub === true,
                    })}
                  >
                    +2$/mo
                  </p>
                  <p
                    className={cn("billPrice", {
                      hidden: yearlySub === false,
                    })}
                  >
                    +20$/yr
                  </p>
                </div>
              </label>
            </div>
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
