"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

const PresentationCard = () => {
  return (
    // <Card className="w-auto min-h-[210px]  max-h-[210px] bg-neutral-700">
    <Card className=" bg-neutral-700">
      <CardHeader className="flex justify-between pl-4 gap-4">
        <Avatar
          isBordered
          radius="full"
          size="lg"
          src="/assets/mati9.png"
          className="transition-transform duration-300 ease-in-out hover:scale-150 hover:translate-y-4 hover:translate-x-4 z-10"
        />
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-medium text-white font-semibold leading-none">
              Matias Pablo Spano 💻⚡
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @mrspano
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white ">
        <p className="">
          Front-end developer and UI/UX enthusiast. <br />
          Join me on this coding adventure!
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          {/* <p className="font-semibold text-default-400 text-small">4</p> */}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/matias-spano-102b24116/"
          >
            <p className="text-default-300 text-small hover:text-[#609ee4] hover:cursor-pointer">
              Linkedin
            </p>
          </Link>
        </div>
        <div className="flex gap-1">
          <Link target="_blank" href="https://github.com/mspano91">
            <p className="text-default-300 text-small hover:text-[#609ee4] hover:cursor-pointer">
              Github
            </p>
          </Link>
        </div>
        <div className="flex gap-1">
          <Link target="_blank" href="https://www.behance.net/mspanopabl3a5d">
            <p className="text-default-300 text-small hover:text-[#609ee4] hover:cursor-pointer">
              Behance
            </p>
          </Link>
        </div>
        <div className="flex gap-1">
          {/* <p className="font-semibold text-default-400 text-small">97.1K</p> */}

          <a
            download
            href="/assets/SpanoCv.pdf"
            className="text-default-300 text-small hover:text-[#609ee4] hover:cursor-pointer"
          >
            CV 📎
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PresentationCard;
