import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
export default function Header() {
  const [toggle, settoggle] = useState(false);
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-white text-2xl" href="#">
        Selvamanan
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggle && (
        <nav className="block md:hidden ">
          <ul
            onClick={() => settoggle(!toggle)}
            className="flex flex-col text-white mobile-nav"
          >
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button className="block md:hidden" onClick={() => settoggle(!toggle)}>
        <Bars3Icon className="size-6 text-white" />
      </button>
    </header>
  );
}
