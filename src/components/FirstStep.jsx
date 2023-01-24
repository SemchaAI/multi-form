import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import cn from "classnames";

export const FirstStep = ({ step, stepsHandlerNext, form }) => {
  const {
    getValues,
    register,
    formState: { errors },
  } = form;

  const [name, setName] = useState(getValues("firstName"));
  const [tel, setTel] = useState(getValues("tel"));
  const [email, setEmail] = useState(getValues("email"));

  const validate =
    Object.keys(errors).length === 0 &&
    name !== undefined &&
    tel !== undefined &&
    email !== undefined;

  const goNext = (e) => {
    if (validate) {
      stepsHandlerNext(e);
    }
  };
  return (
    <div
      className={cn("step-one", {
        hidden: step !== 1,
      })}
    >
      <div className="content">
        <div className="header-block">
          <h3>Personal info</h3>
          <p className="header-p">
            Please provide your name, email adress,and phone number.
          </p>
        </div>
        <div className="content-info">
          <div className="form-control">
            <div className="label-conteiner">
              <label className="label" htmlFor="firstName">
                Name
              </label>
              {errors.firstName && (
                <p
                  className={cn("label", {
                    succes: errors.firstName === undefined,
                    error: errors.firstName !== undefined,
                  })}
                >
                  This field is required.
                </p>
              )}
            </div>
            <input
              className={cn("form-input", {
                succes: errors.firstName === undefined,
                error: errors.firstName !== undefined,
              })}
              type="text"
              placeholder="Semciuc Nikita"
              name="firstName"
              {...register("firstName", {
                required: true,
                maxLength: 20,
              })}
              onBlur={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <div className="label-conteiner">
              <label className="label" htmlFor="email">
                Email Adress
              </label>
              {errors.email && (
                <p
                  className={cn("label", {
                    succes: errors.email === undefined,
                    error: errors.email !== undefined,
                  })}
                >
                  This field is required.
                </p>
              )}
            </div>
            <input
              className={cn("form-input", {
                succes: errors.email === undefined,
                error: errors.email !== undefined,
              })}
              type="email"
              placeholder="example@gmail.com"
              name="email"
              {...register("email", {
                required: true,
                pattern: /.+@.+\..+/i,
              })}
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <div className="label-conteiner">
              <label className="label" htmlFor="email">
                Phone Number
              </label>
              {errors.tel && (
                <p
                  className={cn("label", {
                    succes: errors.tel === undefined,
                    error: errors.tel !== undefined,
                  })}
                >
                  This field is required.
                </p>
              )}
            </div>
            <input
              className={cn("form-input", {
                succes: errors.tel === undefined,
                error: errors.tel !== undefined,
              })}
              type="tel"
              placeholder="e.g. +373 12 3456 78"
              name="tel"
              {...register("tel", {
                required: true,
                pattern: "[+ 0-9]{9-14}",
                minLength: 9,
                maxLength: 14,
              })}
              onBlur={(e) => setTel(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons">
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
