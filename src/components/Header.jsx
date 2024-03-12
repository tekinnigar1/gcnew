import React from "react";

function Header() {
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

  return (
    <>
      <header>
        <div className="container1">
          <img id="logo" src="Group2.png" alt="logo" />
          <div className="navbarLinks">
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
        </div>
      </header>
      <hr />
    </>
  );
}

export default Header;
