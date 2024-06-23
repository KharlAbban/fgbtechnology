import React, { useEffect, useState } from 'react'
import { navbar } from '../utils/data'
import Button from './Button';

const Navbar = () => {
  const {logoFullDark, logoFullWhite, menuItems} = navbar;
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 90) {
        setIsWhite(true);
      } else {
        setIsWhite(false);
      }
    }

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <nav className={`z-10 transition-all duration-100 w-full flex justify-center items-center fixed top-0 py-3 backdrop-blur ${isWhite && 'bg-white/90 shadow-lg'}`}>
      <div className="container max-w-[1300px] px-2 flex items-center justify-between">
        <img src={isWhite ? logoFullDark : logoFullWhite} alt="FG&B" className='w-36' />
        <ul className={`flex text-sm gap-4 items-baseline ${isWhite ? 'text-primaryBlack/70' : 'text-gray-400'}`}>
          {menuItems.map((menuItem, index) => (
            <li key={menuItem}
              className={
                index == 0 ? `${isWhite ? 'text-primaryBlack' : 'text-gray-100'} text-base pointer-events-none`:`${isWhite ? 'hover:text-gray-900' : 'hover:text-gray-100'} duration-75 cursor-pointer`
              }>
                {menuItem}
              </li>
          ))}
        </ul>
        <Button bgColor="bg-blue-700" hoverColor="hover:bg-blue-600" shouldGrow={true} text="Get in touch" whiteText={true} />
      </div>
    </nav>
  )
}

export default Navbar
