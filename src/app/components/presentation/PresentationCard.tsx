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
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[540px] bg-neutral-700 ">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="lg" src="/assets/mati7.png" />

          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-medium text-white font-semibold leading-none">
              Mati Spano 💻⚡
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @mrspano
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
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
          {/* <p className="font-semibold text-default-400 text-small">97.1K</p> */}
          <Link target="_blank" href="https://github.com/mspano91">
            <p className="text-default-300 text-small hover:text-[#609ee4] hover:cursor-pointer">
              Github
            </p>
          </Link>
        </div>
        <div className="flex gap-1">
          {/* <p className="font-semibold text-default-400 text-small">97.1K</p> */}

          <a
            download
            href="@/../public/assets/SpanoCv.pdf"
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
