import Link from "next/link";
import { FaChartLine } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import NavButton from "./NavButton";

const NavBar = () => {
  const navItems = [
    { path: "/", name: "Home", icon: <IoHomeOutline /> },
    { path: "/timeline", name: "TimeLine", icon: <IoMdTime /> },
    { path: "/states", name: "States", icon: <FaChartLine /> },
  ];
  return (
    <div className={` navbar bg-base-100 shadow-sm justify-between`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((nav, i) => (
              <NavButton key={i} nav={nav} />
            ))}
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-1 font-semibold">
          <div className="bg-[#1a3a30] text-white px-3 py-1 text-lg rounded-lg">K</div>

          <div className="text-2xl">
            <span className="font-bold text-black">Keen</span>
            <span className="text-[#244d3f]">Keeper</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          {navItems.map((nav, i) => (
            <NavButton key={i} nav={nav} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
