import React from 'react';
import AnnouncementBar from './AnnouncementBar';

function Header() {
  return (
    <div className='absolute w-full text-xs'>
        <AnnouncementBar />
    <div className='flex py-8 px-16 items-center space-between bg-transparent'>

        <div className='w-[140px]'>
      <svg
      className='tds-icon tds-icon-logo-wordmark tds-site-logo-icon'
    viewBox="0 0 342 35" 
      xmlns="http://www.w3.org/2000/svg"  
      >
        <path 
        d="M238.077 14.382v21.912h7.027V21.705h25.575v14.589h7.022V14.42l-39.624-.038m6.244-7.088h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262m-27.526 29.014c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M131.874 7.196h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415V14.355h-32.42V7.196m-61.603.069h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265m0 14.322h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262m0 14.717h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M0 .088c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1V7.532l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07"
        fill='currentColor'
        ></path>
      </svg>
      </div>
      <div className='flex-1 flex space-between justify-center gap-4 text-sm'>
        <a className='hover:underline'href='#model3'>Model 3</a>
        <a className='hover:underline' href='#modelY'>Model Y</a>
        <a className='hover:underline' href='#modelS'>Model S</a>
        <a className='hover:underline' href='#modelX'>Model X</a>
        <a className='hover:underline'href='#solarPanels'>Solar Panels</a>
        <a className='hover:underline' href='#solarRoofs'>Solar Roofs</a>
        <a className='hover:underline' href='#accessories'>Accessories</a>
      </div>
      <div className='flex justify-right gap-4 text-sm '>
        <a className='hover:underline'>Shop</a>
        <a className='hover:underline'>Account</a>
        <a className='hover:underline'>Menu</a>
      </div>
      </div>
    </div>
  );
}

export default Header;
