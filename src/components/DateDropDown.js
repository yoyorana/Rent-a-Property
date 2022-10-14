import React, { useContext, useState } from 'react'
import { Menu } from '@headlessui/react'
import {MdOutlineDateRange,MdDateRange} from 'react-icons/md';

import { HouseContext } from './HouseContext';
export default function DateDropDown() {
    const {date,setDate}=useContext(HouseContext);
    const [isOpen,setIsOpen]=useState(false);
   
    const dates= [
        {
          select_date: 'Move-In_Date (Any)',
        },
        {
            select_date: 'Jan - Feb',
        },
        {
            select_date: 'Mar - Apr',
        },
        {
            select_date: 'May - Jun',
        },
        {
            select_date: 'Jul - Aug',
        },
        {
            select_date: 'Sep - Oct',
        },
        {
            select_date: 'Nov - Dec',
        },
      ];
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
      
        <div>
          <div className='text-[13px]'>When</div>
          <div className='text-[15px] font-medium leading-tight'>
            {date}
          </div>
        </div>
        {isOpen ? (
         <MdOutlineDateRange className='dropdown-icon-secondary'/>
        ) : (
            <MdDateRange className='dropdown-icon-secondary'/>
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {dates.map((date, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setDate(date.select_date)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {date.select_date}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}
