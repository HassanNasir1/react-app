import { useState } from "react";
import Question from "../component/Question";
import Option from "../component/Option";

export default function QuizCreator() {
  const [questions, setQuestions] = useState([
    {
      question: "",
      options: [""],
    },
  ]);

  const updateQuestion = (index) => {
    return (value) => {
      const updatedQuestions = [...questions];
      updatedQuestions[index].question = value;
      setQuestions(updatedQuestions);
    };
  };

  const updateOptions = (idx, index) => {
    return (value) => {
      const updatedQuestions = [...questions];
      updatedQuestions[idx].options[index] = value;
      setQuestions(updatedQuestions);
    };
  };

  const add = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: [""],
      },
    ]);
  };

  const addOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.push("");
    setQuestions(updatedQuestions);
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200 m-2 p-4">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Create a Quiz
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              lorem ipsum d lorem ips lorem ipsum dolor sit amet, consectetur
              adip
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Quiz Difficulty
              </label>
              <div className="mt-1">
                <select
                  id="quiz-Difficulty"
                  name="quiz-Difficulty"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Select Difficulty</option>
                  <option>easy</option>
                  <option>medium</option>
                  <option>hard</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="pt-8">
              {questions.map((question, idx) => (
                <Question
                  key={idx}
                  question={question}
                  onUpdate={updateQuestion(idx)}
                >
                  {question.options.map((option, index) => {
                    return (
                      <Option key={index} index={index} onUpdate={updateOptions(idx, index)} option={option}/>
                    );
                  })}
                  <button
                    onClick={() => addOption(idx)}
                    type="button"
                    className="rounded-md border border-gray-300 bg-white py-2 mt-8 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add Option
                  </button>
                </Question>
              ))}
            </div>
            <button
              onClick={add}
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 mt-8 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Question
            </button>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
