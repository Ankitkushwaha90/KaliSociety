"use client";

import { data, demos, type Item , type Page, type Blog} from "@/lib/demos";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useState } from "react";
import { getBlogs } from "@/sanity/sanity-utils";
import {AccordionDemo} from './subnavdata'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export async function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const datablog = await getBlogs();
  console.log(datablog);


  return (
    // <div className="fixed bg-white dark:bg-[#020420] top-16 z-10 flex  flex-col w-full border-gray-800 bg-light-950  lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0   lg:border-gray-800">
    <div className="z-[10] bg-light-950 fixed flex w-full  flex-col bg-white  dark:bg-[#020420] lg:bottom-0 lg:top-16  lg:w-72 ">
      <div className="flex h-14 items-center px-4 py-4 max-lg:hidden lg:h-auto">
        <div className=" rounded-md bg-white dark:bg-[#020420]">
          <div className="relative hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-[#020420] dark:text-white  dark:bg-[#020420] rounded-md border py-2 pl-8 pr-4 focus:border-blue-500 focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-5.2-5.2"
                ></path>
                <circle cx="10" cy="10" r="8"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="z-[100] group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-0 lg:hidden "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-[#020420] dark:text-white dark:group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="w-full space-y-6 bg-white px-2 pb-24 pt-5 dark:bg-[#020420] max-lg:grid max-lg:h-full max-lg:grid-cols-3  max-lg:gap-2 max-sm:grid max-sm:h-full max-sm:grid-cols-2 max-sm:gap-1 ">
          <div className="w-64 content-center">
            <Accordion
              type="single"
              collapsible
              className="w-full content-center ps-3"
            >
              <AccordionItem value="item-1">

                <AccordionTrigger className="divide-y-2 divide-white">
                  WebDesign
                </AccordionTrigger>

                <AccordionContent>
            
                  {datablog.map((page) => (
                    <GlobalNavItem key={page._id} page={page} close={close} />
                  ))} 
                </AccordionContent>
                
              </AccordionItem>

              {/* web design */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="divide-y-2 divide-white">
                  WebDesign3
                </AccordionTrigger>

                <AccordionContent>
                 
                  {/* {blogpages.map((blog) => (
                    <GlobalNavItems key={blog._id} blog={blog}  close={close} />
                  ))} */}
            hgjhgg
                </AccordionContent>
                
              </AccordionItem>
            </Accordion>
            {/* <AccordionDemo/> */}
          </div>
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  page,
  close,
}: {
  page: Blog;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = page.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/docs/webdesign/${page.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-500 hover:bg-gray-100 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-slate-800":
            !isActive,
          "text-white": isActive,
        }
      )}
    >
      {page.slug}
    </Link>
  );
}

