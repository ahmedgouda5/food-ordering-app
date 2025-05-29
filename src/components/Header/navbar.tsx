"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PagesNavbar } from "../../../constents";
import { X, Menu as MenuIcon } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  const Token=useSelector((state:RootState) => state.auth.Token);
  

  const links = [
    { id: "menu", title: "Menu", link: PagesNavbar.Menu },
    { id: "about", title: "About", link: PagesNavbar.About },
    { id: "contact", title: "Contact", link: PagesNavbar.Contact },
    { id: "login", title: "Login", link: PagesNavbar.Login },
  ];


  if (!hasMounted) return null;
  //! Filter out the "Login" link if userId is present
  const filteredLinks =Token
    ? links.filter((link) => link.id !== "login")
    : links;

  return (
    <>
      <button
        className="md:hidden p-4"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <MenuIcon className="text-orange-600" size={32} />
      </button>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex items-center  md:flex-row gap-6 md:gap-4 fixed md:static top-0 right-0 left-0 h-[60%] md:h-auto bg-white dark:bg-black p-8 md:p-0 shadow-md md:shadow-none z-10`}
      >
        <X
          className="md:hidden absolute top-5 right-5 text-orange-600 cursor-pointer"
          size={30}
          onClick={() => setIsOpen(false)}
        />
        {filteredLinks.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className={`${
                item.link === PagesNavbar.Login
                  ? "bg-orange-600 dark:text-white text-black px-4 py-2 rounded-full"
                  : "dark:text-white text-black"
              } hover:text-gray-500 transition`}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </>
  );
};

export default Navbar;
