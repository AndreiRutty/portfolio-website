import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/property") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed bg-[#ecf0f3] w-full h-24 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-24 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Logo />
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden mr-4"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "md:hidden fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Logo />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-full md:w-[90%] py-4 text-center">
                {"Let's build something legendary together"}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col items-center text-center">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-lg" onClick={handleNav}>
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-lg" onClick={handleNav}>
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-lg" onClick={handleNav}>
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-lg" onClick={handleNav}>
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-lg" onClick={handleNav}>
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-36 pb-4">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {"Let's Connect"}
              </p>
              <div className="flex items-center justify-between my-4 w-full">
                <div className="rounded-full shadow-lg shadow-gray-400 mx-4 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/andrei-rutty-049533223/">
                    <a target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 mx-4 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/AndreiRutty">
                    <a target="_blank">
                      <FaGithub />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
