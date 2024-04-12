import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import AboutMe from "../aboutMe/AboutMe";

export default function NavBar() {
  return (
    <Navbar className="bg-black  flex flex-row justify-between">
      <NavbarBrand className="">
        <p className="font-bold md:pl-2 text-inherit">MS Front-Dv</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="end">
        <NavbarItem>
          <AboutMe />
        </NavbarItem>
        <NavbarItem>
          <Link href="#skills">
            <p className="cursor-pointer text-end">Skills</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects">
            <p className="cursor-pointer">Projects</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
