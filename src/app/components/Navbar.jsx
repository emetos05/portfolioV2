import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between sticky top-0 z-10 h-24 bg-green-950/80 text-green-100 px-12">
      <nav className="flex w-full items-center justify-between relative">
        <div>
          <Link href="/">
            <Image
              src="/images/logo_yellow.png"
              alt="logo"
              height={70}
              width={70}
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-8 [&_li:hover]:text-yellow-100">
            <li>
              <Link href="/#intro">Intro</Link>{" "}
            </li>
            <li>
              <Link href="/#experience">Experience</Link>{" "}
            </li>
            <li>
              <Link href="/#projects">Projects</Link>{" "}
            </li>
            <li>
              <Link href="/#connect">Connect</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="md:hidden">hamburger</div>
      </nav>
    </header>
  );
};

export default Navbar;
