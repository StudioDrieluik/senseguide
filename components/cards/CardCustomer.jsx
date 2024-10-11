import Link from 'next/link';
import React from 'react';

const CardCustomer = ({ logo, text, title, subtitle, link }) => {
  return (
    <div className="md:aspect-square group grid-item md:hover:bg-white outline outline-1 outline-gray-200 transition-colors duration-200">
      <Link href={link}>
        <a className="flex items-start flex-col justify-between h-full p-[2rem] sm:p-[1.5rem] md:p-[2.4rem]">
          <img
            src={logo}
            alt="Logo"
            className="mb-8 md:mb-6 h-[6rem] xl:h-[7rem] 2xl:h-[10rem] w-auto object-contain max-w-[150px] md:max-w-[200px]"
          />
          <div>
            <p className="text-[1.8rem] md:text-[2rem] xl:text-[2.2rem] mb-[3.2rem] text-black leading-snug lg:line-clamp-4 xl:line-clamp-5">
              {text}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="m-0 mb-1 text-[1.6rem] md:text-[1.8rem] font-bold text-black">
                  {title}
                </h3>
                <p className="m-0 text-[1.6rem] md:text-[1.8rem] text-black">{subtitle}</p>
              </div>
              <div className="rounded-full aspect-square w-16 flex border border-solid border-black/10 p-2 shrink-0 group-hover:bg-[--color-primary-200] group-hover:text-white transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-full h-auto"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1Z"
                      fill="currentColor"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CardCustomer;
