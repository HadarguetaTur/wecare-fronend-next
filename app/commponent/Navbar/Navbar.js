"use client"

import Link from "next/link";
import { useState } from 'react';
import { Logo } from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faUserFriends, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';




export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);




    return (
        <nav className="fixed w-full z-10 bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center">
                            <Link legacyBehavior href="/">
                                <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                                    <Logo />
                                </a>
                            </Link>
                        </div>
                        <div className="sm:hidden block">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                            </button>
                            <div className="hidden  space-x-4">
                                <Link legacyBehavior href="/signup">
                                    <a className="text-gray-600 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
                                </Link>
                                <Link legacyBehavior href="/login">
                                    <a className="text-gray-600 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Log In</a>
                                </Link>
                            </div>
                        </div>

                        <div className={`items-center space-x-4 ${isOpen ? 'block' : 'hidden'} sm:flex `}>
                            <div className="hidden sm:flex items-center space-x-4">
                                <Link legacyBehavior href="/notifications">
                                    <a className="text-gray-600 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">
                                        <FontAwesomeIcon icon={faBell} />
                                    </a>
                                </Link>
                                <Link legacyBehavior href="/home">
                                    <a className="text-gray-600 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">
                                        <FontAwesomeIcon icon={faHome} />
                                    </a>
                                </Link>
                                <Link legacyBehavior href="/people">
                                    <a className="text-gray-600 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">
                                        <FontAwesomeIcon icon={faUserFriends} />
                                    </a>
                                </Link>
                                <Link legacyBehavior href="/messages">
                                    <a className="text-gray-600 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </Link>
                                <Link legacyBehavior href="/singup">
                                    <a className="text-gray-600 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
                                </Link>
                                <Link legacyBehavior href="/login">
                                    <a className="text-gray-600 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Log In</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

