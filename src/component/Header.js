
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header(props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{props.heading}</h2>
          <p className="mt-5 text-xl text-gray-500">
            {props.tagline}
          </p>
        </div>
      </div>
    </div>
  )
}
