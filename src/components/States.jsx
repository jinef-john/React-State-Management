import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const States = () => {
  // let step = 2;

  const [step, setStep] = useState(1);

  function handlePrevious() {
    step > 1 && setStep((currStep) => currStep - 1);
  }

  function handleNext() {
    step < 3 && setStep((currStep) => currStep + 1);
  }

  return (
    <>
      <div className="bg-[#f7f7f7] p-4 border-2 border-green-700/50 mx-4 my-3 rounded-md">
        <h1 className="text-2xl font-bold text-center overline text-sky-700">
          More <span className="text-purple-700">State Management </span>
          in React
        </h1>
        <div className="flex justify-around py-5 text-white ">
          <div
            className={`${
              step >= 1 ? "bg-violet-700" : ""
            } rounded-full bg-[#7a7676] w-8 h-8 text-center py-1`}
          >
            1
          </div>
          <div
            className={`${
              step >= 2 ? "bg-violet-700" : ""
            } rounded-full bg-[#7a7676] w-8 h-8 py-1 text-center`}
          >
            2
          </div>

          <div
            className={`${
              step >= 3 ? "bg-violet-700" : ""
            } rounded-full bg-[#7a7676] w-8 h-8 py-1 text-center`}
          >
            3
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mt-4">
          Step {step} : {messages[step - 1]}{" "}
        </h1>
        {/* prev and Next button */}
        <div className="flex justify-around mt-10">
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 w-20 rounded-full px-4 py-1 m-2"
            onClick={handlePrevious}
          >
            Prev
          </button>
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 w-20 rounded-full px-4 py-1 m-2"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default States;
