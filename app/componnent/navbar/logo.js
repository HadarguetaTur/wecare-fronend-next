'use client'

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../../public/images/CFC.svg';

const Logo = () => {
    return (
      <div className="flex items-center  cursor-pointer">
        <Image
          alt="Logo"
          className="md:block cursor-pointer"
          height={50}
          width={50}
          src={logo}
        />
        <span className="ml-2 text-2xl font-extrabold text-pink-600 leading-none hidden sm:block">weCare</span>
      </div>
    );
  };
  


export default Logo;