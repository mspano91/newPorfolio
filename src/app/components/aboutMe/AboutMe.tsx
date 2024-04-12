"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function AboutMe() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState<"blur">("blur");

  const backdrops: "blur"[] = ["blur"];

  const handleOpen = (selectedBackdrop: "blur") => {
    setBackdrop(selectedBackdrop);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <a
            key={b}
            onClick={() => handleOpen(b)}
            className=" text-white cursor-pointer "
          >
            About me
          </a>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="bg-neutral-700">
          <React.Fragment>
            <ModalHeader className="flex flex-col text-3xl font-semibold">
              About me
            </ModalHeader>
            <ModalBody className="font-thin">
              <p>
                I am a Full-Stack Developer with a clear inclination towards
                Front-End, where I am passionate about the fusion of design and
                technology. As a lifelong resident of Buenos Aires, before
                delving into the world of technology, I obtained a degree in
                auctions and commercial mediation. I also completed studies in
                marketing and relevant UX/UI design courses.
              </p>

              <p>
                In 2022, I lived in Italy, specifically in Rome, where I learned
                to speak Italian and significantly improved my English while
                working in tourism. This journey served me well both personally
                and professionally, encompassing everything that comes with
                stepping out of ones comfort zone.
              </p>
              <p>
                In 2023, I took a leap and trained in modern Fullstack
                application development at Soy Henry Academy. I quickly
                assimilated new concepts, generated ambitious ideas, and
                maintained a positive attitude towards every challenge.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                className="border border-white"
                color="danger"
                variant="light"
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </React.Fragment>
        </ModalContent>
      </Modal>
    </>
  );
}
