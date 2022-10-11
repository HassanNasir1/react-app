import { useState } from "react";
import Delete from "./Delete";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Table(props) {
  const [id, setId] = useState(null);

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-2 mb-8">
      <Delete action={props.onDeleteRow} id={id} setId={setId} />

      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">{props.name}</h1>
          <p className="mt-2 text-sm text-gray-700">{props.subtitle}</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <div className={props.visibility? props.visibility : "visible"}>
          <button
            type="button"
            onClick={props.navigateToRegister} // this is only working for courses for now
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            
          >
            {props.buttonTitle ? props.buttonTitle : "Add"}
          </button>
          </div>
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
                        <th scope="col" className={css} key={index}>
                          {value}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {props.data.map((datum, datumIdx) => (
                    <tr key={datumIdx}>
                      {props.schema.map((val, key) => (
                        <td
                          key={key}
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
                        <button className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                          Edit<span className="sr-only"></span>
                        </button>
                        <button
                          className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-2"
                          onClick={() => setId(datum._id)}
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
