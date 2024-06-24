import { AiOutlineClose } from 'react-icons/ai'
import {navbar} from "../utils/data"
import { Link } from 'react-router-dom';

const SideBar = () => {
    const {menuItems, logoFullDark} = navbar;

    return (
        <div className="drawer-side z-50 lg:hidden">
            <label htmlFor="myDrawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <aside className="min-h-full bg-white p-6 min-w-72">
                <div className="flex items-center justify-between">
                <img src={logoFullDark} alt="FG&B" className='w-20' />
                    <label htmlFor="myDrawer" aria-label="close sidebar" className="cursor-pointer">
                        <AiOutlineClose className='hover:text-gray-600 duration-75' size={22} />
                    </label>
                </div>

                <main className='mt-8 flex flex-col gap-4'>
                    {menuItems.map(menuItem => {
                        return (
                            <Link to={menuItem.linkTo} key={menuItem.text} className='font-bold text-lg capitalize hover:text-gray-500 duration-75 cursor-pointer'>{menuItem.text}</Link>
                        )
                    })}
                </main>
            </aside>
        </div>
    )
}

export default SideBar
