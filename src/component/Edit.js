import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import {InformationCircleIcon} from "@heroicons/react/24/outline"

export default function Edit(props) {



  const [err, setErr] = useState("");

  
  const onUpdate = () => {
    console.log('I am here')
    props.setName("");
    props.setArg("");
    props.setType("");
    props.setId(null);
    
    //setErr("");
}




  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={props.id != null} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => props.setId(null)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <InformationCircleIcon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 mt-2"
                    >
                      Update Information
                    </Dialog.Title>
                    <div className="mt-2">
                      <form className="space-y-8 divide-y divide-gray-200 m-2 p-4">
                        <div className="space-y-8 divide-y divide-gray-200">
                          <div className="pt-8">
                            <div>
                              <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Information
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                lorem ipsum d lorem ips lorem ipsum dolor sit
                                amet, consectetur adip
                              </p>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  {props.headings[0]}
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="user-name"
                                    id="user-name"
                                    onChange={(e) => {
                                      props.setName(e.target.value);
                                    }}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  {props.headings[1]}
                                </label>
                                <div className="mt-1">
                                  <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(e) => {
                                      props.setArg(e.target.value);
                                    }}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-3">
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  {props.headings[2]}
                                </label>
                                <div className="mt-1">
                                  <select
                                    id="user-Type"
                                    onChange={(e) => {
                                      props.setType(e.target.value);
                                    }}
                                    name="user-Type"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  >
                                  
                                    <option>{`Select ${props.type}`}</option>
                                    {props.options.map( (value,index) => (
                                      <option key={index}>{value}</option>
                                    ))}
                                    
      
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {err && <p className="mb-5 p-5 text-sm  text-red-900">{err}</p>}
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                   onClick={ () => {
                      
                       props.action(props.id, props.name, props.arg, props.type).then(onUpdate, setErr("")).catch(setErr);
                        
                    }}
                    
                  >
                    Update  
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => props.setId(null)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
