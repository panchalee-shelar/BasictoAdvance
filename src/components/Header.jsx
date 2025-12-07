import React from "react";
function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="img-wrap">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/410/918/non_2x/healthy-food-logo-template-vector.jpg"
            alt="logo"
          />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;