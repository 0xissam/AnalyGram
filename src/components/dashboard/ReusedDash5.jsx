import React, { useState, useEffect } from "react";
// import './dash.css';
// import "assets/vendor/bootstrap/css/bootstrap.min.css"
// import "assets/vendor/fonts/circular-std/style.css"
// import "assets/libs/css/style.css"
import "assets/libs/css/style.css";
import "../../newdash.css";
import "assets/vendor/fonts/fontawesome/css/fontawesome-all.css";
import PageTitle from "./PageTitle";
import Profileinfo from "./Profileinfo";
import Dashfooter from "./Dashfooter";
import { Link } from "react-router-dom";
import Maps from "./Maps";
import Tablelibrary from "./Tablelibrary";
import InstagramCharts from "./Chart2";
import withAuth from "./auth";
import MSP from "./MSP";

// const imagesr = [];
// const videosr = [];

const DisplayStories = ({ images, videos }) => {

  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.target = "_blank"; // This line sets the target to open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (images.length === 0 && videos.length === 0) {
    return <div style={{ textAlign: 'center'}}>No Highlites found.</div>;
  }

  return (
    <>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12"
        >
          <div className="card">
            <div className="card-body">
              <img
                crossOrigin="anonymous"
                src={"https://mycoreproxy-74d7d6780461.herokuapp.com/"+imageUrl}
                alt={`Image ${index}`}
                className="img-fluid"
              />
              <button
                className="btn btn-primary btn-sm btn-block mt-2"
                onClick={() => handleDownload(imageUrl, `image_${index}.jpg`)}
              >
                Download Image
              </button>
            </div>
          </div>
        </div>
      ))}
      {videos.map((videoUrl, index) => (
        <div
          key={index}
          className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12"
        >
          <div className="card">
            <div className="card-body">
              <video crossOrigin="anonymous" controls width="100%" height="auto">
                <source src={"https://mycoreproxy-74d7d6780461.herokuapp.com/"+videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="btn btn-primary btn-sm btn-block mt-2"
                onClick={() => handleDownload(videoUrl, `video_${index}.mp4`)}
              >
                Download Video
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};



function Dash() {
    const [imagesr, setImages] = useState([]);
    const [videosr, setVideos] = useState([]);

    const cardclick = async (id) => {
        setImages([]);
        setVideos([]);
        const proxy = "https://mycoreproxy-74d7d6780461.herokuapp.com/";
        const stories = await fetch(`${proxy}https://snapinst.com/api/ig/highlightStories/${id}`);
        const result = await stories.json();
    
        const images = result.result
          .filter(
            (item) => !item.video_versions || item.video_versions.length === 0
          )
          .map((item) => item.image_versions2?.candidates[0]?.url)
          .filter((url) => url);
    
        const videos = result.result
          .filter((item) => item.video_versions && item.video_versions.length > 0)
          .map((item) => item.video_versions[0].url)
          .filter((url) => url);
    
        // imagesr.push(images);
        // videosr.push(videos);
    
        setImages(images);
        setVideos(videos);
    
    }
    
    
    const DisplayHighlight = ({ id, title, imageUrl, onClick }) => {
      const handleCardClick = async () => {
        cardclick(id);
        if (onClick) {
            onClick(id);
          }
      };
    
      return (
        <div className="col-xl-1 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card" onClick={handleCardClick}>
            <div className="card-body d-flex flex-column align-items-center">
              <div className="mt-1">
                <img
                  crossOrigin="anonymous"
                  src={"https://mycoreproxy-74d7d6780461.herokuapp.com/"+imageUrl}
                //   alt={`Highlight ${id}`}
                  className="img-fluid highliteround"
                />
              </div>
              <div className="d-inline-block">
                <p className="text-muted">{title}</p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    const DisplayHighlights = ({ highlights }) => {
      return (
        <>
          {highlights.map((highlight) => (
            <DisplayHighlight
              key={highlight.id}
              id={highlight.id}
              title={highlight.title}
              imageUrl={highlight.imageUrl}
            />
          ))}
        </>
      );
    };

  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  const [usernamei, setUsernamei] = useState("");
  const [extractedData, setextractedData] = useState([]);
  //   const [images, setImages] = useState([]);
  //   const [videos, setVideos] = useState([]);

  //   const [high, setHight] = useState();

  const logoutFunc = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    console.log("token removed");
  };

  const handleInputChange = (event) => {
    setUsernamei(event.target.value);
  };

  const handleClick = async () => {
    // setImages([]);
    // setVideos([]);
    const proxy = "https://mycoreproxy-74d7d6780461.herokuapp.com/";
    try {
      const response = await fetch(
        `${proxy}https://snapinst.com/api/ig/userInfoByUsername/${usernamei}`
      );
      const data = await response.json();
      // console.log(data);

      const pk_value = data["result"]["user"]["pk"];
      const stories = await fetch(
        `${proxy}https://snapinst.com/api/ig/highlights/${pk_value}`
      );
      const result = await stories.json();
    //   console.log(result);

      const extractedData = result.result.map((item) => ({
        id: item.id,
        title: item.title,
        imageUrl: item.cover_media?.cropped_image_version?.url,
      }));

      setextractedData(extractedData);

      //   const images = result.result
      //     .filter(
      //       (item) => !item.video_versions || item.video_versions.length === 0
      //     )
      //     .map((item) => item.image_versions2?.candidates[0]?.url)
      //     .filter((url) => url);

      //   const videos = result.result
      //     .filter((item) => item.video_versions && item.video_versions.length > 0)
      //     .map((item) => item.video_versions[0].url)
      //     .filter((url) => url);

      //   setImages(images);
      //   setVideos(videos);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <div>
      <body id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/*  <!-- Sidebar --> */}
          <ul className={style} id="accordionSidebar">
            {/*  <!-- Sidebar - Brand --> */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="#"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">AnalyGram</div>
              <div className="text-center d-none d-md-inline">
                <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
                  onClick={changeStyle}
                ></button>
              </div>
            </a>

            {/*   <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/*  <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/analytics">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Analytics</span>
              </Link>
            </li> */}
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/search">
              <i class="fas fa-fw fa-search"></i>
                <span>Search</span>
              </Link>
            </li> */}

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*   <!-- Heading --> */}
            <div className="sidebar-heading">Featers</div>

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fab fa-fw fa-instagram"></i>
                <span>Featers</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">instagram featers:</h6>
                  <Link className="collapse-item" to="/storyviewer">
                    Story viewer
                  </Link>
                  <Link className="collapse-item" to="/highlites">
                    Highlites viewer
                  </Link>
                  <Link className="collapse-item" to="/posts">
                    Posts viewer
                  </Link>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Statistics</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">instagram Statistics:</h6>
                  <Link className="collapse-item" to="/statisics/msp">
                    Most Liked Posts in 2023
                  </Link>
                  <Link className="collapse-item" to="/statisics/ml">
                    Users by Country 2023
                  </Link>
                  <Link className="collapse-item" to="/statisics/r">
                    Richest Influencers in 2023
                  </Link>
                  {/* <a className="collapse-item" href="utilities-other.html">
                    Other
                  </a> */}
                </div>
              </div>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Profile</div>

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-cog"></i>
                <span>Settings</span>
              </a>
              <div
                id="collapsePages"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Account Settings:</h6>
                  <a className="collapse-item" href="login.html">
                    Profile
                  </a>
                  <a className="collapse-item" href="register.html">
                    Register
                  </a>
                  <a className="collapse-item" href="forgot-password.html">
                    Forgot Password
                  </a>
                  <div className="collapse-divider"></div>
                  <h6 className="collapse-header">Other Pages:</h6>
                  <a className="collapse-item" href="404.html">
                    404 Page
                  </a>
                  <a className="collapse-item" href="blank.html">
                    Blank Page
                  </a>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span>
              </a>
            </li> */}

            {/*  <!-- Nav Item - Tables --> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span>
              </a>
            </li> */}

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/*   <!-- Sidebar Toggler (Sidebar) --> */}
            {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}

            {/*  <!-- Sidebar Message --> */}
            {/* <div className="sidebar-card d-none d-lg-flex">
              <img
                className="sidebar-card-illustration mb-2"
                src="img/undraw_rocket.svg"
                alt="..."
              />
              <p className="text-center mb-2">
                <strong>SB Admin Pro</strong> is packed with premium features,
                components, and more!
              </p>
              <a
                className="btn btn-success btn-sm"
                href="https://startbootstrap.com/theme/sb-admin-pro"
              >
                Upgrade to Pro!
              </a>
            </div> */}
          </ul>
          {/*  <!-- End of Sidebar --> */}

          {/*  <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              {/*  <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                {/*  <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>

                {/*  <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                  {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/*   <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  {/*  <!-- Nav Item - Alerts --> */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="alertsDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-bell fa-fw"></i>
                      {/*  <!-- Counter - Alerts --> */}
                      <span className="badge badge-danger badge-counter">
                        3+
                      </span>
                    </a>
                    {/*   <!-- Dropdown - Alerts --> */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="alertsDropdown"
                    >
                      <h6 className="dropdown-header">Alerts Center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 12, 2019
                          </div>
                          <span className="font-weight-bold">
                            A new monthly report is ready to download!
                          </span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 7, 2019
                          </div>
                          $290.29 has been deposited into your account!
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-warning">
                            <i className="fas fa-exclamation-triangle text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 2, 2019
                          </div>
                          Spending Alert: We've noticed unusually high spending
                          for your account.
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Show All Alerts
                      </a>
                    </div>
                  </li>

                  {/*  <!-- Nav Item - Messages --> */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="messagesDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-envelope fa-fw"></i>
                      {/*  <!-- Counter - Messages --> */}
                      <span className="badge badge-danger badge-counter">
                        7
                      </span>
                    </a>
                    {/*   <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="messagesDropdown"
                    >
                      <h6 className="dropdown-header">Message Center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_1.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">
                            Hi there! I am wondering if you can help me with a
                            problem I've been having.
                          </div>
                          <div className="small text-gray-500">
                            Emily Fowler · 58m
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_2.svg"
                            alt="..."
                          />
                          <div className="status-indicator"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            I have the photos that you ordered last month, how
                            would you like them sent to you?
                          </div>
                          <div className="small text-gray-500">
                            Jae Chun · 1d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_3.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            Last month's report looks great, I am very happy
                            with the progress so far, keep up the good work!
                          </div>
                          <div className="small text-gray-500">
                            Morgan Alvarez · 2d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                            alt="..."
                          />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            Am I a good boy? The reason I ask is because someone
                            told me that people say this to all dogs, even if
                            they aren't good...
                          </div>
                          <div className="small text-gray-500">
                            Chicken the Dog · 2w
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Read More Messages
                      </a>
                    </div>
                  </li>

                  <div className="topbar-divider d-none d-sm-block"></div>

                  {/* <!-- Nav Item - User Information --> */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        {localStorage.getItem("name")}
                      </span>
                      <img
                        className="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                    </a>
                    {/*  <!-- Dropdown - User Information --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/*  <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid dashboard-content">
                <PageTitle
                  first="Highlites viewer"
                  secound="Highlites viewer"
                />
                <div className="card">
                  <h5 className="card-header">Enter Username</h5>
                  <div className="card-body">
                    {/* <h4>Input Text</h4> */}
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <span className="input-group-prepend">
                          <span className="input-group-text">@</span>
                        </span>
                        <input
                          type="text"
                          value={usernamei}
                          placeholder="Username"
                          className="form-control"
                          onChange={handleInputChange}
                        />
                        <div className="input-group-append">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleClick}
                          >
                            Search!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <DisplayHighlights highlights={extractedData} />
                </div>
                <div className="card">
                  <h5 className="card-header">Highlites</h5>
                  <div className="card-body">
                    <div className="row">
                      <DisplayStories images={imagesr} videos={videosr} />
                    </div>
                  </div>
                </div>

                {/* <div className="row">
                  <DisplayStories images={images} videos={videos} />
                </div> */}

                {/* <Tablelibrary/> */}
                <Dashfooter />
                {/*  <!-- Page Heading --> */}
                {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div> */}
                {/*  <!-- Content Row --> */}
                {/*  <!-- Content Row --> */}
                {/*   <!-- Content Row --> */}
              </div>
              {/*   <!-- /.container-fluid --> */}
            </div>

            {/* <!-- End of Footer --> */}
          </div>
          {/*  <!-- End of Content Wrapper --> */}
        </div>
        {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/*  <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Sign Out ?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to log out?
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={logoutFunc}>
                  <a href="/">Sign Out</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default withAuth(Dash);
