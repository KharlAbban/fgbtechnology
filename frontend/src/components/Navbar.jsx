import React, { useEffect, useState } from 'react'
import { navbar } from '../utils/data'
import Button from './Button';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const {logoFullDark, logoFullWhite, menuItems} = navbar;
  const [isWhite, setIsWhite] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 90) {
        setIsWhite(true);
      } else {
        setIsWhite(false);
      }
    }

    if (pathname === '/') {
      setIsWhite(false);
      window.addEventListener("scroll", checkScroll);
      return () => window.removeEventListener("scroll", checkScroll);
    } else {
      setIsWhite(true);
    }

  }, [pathname]);

  return (
    <nav className={`z-10 transition-all duration-100 w-screen flex flex-col gap-0 justify-center items-center fixed top-0 backdrop-blur ${isWhite && 'bg-white/90 shadow-lg'}`}>
      <div className={`w-full py-[2px] flex items-center justify-center bg-white/90 max-md:text-sm max-sm:text-xs ${(pathname == '/careers') && 'hidden'}`}>
        🎉 We're hiring! See our <Link to="/careers" className='mx-1 font-semibold'> Careers Page </Link> for more information! 🎊
      </div>
      <div className="container max-w-[1300px] mx-auto px-2 flex items-center justify-between py-3 max-lg:px-3">
        <img src={isWhite ? logoFullDark : logoFullWhite} alt="FG&B" className='w-36' />
        <label htmlFor="myDrawer" className={`lg:hidden ${isWhite ? '' : 'text-white'} hover:text-gray-500 cursor-pointer duration-75`}>
            <AiOutlineMenu size={30} className='mr-3 text-darkGrayishBlue hover:text-veryDarkBlue duration-75' />
        </label>
        <div className={`flex max-lg:hidden text-sm gap-4 items-baseline ${isWhite ? 'text-primaryBlack/70' : 'text-gray-400'}`}>
          {menuItems.map((menuItem, index) => (
            <Link to={menuItem.linkTo} key={index}
              className={
                index == 0 ? `${isWhite ? 'text-primaryBlack' : 'text-gray-100'} text-base`:`${isWhite ? 'hover:text-gray-900' : 'hover:text-gray-100'} duration-75 cursor-pointer`
              }>
                {menuItem.text}
              </Link>
          ))}
        </div>
        <Button bgColor="bg-blue-700" hoverColor="hover:bg-blue-600" shouldGrow={true} classNames={`${pathname === '/contact' && 'opacity-0'} max-lg:hidden`} text={<Link to="/contact">Get in touch</Link>} whiteText={true} />
      </div>
    </nav>
  )
}

export default Navbar
