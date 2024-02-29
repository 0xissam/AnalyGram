import React, {useState} from 'react'

function NavNotice() {

    const [isClicked, setIsClicked] = useState(false);
      
        const handleDropdownClick = () => {
          setIsClicked(!isClicked);
        };

  return (
    <li className={`nav-item dropdown notification ${isClicked ? 'show' : ''}`} onClick={handleDropdownClick}>
          <a
            className="nav-link nav-icons"
            href="#"
            id="navbarDropdownMenuLink1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-fw fa-bell" /> <span className="indicator" />
          </a>
          <ul className={`dropdown-menu dropdown-menu-right notification-dropdown ${isClicked ? 'show' : ''}`}>
            <li>
              <div className="notification-title"> Notification</div>
              <div
                className="slimScrollDiv"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "auto",
                  height: 250
                }}
              >
                <div
                  className="notification-list"
                  style={{ overflow: "hidden", width: "auto", height: 250 }}
                >
                  <div className="list-group">
                    <a
                      href="#"
                      className="list-group-item list-group-item-action active"
                    >
                      <div className="notification-info">
                        <div className="notification-list-user-img">
                          <img
                            src="assets/images/avatar-2.jpg"
                            alt=""
                            className="user-avatar-md rounded-circle"
                          />
                        </div>
                        <div className="notification-list-user-block">
                          <span className="notification-list-user-name">
                            Jeremy Rakestraw
                          </span>
                          accepted your invitation to join the team.
                          <div className="notification-date">2 min ago</div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      <div className="notification-info">
                        <div className="notification-list-user-img">
                          <img
                            src="assets/images/avatar-3.jpg"
                            alt=""
                            className="user-avatar-md rounded-circle"
                          />
                        </div>
                        <div className="notification-list-user-block">
                          <span className="notification-list-user-name">
                            John Abraham{" "}
                          </span>
                          is now following you
                          <div className="notification-date">2 days ago</div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      <div className="notification-info">
                        <div className="notification-list-user-img">
                          <img
                            src="assets/images/avatar-4.jpg"
                            alt=""
                            className="user-avatar-md rounded-circle"
                          />
                        </div>
                        <div className="notification-list-user-block">
                          <span className="notification-list-user-name">
                            Monaan Pechi
                          </span>{" "}
                          is watching your main repository
                          <div className="notification-date">2 min ago</div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      <div className="notification-info">
                        <div className="notification-list-user-img">
                          <img
                            src="assets/images/avatar-5.jpg"
                            alt=""
                            className="user-avatar-md rounded-circle"
                          />
                        </div>
                        <div className="notification-list-user-block">
                          <span className="notification-list-user-name">
                            Jessica Caruso
                          </span>
                          accepted your invitation to join the team.
                          <div className="notification-date">2 min ago</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="slimScrollBar"
                  style={{
                    background: "rgb(0, 0, 0)",
                    width: 7,
                    position: "absolute",
                    top: 0,
                    opacity: "0.4",
                    display: "block",
                    borderRadius: 7,
                    zIndex: 99,
                    right: 1
                  }}
                />
                <div
                  className="slimScrollRail"
                  style={{
                    width: 7,
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    display: "none",
                    borderRadius: 7,
                    background: "rgb(51, 51, 51)",
                    opacity: "0.2",
                    zIndex: 90,
                    right: 1
                  }}
                />
              </div>
            </li>
            <li>
              <div className="list-footer">
                {" "}
                <a href="#">View all notifications</a>
              </div>
            </li>
          </ul>
        </li>
  );
}

export default NavNotice;