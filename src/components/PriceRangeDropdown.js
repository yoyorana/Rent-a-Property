import React, { useState, useContext } from 'react';


import {
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '500 - 2500',
    },
    {
      value: '2500 - 5000',
    },
    {
      value: '5000 - 7500',
    },
    {
      value: '7500 - 10000',
    },
    {
      value: '10000 - 12500',
    },
    {
      value: '12500 - 20000',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
    
        <div>
          <div className='text-[13px]'>Price</div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
