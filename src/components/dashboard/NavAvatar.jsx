import React, { useState, useRef, useEffect } from 'react';

function NavAvatar() {
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setIsClicked(!isClicked);

    // Explicitly trigger the click event on the dropdown link
    if (dropdownRef.current) {
      dropdownRef.current.click();
    }
  };

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  // Attach a document click event listener to close the dropdown when clicking outside
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <li
      className={`nav-item dropdown nav-user ${isClicked ? 'show' : ''}`}
      onClick={handleDropdownClick}
    >
      <a
        className="nav-link nav-user-img"
        href="#"
        id="navbarDropdownMenuLink2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isClicked}
        ref={dropdownRef}
      >
        <img
          src="assets/images/avatar-1.jpg"
          alt=""
          className="user-avatar-md rounded-circle"
        />
      </a>
      <div
        className={`dropdown-menu dropdown-menu-right nav-user-dropdown ${
          isClicked ? 'show' : ''
        }`}
        aria-labelledby="navbarDropdownMenuLink2"
      >
        <div className="nav-user-info">
          <h5 className="mb-0 text-white nav-user-name">John Abraham </h5>
          <span className="status" />
          <span className="ml-2">Available</span>
        </div>
        <a className="dropdown-item" href="#">
          <i className="fas fa-user mr-2" />
          Account
        </a>
        <a className="dropdown-item" href="#">
          <i className="fas fa-cog mr-2" />
          Setting
        </a>
        <a className="dropdown-item" href="#">
          <i className="fas fa-power-off mr-2" />
          Logout
        </a>
      </div>
    </li>
  );
}

export default NavAvatar;
