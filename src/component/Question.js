import React from "react";

export default function Question(props) {
  return (
    <>
      <div>
        <h3 className="text-md font-medium leading-6 text-gray-900 py-4">
          Write Question here
        </h3>

        <input
          value={props.question.question}
          onChange={(e) => props.onUpdate(e.target.value)}
          type="text"
          name="question"
          id="question"
          autoComplete="given-name"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {props.children}
    </>
  );
}
