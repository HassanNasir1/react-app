
export default function Quiz() {
    return (
      <form className="space-y-8 divide-y divide-gray-200 m-2 p-4">
        <div className="space-y-8 divide-y divide-gray-200">

  
          <div className="pt-8">

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
  
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Quiz Difficulty
                </label>
                <div className="mt-1">
                  <select
                    id="quiz-difficulty"
                    name="quiz-difficulty"
                    className="block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Select Difficulty</option>
                    <option>easy</option>
                    <option>medium</option>
                    <option>hard</option>
                  </select>
                </div>
              </div>
  


            </div>
          </div>

        </div>
  
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    )
  }
  