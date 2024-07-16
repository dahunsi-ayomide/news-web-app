import React from 'react';
import logo from '@/assets/images/logo.svg';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full py-[1.625rem] px-[2.5rem] fixed right-0 left-0 top-0">
      <div>
        <img src={logo} />
      </div>
      <div>
        <ul className="flex items-center gap-[2.5rem] text-white">
          <li className="text-[0.75rem]">Trading</li>
          <li className="text-[0.75rem]">Opinion</li>
          <li className="text-[0.75rem]">Technology</li>
          <li className="text-[0.75rem]">Sports</li>
          <li className="text-[0.75rem]">Health and Science</li>
        </ul>
      </div>
      <div>
        <button className="border border-[#ffffff80] text-white text-[0.75rem] rounded-full py-[0.5rem] px-[1rem]">
          Sign up for our newsletter{' '}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
