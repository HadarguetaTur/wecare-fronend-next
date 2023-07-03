'use client'
import React from 'react';

const MenuItem = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className='py-3 hover:bg-neutral-100 transition font-semibold flex items-center justify-center'
    >
      {label}
    </div>
  );
};

export default MenuItem;