import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" dark:text-white mt-4  py-7 ">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-2">
            &copy; {new Date().getFullYear()} Pizza. All rights reserved.
          </p>
          <p className="text-xs ">
            Made with ❤️
            <Link
              href="https://www.facebook.com/ahmed.gouda.785715"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className='text-lg font-bold text-orange-600'>Ahmed gouda</span>
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
