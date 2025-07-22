import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function NavLink({ to, children, className = '', mobile = false }) {
  const baseStyles = mobile
    ? 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
    : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700';

  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={`${baseStyles} ${className} cursor-pointer`}
    >
      {children}
    </ScrollLink>
  );
}

export default NavLink;