"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Navbutton from "./Navbutton";
import SearchBar from "./SearchBar";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  

  const links = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signUp", label: "Sign Up" },
  ];

  const [signUp, setSignUp] = useState("");
  return (
    <div className="w-full h-[60px] flex justify-between items-center">

      <div className="flex items-center min-w-[150px] h-full">
          <Image src="/logo.jpg" width={200} height={20} alt="Logo" />
      </div>
      
      
        <div className="hidden lg:flex  w-[350px] h-full lg:justify-center lg:items-center lg:gap-[20px] lg:text-[10px] ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "underline" : ""}
              onClick={()=>setSignUp(link.href)}
            >
              <Navbutton text={link.label} />
            </Link>
          ))}
        </div>
      
      <div className="flex items-center gap-4">
        
        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white z-50 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          
            
            <div className="w-full h- flex justify-end p-5">
              <button className="text-[30px]" onClick={() => setMenuOpen(false)}>
              X
            </button>
            </div>
            

          

            
            <nav className="flex flex-col justify-center items-center gap-4 text-lg">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? "underline" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  <Navbutton text={link.label} />
                </Link>
              ))}
            </nav>
          
        </div>
      )}
    </div>
  );
};

export default Header;
