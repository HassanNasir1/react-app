import React from "react";

export default function Option(props) {
  return (
    <div >
      <label className="mt-8 block text-sm font-medium text-gray-700">
        {`option ${props.index + 1}`}
      </label>
      <input
        value={props.option}
        onChange={(e) => props.onUpdate(e.target.value)}
        type="text"
        name="question"
        id="question"
        autoComplete="given-name"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}
