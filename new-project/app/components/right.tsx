'use client';

import { Item, data } from '@/lib/right';
import { NextLogo } from './navbar/next-logo';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export function RightNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed lg:top-16  flex  flex-col border-gray-800 bg-light-950  lg:bottom-0  lg:me-10 lg:border-gray-800">
     
    

      <div
        className='overflow-y-auto w-72 right-0 m-0 p-0 lg:static lg:block'
      >
        <nav className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
        <div className="w-52 content-center">
            <Accordion
              type="single"
              collapsible
              className="w-full content-center ps-3"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="divide-y-2 divide-white">
                  Download
                </AccordionTrigger>

                <AccordionContent>
                 
                 {data.map((data) =>(
                    
                    <GlobalNavItem key={data.slug} item={data} close={close} />
                 ))}
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
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'dark:text-gray-400 text-gray-400 hover:text-gray-900 dark:hover:bg-slate-800 hover:bg-gray-300': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
