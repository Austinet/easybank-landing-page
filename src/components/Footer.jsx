import { Link } from "react-router-dom";
import logo from "../assets/images/white-logo.svg";
import { navLinks, quickLinks} from "../utils/contents";
import {BiLogoFacebookSquare} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoInstagram} from 'react-icons/bi'
import {BiLogoPinterest} from 'react-icons/bi'
import {BiLogoYoutube} from 'react-icons/bi'

const socials = [
  {
    name: "facebook",
    href: "/",
    icon: <BiLogoFacebookSquare size='1.5rem' className="text-white text-xl hover:text-limeGreen"/>
  },
  {
    name: "youtube",
    href: "/",
    icon: <BiLogoYoutube size='1.5rem' className="text-white text-xl hover:text-limeGreen"/>
  },
  {
    name: "twitter",
    href: "/",
    icon: <BiLogoTwitter size='1.5rem' className="text-white text-xl hover:text-limeGreen"/>

  },
  {
    name: "pinterest",
    href: "/",
    icon: <BiLogoPinterest size='1.5rem' className="text-white text-xl hover:text-limeGreen"/>
  },
  {
    name: "instagram",
    href: "/",
    icon: <BiLogoInstagram size='1.5rem' className="text-white text-xl hover:text-limeGreen"/>
  },
];


const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <div className="w-11/12 lg:w-10/12 mx-auto py-5 flex flex-col lg:flex-row lg:justify-between items-center gap-5">
        <div className="lg:flex flex-col lg:gap-[3.5rem] lg:mx-0 mx-auto">
          <img src={logo} alt="Easybank logo" className="mx-auto lg:mx-0" />
          <ul className="flex items-center gap-5 mt-6 lg:mt-0">
            {socials.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-[1.2rem] font-sans font-semibold hover:text-limeGreen"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:w-[400px] lg:w-[300px] flex lg:justify-between lg:flex-row gap-5 flex-col text-center lg:text-left">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.title} className="">
                <Link
                  to={link.href}
                  className="text-[1.2rem] font-sans font-semibold hover:text-limeGreen"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className=" gap-[0.9rem]">
            {quickLinks.map((link) => (
              <li key={link.title} className="mb-[0.9rem]">
                <Link
                  to={link.href}
                  className="text-[1.2rem] font-sans font-semibold hover:text-limeGreen"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:text-right text-center mt-2">
          <Link className="w-[13.5rem] py-[0.9rem] px-7 rounded-[2.35rem] bg-gradient-to-r from-limeGreen to-brightCyan text-white font-semibold text-[1.25rem] text-center hover:opacity-[0.85]">
            Request Invite
          </Link>
          
          <p className="mt-[2.3rem] lg:text-[1.23rem] text-grayishBlue">&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
