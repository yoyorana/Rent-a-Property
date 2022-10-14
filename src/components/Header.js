import React from 'react';
import {MdEmail} from 'react-icons/md';

import { Link } from 'react-router-dom';

const Header = () => {
  const company={
color:'black',
fontSize:'35px',
fontWeight:'bold'
  }
  

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex  justify-between items-center gap-6 '><MdEmail/>
     <Link style={company}>Estatery</Link> 
      </div>
        <div  to ='/'className=' flex justify-between items-center gap-20'><Link className='text-indigo-500 font-bold'>Rent</Link>
       <Link to='/'>Buy</Link>
       <Link to='/'>Sell</Link>
       <Link to='/'> Manage Property</Link>
        <Link to='/'> Resources</Link>
        </div>
        
        <div className=' flex items-center gap-6    py-2 px-6 rounded md:ml-8 hover: duration-500'>
          <Link className='hover:text-violet-900 transition ' to='/'>
            Log in
          </Link>
          <Link
            className='bg-indigo-500 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>

     );
};

export default Header;
