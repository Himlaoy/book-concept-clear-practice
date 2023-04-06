import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BeakerIcon, Bars3BottomLeftIcon, BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <div className=' bg-red-300 flex justify-between p-5'>
            <div>
                <Link to={'/'} className='inline-flex ml-3 items-center'>
                    <BoltIcon className='w-8 h-8' />
                    <span className='ml-4'>Next Page</span>
                </Link>
            </div>

            <ul className='items-center space-x-8 lg:flex'>
                <li>
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? 'isActive' : 'default')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/book'} className={({ isActive }) => (isActive ? 'isActive' : 'default')}>
                        Book
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'about'} className={({ isActive }) => (isActive ? 'isActive' : 'default')}>
                        About
                    </NavLink>
                </li>
            </ul>
            <div>
                <button
                aria-label='Open menu' 
                title='Open menu'
                onClick={()=>setIsMenu(true)}
                >

                </button>
            </div>

        </div>
    );
};

export default Header;