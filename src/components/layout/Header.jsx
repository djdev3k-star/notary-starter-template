import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigation } from '../../constants/navigation';
import Logo from '../common/Logo';
import NavLink from '../navigation/NavLink';

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-sm sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <div
                className="flex items-center cursor-pointer"
                onClick={handleLogoClick}
              >
                <Logo />
              </div>
              <div className="hidden sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <NavLink key={item.name} to={item.href}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-indigo-600">
                  <span className="sr-only">Toggle menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden bg-white shadow-md">
            <div className="space-y-1 py-3 px-4">
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.href} mobile>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
