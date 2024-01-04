"use client";
import "./style.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NextLogo } from "./next-logo";
import { useState } from 'react';
import { ModeToggle } from '@/components/models'

const navItems = [
  {
    path: "/docs",
    name: "Docs",
  },
  {
    path: "/",
    name: "About",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <div className=" navbardiv mx-0 min-lg:z-[10] z-[10] backdrop-blue-md absolute  bg-white    p-[0.4rem] shadow-md dark:bg-[#020420]">
        <div className="mx-auto flex  max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className=" ">
            <div className="flex h-12 items-center px-4 pt-3 ">
              <Link
                href="/"
                className="group flex w-full items-center gap-x-2.5"
              >
                <div className="border-slate group-hover:border-slate/50 h-7 w-7 rounded-full border bg-white">
                  <NextLogo />
                </div>

                <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-slate-950 dark:group-hover:text-[#c0f5e5]">
                  KaliSociety
                </h3>
              </Link>
              {/* <h1 className='pl-56 font-bold  tracking-wider'>AnonymousHatHacker</h1> */}
            </div>
          </div>

          {/* 2. -------------------------------------------------------------div */}
          <div>
            <nav className="min-lg:relative z-[100] flex w-full justify-end gap-2 rounded-lg  pe-10 max-md:hidden">
              {navItems.map((item, index) => {
                const isActive = item.path === pathname;

                return (
                  <Link
                    key={item.path}
                    className={`relative rounded-md px-4 py-2 text-sm no-underline duration-300 ease-in lg:text-base ${
                      isActive
                        ? "font-semibold text-gray-600 dark:text-gray-300"
                        : "text-gray-500 dark:text-gray-500"
                    }`}
                    href={item.path}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
            </nav>
          </div>
          {/* ------------------------------------div 3------------------------------- */}


          <div className=" w-52">
          
            <div className="text-[#020420]  dark:text-white">
            <div className=" ">
               <ModeToggle/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
