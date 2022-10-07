
const options = [
    { id: 'opt1', title: 'option 1' },
    { id: 'opt2', title: 'option 2' },
    { id: 'opt3', title: 'option 3' },
    { id: 'opt4', title: 'option 4' },
  ]
  
  export default function QuestionAttempt() {
    return (
        <div className="">
        <label className="text-base font-medium text-gray-900">Notifications</label>
        <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p>
        <fieldset className="mt-4">
          <legend className="sr-only">Notification method</legend>
          <div className="space-y-4">
            {options.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  id={option.id}
                  name="option"
                  type="radio"
                  defaultChecked={option.id === 'email'}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={option.id} className="ml-3 block text-sm font-medium text-gray-700">
                  {option.title}
                </label>
              </div>
              
            ))}
          </div>
        </fieldset>
      </div>
    )
  }
  