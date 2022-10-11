import React from "react";

export default function Card(props) {
  console.log("props", props);

  return (
    <div className="grid grid-cols-3">
      {props.course.map((course, index) => {
        return (
          <div className="grid-cols-3">
            <div className="flex justify-center mb-2">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg"
                    src={
                      props.images[index < 10 ? index : index - 10].urls.small
                    }
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {course.courseName}
                  </h5>
                  <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded mb-2">
                    {course.courseCode}
                  </span>
                  <p className="text-gray-700 text-base mb-4 text-justify">
                    {course.courseDescription}
                  </p>
                  {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
