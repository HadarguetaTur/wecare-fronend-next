import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons';

export const Logo = () => {
  return (
    <div className="flex items-center text-pink-500">
      <FontAwesomeIcon icon={faHandsHoldingChild} size="1x" />
      <h1 className="text-2xl ml-2 font-bold">Wecare</h1>
    </div>
  );
};