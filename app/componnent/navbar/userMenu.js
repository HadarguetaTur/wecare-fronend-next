'use client'
import React, { useCallback, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Avatar from '../avatar/avatar';
import MenuItems from './menuIteams';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((prevValue) => !prevValue);
    }, []);

    return (
        <div className="relative">
            <div className='flex flex-row items-center gap-3'>
                <div
                    onClick={toggleOpen}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-nautral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    {isOpen ? (
                        <AiOutlineClose />
                    ) : (
                        <AiOutlineMenu />
                    )}
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='absolute  shadow-md w-500 bg-white  right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <MenuItems
                            onClick={() => { }}
                            label='login'
                        />
                        <MenuItems
                            onClick={() => { }}
                            label='Join us!'
                        />
                        <MenuItems
                            onClick={() => { }}
                            label='connect'
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
