function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Table(props) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">{props.subtitle}</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            {props.buttonTitle ? props.buttonTitle : "Add"}
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="shadow-sm ring-1 ring-black ring-opacity-5">
              <table
                className="min-w-full border-separate"
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50">
                  <tr>
                    {props.headings.map((value, index) => {
                      const css =
                        "sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8";

                      return (
                        <th scope="col" className={css}>
                          {value}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {props.data.map((datum, datumIdx) => (
                    <tr>
                      {props.schema.map((val) => (
                        <td
                          className={classNames(
                            datumIdx !== props.data.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                          )}
                        >
                          {datum[val]}
                        </td>
                      ))}
                      <td
                        className={classNames(
                          datumIdx !== props.data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "relative whitespace-nowrap py-4 pl-4 text-sm font-medium"
                        )}
                      >
                        <button
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Edit<span className="sr-only"></span>
                        </button>
                        <button
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900 ml-2"
                        >
                          Delete<span className="sr-only"></span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}