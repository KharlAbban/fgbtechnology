import React from 'react'
import { IoAlertCircle } from 'react-icons/io5'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const {message} = useRouteError()

  return (
    <div className=' bg-secondaryBlue text-white text-lg h-screen w-screen flex flex-col gap-6 justify-center items-center'>
      <IoAlertCircle size={50} />
      {message}
      <Link to="/" className="py-2 px-6 rounded-sm bg-transparent border border-white hover:bg-white hover:text-secondaryBlue duration-75 transition-all">Go home</Link>
    </div>
  )
}

export default ErrorPage