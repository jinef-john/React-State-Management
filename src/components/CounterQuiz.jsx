import React, { useState } from "react";

const CounterQuiz = () => {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div className="border-2 border-sky-200 mx-4 p-4 my-3 flex flex-col justify-center bg-sky-50">
      <h1 className="font-bold text-center mt-4 mb-2 text-xl underline underline-offset-4">
        Counter<span className="text-sky-500">Quiz</span>
      </h1>

      {/* We code a slider to select steps betwwen 0 and 10 */}
      <div className="flex justify-around bg-slate-100 rounded-xl">
        <input
          className="w-1/3 border border-gray-400 rounded py-2 px-3"
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <h1 className="text-2xl font-bold text-center my-4">Step: {step} </h1>
      </div>
      <div className="flex justify-around bg-slate-100 rounded-xl">
        <input
          className=" border border-gray-400 rounded py-2 px-3 m-4"
          type="number"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl my-4 mx-2"
          onClick={() => setCounter((count) => count + step)}
        >
          +
        </button>
        <h1 className="text-2xl font-bold text-center my-4 mx-2 overline">
          Count: {counter}{" "}
        </h1>
      </div>

      {/* Reset Button */}
      {(counter !== 0 || step !== 1) && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl my-4 mx-auto"
          onClick={() => {
            setCounter(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      )}

      {/* 2 days Ago was Mon 21 2022 */}
      <h1 className="text-2xl font-bold text-center my-4">
        {counter === 0 ? "Today is " : counter < 0 ? -counter : counter}
        {counter === 0
          ? new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : counter < 0
          ? " days Ago was "
          : " days from today is "}
        {counter === 0
          ? ""
          : new Date(
              new Date().getTime() + counter * 24 * 60 * 60 * 1000
            ).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
      </h1>
    </div>
  );
};

export default CounterQuiz;
