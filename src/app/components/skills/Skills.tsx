"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Skills = () => {
  const list = [
    {
      title: "JavaScript  >>  TypeScript",
      img: "/assets/skillsPics/jsts.png",
    },
    {
      title: "Next js",
      img: "/assets/skillsPics/next.png",
    },
    {
      title: "Redux toolkit",
      img: "/assets/skillsPics/red.png",
    },
    {
      title: "Node js",
      img: "/assets/skillsPics/nodejs.png",
    },
    {
      title: "Tailwind",
      img: "/assets/skillsPics/tail.png",
    },
    {
      title: "Express Js",
      img: "/assets/skillsPics/ex.jpeg",
    },
    {
      title: "PostgreSQL",
      img: "/assets/skillsPics/pos.png",
    },
    {
      title: "Figma",
      img: "/assets/skillsPics/fig.png",
    },
  ];

  return (
    <div className="py-10 w-full px-8">
      <h1 className="xl:text-5xl text-3xl md:text-start  text-center ">
        Current skills
      </h1>
      <div className="gap-3 grid grid-cols-2 sm:grid-cols-4 py-10">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0 w-auto ">
              <Image
                shadow="sm"
                radius="none"
                width="100%"
                alt={item.title}
                className="w-[290px] object-cover h-[150px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
