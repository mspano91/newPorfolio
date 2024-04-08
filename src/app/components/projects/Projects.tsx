"use client";
import res1 from "../../../../public/assets/projectsPics/res1.png";
import res2 from "../../../../public/assets/projectsPics/res2.png";
import res3 from "../../../../public/assets/projectsPics/res3.png";
import res4 from "../../../../public/assets/projectsPics/res4.png";
import React from "react";
import { LayoutGrid } from "@/app/components/utils/ui/LayoutGrid";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <div className="md:h-screen w-full ">
      <h1
        className={`${inter.className} md:text-5xl text-3xl md:text-start px-8 text-center`}
      >
        My Projects
      </h1>
      <LayoutGrid cards={videos} />
    </div>
  );
}

const SkeletonOne = ({ video }: { video: string }) => {
  return (
    <div className="flex flex-row items-center">
      <iframe
        width="870"
        height="400"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const SkeletonTwo = ({ video }: { video: string }) => {
  return (
    <div className="flex flex-row items-center">
      <iframe
        width="870"
        height="400"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
const SkeletonThree = ({ video }: { video: string }) => {
  return (
    <div className="flex flex-row items-center">
      <iframe
        width="870"
        height="400"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
const SkeletonFour = ({ video }: { video: string }) => {
  return (
    <div className="flex flex-row items-center">
      <iframe
        width="870"
        height="400"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const videos = [
  {
    id: 1,
    content: <SkeletonOne video="https://www.youtube.com/embed/W5SLVSjdibk" />,
    className: "md:col-span-2  flex justify-center",
    thumbnail: res1,
  },
  {
    id: 2,
    content: <SkeletonTwo video="https://www.youtube.com/embed/7tl0l3bRQjA" />,
    className: "col-span-1",
    thumbnail: res2,
  },
  {
    id: 3,
    content: (
      <SkeletonThree video="https://www.youtube.com/embed/mWmfqrrMUIM" />
    ),
    className: "col-span-1",
    thumbnail: res4,
  },
  {
    id: 4,
    content: <SkeletonFour video="https://www.youtube.com/embed/zMBfu6kXLPY" />,
    className: "md:col-span-2",
    thumbnail: res3,
  },
];
