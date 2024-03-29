import React from "react"

const ResultModal = ({ title, content, callbackFn }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`fixed top-0 left-0 z-[1]  h-full w-full bg-black bg-opacity-20`}
        onClick={() => {
          if (callbackFn) callbackFn()
        }}></div>
      <div className="absolute bg-white shadow dark:bg-gray-700 opacity-100 w-1/4 rounded mt-10 mb-10 px-6 min-w-[600px] z-[2]">
        <div className="justify-center bg-yellow-400 my-6 text-2xl border-b-4 border-gray-500">
          {title}
        </div>
        <div className="text-4xl border-orange-400 border-b-4 py-4">
          {content}
        </div>
        <div className="justify-end flex">
          <button
            className="rounded bg-blue-500 my-4 px-6 py-4 text-lg text-white"
            onClick={() => {
              if (callbackFn) callbackFn()
            }}>
            Close Modal
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultModal
