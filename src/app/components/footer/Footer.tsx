import React from "react";

export default function Footer() {
  return (
    <div className="flex px-8">
      {/* <div className="flex border flex-col md:justify-start justify-center items-start w-auto xl:w-full lg:justify-start h-full pb-8"> */}
      <div className="w-auto">
        <p className="font-extralight  text-xs text-center md:text-start px-6 pt-8">
          Developed using Visual Studio Code and powered by Next.js, this
          project incorporates Tailwind for styling and is deployed seamlessly
          through Vercel.
        </p>
        <p className="font-extralight text-xs text-center md:text-start px-6 ">
          Typography is stylized with Inter.
        </p>
        <br />
        <p className="font-extralight text-xs text-center md:text-start px-6 ">
          Developed and designed by Spano Matias, © Copyright 2024.
        </p>
      </div>
    </div>
  );
}
