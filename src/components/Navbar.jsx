import React, { useState, useEffect } from "react";
import Logo from "../assets/website/coffee_logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/Cafe/",
  },
  {
    id: 2,
    name: "About",
    link: "/Cafe/#about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/Cafe/#contact",
  },
  {
    id: 4,
    name: "Menu",
    dropdown: [
      { id: 1, name: "Drinks", link: "/Cafe/#drinks" },
      { id: 2, name: "Pastries", link: "/Cafe/#pastries" },
      { id: 3, name: "Dessert", link: "/Cafe/#dessert" },
    ],
  },
];

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close dropdown and mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setDropdownOpen(false);
      setMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white z-auto">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a
            href="/Cafe/"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider font-cursive"
          >
            <img src={Logo} alt="Logo" className="w-14" />
            Kamil's Cafe
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden text-3xl text-white"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoClose /> : <TiThMenuOutline />}
          </button>

          {/* Desktop Links */}
          <ul className="hidden sm:flex items-center gap-4 relative">
            {Menu.map((menu) => (
              <li key={menu.id} className="relative">
                {menu.dropdown ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(!isDropdownOpen)}
                      className="inline-flex items-center text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                      <TiThMenuOutline
                        className={`ml-2 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <ul className="absolute top-full left-0 mt-2 bg-gray-800 shadow-lg rounded-md">
                        {menu.dropdown.map((item) => (
                          <li key={item.id}>
                            <a
                              href={item.link}
                              className="block px-4 py-2 text-white/70 hover:text-white hover:bg-gray-700 duration-200"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <ul className="sm:hidden flex flex-col gap-4 mt-4">
              {Menu.map((menu) => (
                <li key={menu.id} className="relative">
                  {menu.dropdown ? (
                    <>
                      <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="block text-left text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                      >
                        {menu.name}
                      </button>
                      {isDropdownOpen && (
                        <ul className="mt-2 bg-gray-800 shadow-lg rounded-md">
                          {menu.dropdown.map((item) => (
                            <li key={item.id}>
                              <a
                                href={item.link}
                                className="block px-4 py-2 text-white/70 hover:text-white hover:bg-gray-700 duration-200"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={menu.link}
                      className="block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
