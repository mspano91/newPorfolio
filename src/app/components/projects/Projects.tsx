"use client";
import res1 from "../assets/img/res1.png";
import res2 from "../assets/img/res2.png";
import res3 from "../assets/img/res3.png";
import res4 from "../assets/img/res4.png";

import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/app/components/utils/ui/LayoutGrid";

export default function Projects() {
  return (
    <div className="h-screen py-20 w-full border ">
      <h1 className="text-7xl px-10">Projects</h1>
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
    <div>
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
    <div>
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
    <div>
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
    content: <SkeletonOne video="https://www.youtube.com/embed/7tl0l3bRQjA" />,
    className: "md:col-span-2 flex justify-center",
    thumbnail: res2,
  },
  {
    id: 2,
    content: <SkeletonTwo video="https://www.youtube.com/embed/LREzajthtd8" />,
    className: "col-span-1",
    thumbnail: res1,
  },
  {
    id: 3,
    content: (
      <SkeletonThree video="https://www.youtube.com/embed/zMBfu6kXLPY" />
    ),
    className: "col-span-1",
    thumbnail: res3,
  },
  {
    id: 4,
    content: <SkeletonFour video="https://www.youtube.com/embed/mWmfqrrMUIM" />,
    className: "md:col-span-2",
    thumbnail: res4,
  },
];
