import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col md:justify-start justify-center items-start w-auto xl:w-[1280px] h-[200px] pb-8">
      <div className="w-full">
        <p className="font-extralight text-xs text-center md:text-start px-8 pt-8">
          Developed using Visual Studio Code and powered by Next.js, this
          project incorporates
        </p>
        <p className="font-extralight text-xs text-center md:text-start px-8 pb-4">
          Tailwind for styling and is deployed seamlessly through Vercel.
          Typography is stylized with Inter.
        </p>
        <p className="font-extralight text-xs  text-center md:text-start px-8 ">
          Developed and designed by Spano Matias, © Copyright 2024.
        </p>
      </div>
    </div>
  );
}
