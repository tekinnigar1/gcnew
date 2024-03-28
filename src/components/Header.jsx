import React from "react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const linkArray = [
    { text: "Reservations", link: "/reservations" },
    { text: "Vehicles", link: "/vehicles" },
    { text: "Support Center", link: "/support" },
    { text: "Contacts", link: "/contact" },
    { text: "News", link: "/news" },
  ];

  function createLink(link) {
    return (
      <li>
        <a href={link.link}>{link.text}</a>
      </li>
    );
  }

  const clicked = () => {
    setIsOpen((open) => !open);
  };

  const clickedtoclose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={`headerclass${isOpen ? "inopendrop" : ""}`}>
        <div className="container1">
          <img id="logo" src="Group2.png" alt="logo" />
          <div className={`navbarLinks${isOpen ? "isopen" : ""}`}>
            <ul className="links">
              {linkArray.map(createLink)}
              <li>
                <img
                  src="Vector.png"
                  alt="magnifyingGlass"
                  height="18px"
                  width="18px"
                />
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <svg
              className="trigger"
              onClick={clicked}
              id={`barsicon${isOpen ? "isopen" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <button
              type="button"
              onClick={clickedtoclose}
              className="btn-close btn-close-white"
              id={`closebutton${isOpen ? "isopen" : ""}`}
              aria-label="Close"
            ></button>
          </div>
        </div>
      </header>
      <hr class="my-0 opacity-100" />
    </>
  );
}

export default Header;
