'use client';

import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function NavBar({ toggleTheme, theme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} mb-20`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Portfolio</span>
            <h2 className='text-xl2 font-semibold'>Pierre Sitorus</h2>
          </a>
        </div>
        
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#About-Me" className={`text-sm font-semibold leading-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </a>
          <a href="#technologies" className={`text-sm font-semibold leading-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Technologies
          </a>
          <a href="#projects" className={`text-sm font-semibold leading-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Projects
          </a>
          <a href="#contact" className={`text-sm font-semibold leading-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Contact
          </a>
        </PopoverGroup>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 rounded-full p-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-6 w-6 text-white" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Theme Toggle Button for large screens */}
        <div className="hidden lg:flex">
          <button
            onClick={toggleTheme}
            className="ml-6 rounded-full p-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-6 w-6 text-white" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black opacity-50" />
        <DialogPanel className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
        } px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Portfolio</span>
              <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=white" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#About-Me"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    theme === 'dark' ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  About Me
                </a>
                <a
                  href="#technologies"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    theme === 'dark' ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Technologies
                </a>
                <a
                  href="#projects"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    theme === 'dark' ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    theme === 'dark' ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}