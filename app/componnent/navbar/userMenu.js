import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Avatar from '../avatar/avatar';
import MenuItem from './menuIteams';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from "next-auth/react";
import useJoinTheTeamModal from '@/app/hooks/useJoinTheTeamModal';

const UserMenu = ({ currentUser }) => {
    const [isOpen, setIsOpen] = useState(false);
    const registerModal = useRegisterModal();
    const LoginModal = useLoginModal()
    const joinTheTeamModal = useJoinTheTeamModal()


    const toggleOpen = useCallback(() => {
        setIsOpen((prevValue) => !prevValue);
    }, []);

    const onJoinTheTeam = useCallback(() => {
        if (!currentUser) {
            return LoginModal.onOpen();
        }
        joinTheTeamModal.onOpen();
    }, [LoginModal, joinTheTeamModal, currentUser]);

    
    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onJoinTheTeam}
                    className="
              hidden
              md:block
              text-sm 
              cursor-pointer             
           "
                >
                    Join the team!
                </div>
                <div
                    onClick={toggleOpen}
                    className="
            p-4
            md:py-1
            md:px-2
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition
            "
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="
              absolute 
              rounded-xl 
              shadow-md
              w-[40vw]
              md:w-3/4 
              bg-white 
              overflow-hidden 
              right-0 
              top-12 
              text-sm
            "
                >
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem
                                    label="Profile"
                                    onClick={() => { }}
                                />
                                <MenuItem
                                    label="Followers"
                                    onClick={() => { }}
                                />
                                <MenuItem
                                    label="Following"
                                    onClick={() => { }}
                                />
                                <MenuItem
                                    label="My dashboard"
                                    onClick={() => { }}
                                />
                                <hr />
                                <MenuItem
                                    label="Logout"
                                    onClick={() => signOut()}
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    label="Login"
                                    onClick={LoginModal.onOpen}
                                />
                                <MenuItem
                                    label="Sign up"
                                    onClick={registerModal.onOpen}
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
