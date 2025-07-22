import React from 'react';
import { navigation } from '../../constants/navigation';
import Logo from '../common/Logo';
import NavLink from '../navigation/NavLink';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <Logo className="mx-auto h-10 w-auto" />
          <p className="mt-4 text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Your Notary Business. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;