import React, { useState } from "react";

const Card = () => {
  // const tasks = 2
  const [tasks, setTasks] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleAddTask() {
    setTasks((currTasks) => currTasks + 1);
  }

  return (
    <div className="mx-4">
      <div className="flex justify-end mt-5 text-center mx-1">
        <button
          className="text-violet-900 text-4xl font-bold
 hover:text-red-500  hover:bg-red-200 rounded-full w-10 h-10 "
          title="Click me"
          onClick={() => {
            setIsOpen((currOpen) => !currOpen);
          }}
        >
          &times;
        </button>
      </div>
      {isOpen && (
        <div className="bg-slate-100 border-2 border-green-700/50 rounded-lg shadow-lg p-4 mt-3 flex flex-col">
          <h1 className="text-violet-700 text-center text-bold text-2xl">
            Simple State Management
          </h1>
          <h2 className="my-4 font-semibold text-center p-2 ">
            This is a simple example of state management in React. In this
            example, we have a card component that displays the number of tasks.
            We can add tasks by clicking the button below. The rest of the
            website is also using state management.
          </h2>
          <h2 className="my-1 font-semibold text-center text-2xl">
            Tasks : {tasks > 0 ? tasks : "No Tasks"}{" "}
          </h2>

          <button
            className="text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-4 py-2 my-4 mx-auto"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      )}{" "}
    </div>
  );
};

export default Card;
