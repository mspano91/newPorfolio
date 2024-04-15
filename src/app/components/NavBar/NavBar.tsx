"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import AboutMe from "../aboutMe/AboutMe";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar className="bg-black flex flex-row justify-between">
      <NavbarBrand className="">
        <p
          className="font-bold md:pl-2 text-inherit"
          onClick={() => smoothScroll("home")}
        >
          MS Front-Dv
        </p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="start">
        <NavbarItem>
          <AboutMe />
        </NavbarItem>
        <NavbarItem>
          <p
            className="cursor-pointer text-end"
            onClick={() => smoothScroll("skills")}
          >
            Skills
          </p>
        </NavbarItem>
        <NavbarItem>
          <p
            className="cursor-pointer"
            onClick={() => smoothScroll("projects")}
          >
            Projects
          </p>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
