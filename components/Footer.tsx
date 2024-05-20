/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonMagic from "./ui/ButtonMagic";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-1 md:mb-8" id="contact">
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence next step?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to and work together.
        </p>
        <Link href="mailto:zenrsrdev@gmail.com">
          <ButtonMagic
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Sunny
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-30"
              key={item.id}
            >
              <Image src={item.img} alt={`item.id`} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
