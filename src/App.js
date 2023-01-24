import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import cn from "classnames";

import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { SideBar } from "./components/SideBar";
import { ThirdStep } from "./components/ThirdStep";
import { FourthStep } from "./components/FourthStep";

function App() {
  const form = useForm({
    mode: "onChange", //mode: onChange | onBlur | onSubmit | onTouched | all
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const [step, setStep] = useState(1);
  console.log(step);

  const stepsHandlerNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const stepsHandlerBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  const subType = (el) => {
    console.log(el + "el");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="formWrapper">
          <SideBar step={step} />
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <FirstStep
              step={step}
              form={form}
              stepsHandlerNext={stepsHandlerNext}
            />
            <SecondStep
              step={step}
              form={form}
              stepsHandlerNext={stepsHandlerNext}
              stepsHandlerBack={stepsHandlerBack}
            />
            <ThirdStep
              step={step}
              form={form}
              stepsHandlerNext={stepsHandlerNext}
              stepsHandlerBack={stepsHandlerBack}
            />
            <FourthStep
              step={step}
              form={form}
              stepsHandlerNext={stepsHandlerNext}
              stepsHandlerBack={stepsHandlerBack}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
