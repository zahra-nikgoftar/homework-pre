import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center w-full md:w-auto">
            
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            
            <div className="text-xl font-bold w-full text-right md:w-auto md:text-left">
              <p>
                Tailwind <span className="font-medium text-sm">CSS</span>
              </p>
            </div>
          </div>

          
          <div className="hidden md:flex space-x-4">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900   ring-inset hover:bg-gray-50">
                  Features
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Action
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Another action
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Dropdown Submenu
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        404 page
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
            <a href="#" className="hover:bg-gray-200 px-3 py-2 rounded-md">
              About
            </a>
            <a href="#" className="hover:bg-gray-200 px-3 py-2 rounded-md">
              Blog
            </a>
            <a href="#" className="hover:bg-gray-200 px-3 py-2 rounded-md">
              Contact
            </a>
          </div>

         
          <div className="hidden md:flex space-x-2">
            <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md">
              Login
            </button>
            <button className="bg-white border border-black text-black px-4 py-2 rounded-md hover:bg-gray-100">
              Sign Up
            </button>
          </div>
        </div>

      
        {isMobileMenuOpen && (
          <div className="md:hidden space-y-2 ">
            <a
              href="#"
              className="block hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              About
            </a>
            <a
              href="#"
              className="block hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Blog
            </a>
            <a
              href="#"
              className="block hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Contact
            </a>
           
            <div className="flex flex-col space-y-2 mt-4">
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md">
                Login
              </button>
              <button className="bg-white border border-black text-black px-4 py-2 rounded-md hover:bg-gray-100">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
