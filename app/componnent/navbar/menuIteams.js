'use client'
import React from 'react';

const MenuItems = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className='px-24 py-3 hover:bg-neutral-100 transition font-semibold'
    >
      {label}
    </div>
  );
};

export default MenuItems;