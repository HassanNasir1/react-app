export default function Course() {
  return (
    <form className="space-y-8 divide-y divide-gray-200 m-2 p-4">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Course Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              lorem ipsum d lorem ips lorem ipsum dolor sit amet, consectetur adip
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Course Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="course-name"
                  id="course-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Course Code
              </label>
              <div className="mt-1">
                <input
                  id="course-code"
                  name="course-code"
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                User Type
              </label>
              <div className="mt-1">
                <select
                  id="course-Type"
                  name="course-Type"
                  className="block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Select Course Type</option>
                  <option>programming</option>
                  <option>sports</option>
                  <option>science</option>
                </select>
              </div>
            </div>

          </div>
          
          <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700 my-2 py-2"
              >
                Course Description
              </label>
              <div className="mt-1">
                <textarea
                  rows={4}
                  name="course-description"
                  id="course-description"
                  className="block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue={""}
                />
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
  );
}
