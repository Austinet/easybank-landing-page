import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { CloseIcon, MenuIcon } from "../utils/icons";
import { useState } from "react";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Careers",
    href: "/careers",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="lg:relative fixed w-full top-0 z-10 bg-white shadow-md">
      <div className="">
        <nav className="w-11/12 lg:w-10/12 mx-auto py-5 flex justify-between items-center">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="Easybank logo" />
            </Link>
          </div>
          <ul
            className={`absolute lg:static bg-white rounded-md flex justify-center items-center gap-4 flex-col lg:flex-row lg:justify-between w-11/12 lg:w-2/5 mx-auto ${
              isMenuOpen ? "top-[-45rem]" : "top-[5rem]"
            } py-5 shadow-md  lg:shadow-none`}
          >
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className="text-[1.25rem] text-grayishBlue font-sans font-semibold hover:border-b-4 hover:border-limeGreen hover:text-darkBlue lg:pb-4"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="lg:hidden outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
          <Link className="hidden lg:block lg:w-[13.5rem] w-[11.5rem] py-[0.9rem] px-7 rounded-[2.35rem] bg-gradient-to-r from-limeGreen to-brightCyan text-white font-semibold text-[1.25rem] text-center hover:opacity-[0.85]">
            Request Invite
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
