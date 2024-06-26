import React from 'react'
import { Footer, Navbar, SideBar } from '../components'
import { Outlet, useLocation } from 'react-router-dom'

const LayoutPage = () => {
  const {pathname} = useLocation();

  return (
    <div className='drawer w-full p-0 m-0'>
      <input type="checkbox" id="myDrawer" name='drawer-toggle' className='drawer-toggle' />
      <div className={`drawer-content`}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <SideBar />
    </div>
  )
}

export default LayoutPage