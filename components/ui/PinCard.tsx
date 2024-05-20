/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { PinContainer } from "./Pin";
import { FaLocationArrow } from "react-icons/fa";

export function PinCard({
  title,
  des,
  img,
  iconLists = [],
  link
}: {
  title?: string;
  des?: string;
  img?: string;
  iconLists?: string[];
  link: string;
}) {
  return (
    <div className="h-[40rem] sm:w-1/2 w-full flex items-center justify-center">
      <PinContainer
        title={link}
        href={link}
        className="bg-violet-900 bg-opacity-15 backdrop-blur-lg rounded-lg shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 overflow-hidden"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 sm:w-[40vw] w-[80vw] min-h-[25rem] ">
          <div
            className="flex flex-1 w-full rounded-lg my-2 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            style={{
              backgroundImage: `url(${img})`
            }}
          />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{des}</span>
          </div>
          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              {iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`
                  }}
                >
                  <img src={icon} alt="icon5" className="p-2" />
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center">
              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site
              </p>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
