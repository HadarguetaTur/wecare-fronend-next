'use client'

import React from 'react';
import Image from 'next/image';

import placeHolder from '../../../public/images/avatar.png';

const Avatar = ({src}) => {
    return (
        <Image
          alt="Avatar"
          className="rounded-full"
          height={30}
          width={30}
          src={src || placeHolder}
        />    
    );
  };
  


export default Avatar;