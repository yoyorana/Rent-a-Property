import React from 'react';
import Search from '../components/Search';
import { RiArrowDownSLine } from 'react-icons/ri';
const Banner = () => {
  return (
    
    <section className= 'h-full max-h-[640px] mb-8 xl:mb-10'>
    
       <div className=  ' mb-10 flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] mr-[165px] flex justify-between items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[40px] font-semibold leading-none mb-6'>
            Search properties to rent
          </h1>
         <p className='flex justify-between items-center'>Search with search bar <RiArrowDownSLine className='dropdown-icon-secondary' /></p>
        </div>
       
      </div> 
      <Search />
    </section>
  );
};

export default Banner;
