import React, { useState, useEffect } from "react";
import profil from "../../assets/images/blank-profile-picture-973460_640.png";
import InstagramCharts from "./Chart2";
import TableProfile from "./TableProfile";

function Profileinfo() {
  const handleInputChange = (event) => {
    setUsernamei(event.target.value);
  };

  const [fetchDataOnButtonClick, setFetchDataOnButtonClick] = useState(false);
  const [usrnamechart, setUsrnamechart] = useState("");

  const [userid, setId] = useState();
  const [usernamei, setUsernamei] = useState("");
  const [username, setUsername] = useState("");
  const [biographylinks, setBiographylinks] = useState("");
  const [fullname, setFullname] = useState("");
  const [category, setCategory] = useState("");
  const [profilepic, setProfilepic] = useState(profil);
  const [mlink, setmlink] = useState("");
  const [totalig, setTotalig] = useState("0");

  const [followers, setFollowers] = useState("0");
  const [following, setFollowing] = useState("0");
  const [posts, setPosts] = useState("0");
  const [verified, setVerified] = useState();

  const [buss, setBuss] = useState("");
  const [pro, setPro] = useState("");
  const [hide, setHide] = useState("");
  // const [high, setHigh] = useState("0");
  const [userProfiles, setUserProfiles] = useState([]);

  const [result, setResult] = useState("");

  function formatNumberWithSuffix(number) {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "B";
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "M";
    } else if (number >= 1e3) {
      return number / 1e3 + "K";
    } else {
      return number.toString();
    }
  }

  async function fetchInstagramUserInfo(usernamei) {
    const url = `https://snapinst.com/api/ig/userInfoByUsername/${usernamei}`;
    const apiUrl2 = `https://mycoreproxy-74d7d6780461.herokuapp.com/${url}`;

    try {
      const response = await fetch(apiUrl2);

      if (response.ok) {
        const data = await response.json();
        const user_info = data.result.user;
        // console.log(data)
        // const hd_profile_pic_info = user_info.hd_profile_pic_url_info || {};
        const linkinbio = user_info.bio_links.url;
        // setProfilepic(user_info.hd_profile_pic_versions[0].url);
        // console.log(userid)
        setId(user_info.pk);
        setResult(user_info.biography);
        setFullname(user_info.full_name);
        setBiographylinks(linkinbio);
        setVerified(user_info.is_verified);
        setUsername(usernamei);
        setBuss(user_info.is_business);
        setPro(user_info.is_private);
        setCategory(user_info.category);
        setHide(user_info.has_highlight_reels);
        setTotalig(user_info.total_igtv_videos);
        setFollowers(
          formatNumberWithSuffix(parseInt(user_info.follower_count))
        );
        setFollowing(
          formatNumberWithSuffix(parseInt(user_info.following_count))
        );
        setPosts(formatNumberWithSuffix(parseInt(user_info.media_count)));
      } else {
        console.error(`Error: ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  const similaruser = async () => {
    const apiUrl = `https://api.instagapi.com/userfollowers/6380930/12/`; // Replace with the actual API URL

    const headers = new Headers({
      "X-InstagAPI-Key": "a1ba6d8814bee7c082a9b667f5a6542d", // Add your custom headers here cf54d7f29ffb86fb2ff0d938bd19ea3a
    });

    try {
      const response = await fetch(
        `https://mycoreproxy-74d7d6780461.herokuapp.com/${apiUrl}`,
        {
          method: "GET",
          headers: headers,
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        const data = responseData.data;
        console.log(data);
        const userProfileData = data.map((node) => ({
          profileicon: node.user.profile_pic_url,
          id: node.user.pk,
          fullname: node.user.full_name,
          username: node.user.username,
          isPrivate: node.user.is_private ? "Yes" : "No",
          isVerified: node.user.is_verified ? "Yes" : "No",
        }));

        setUserProfiles(userProfileData);
        console.log(userProfileData);
      }
    } catch (error) {
      // console.error(error.message);
      // document.alert("user not exist");
      console.log(error);
    }
  };

  const handleClick = async () => {
    setFetchDataOnButtonClick(true);
    // console.log(usernamei);
    try {
      const apiUrl = `https://graph.facebook.com/v19.0/17841437298001132?fields=business_discovery.username(${usernamei})%7Bfollowers_count%2Cmedia_count%2Cprofile_picture_url%2Cbiography%2Cusername%2Cwebsite%2Cname%2Cfollows_count%7D&access_token=EAAP5ttMtQSoBO89XdG914q7Ui1uLxpXJTwK6YBlHjXoXiKhlEpQRZBlr8OPqVepZBsw7HZCObBZAUNkDyr8KR2ICDcNYlalMwZCSPkZAEHjI0KpFoShZAiZA7Xsm6Dgu8OVOOZAo5pkYCZA7uRrx1TtwVCUzkGIfh1lu9lViROrEfuxQsdJEsgj61ZCCLVa`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      // console.log(data)

      if (response.ok) {
        const profilePictureUrl = data.business_discovery.profile_picture_url;
        // console.log("Profile Picture URL:", profilePictureUrl);

        setProfilepic(profilePictureUrl);
        setmlink(data.business_discovery.website);
        // setFullname(data.business_discovery.name);
        // similaruser();
      } else {
        console.error("Error fetching data:", data);
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
    // const apiUrl2 = `https://api.instagapi.com/userinfo/${usernamei}`; // Replace with the actual API URL

    // const headers = new Headers({
    //   'X-InstagAPI-Key': '97e4b0cee0434e165456eb8373c0b776', // Add your custom headers here
    // });

    // try {
    //   const response = await fetch(`https://cors-anywhere.herokuapp.com/${apiUrl2}`, {
    //     method: 'GET',
    //     headers: headers,
    //   });
    //   if (!response.ok) {
    //     console.log(response);
    //   }
    //   const data = await response.json();
    //   const apidata = data.data;
    //   setId(apidata.id);
    //   setUsername(apidata.username);
    //   setBiography(apidata.biography);
    //   setCategory(apidata.category_enum);
    //   // setProfilepic(apidata.profile_pic_url);
    //   console.log(apidata.profile_pic_url);
    //   setmlink(apidata.external_url);
    //   setPosts(formatNumberWithSuffix(parseInt(apidata.edge_owner_to_timeline_media.count)));
    //   setFollowers(formatNumberWithSuffix(parseInt(apidata.edge_followed_by.count)));
    //   setFollowing(formatNumberWithSuffix(parseInt(apidata.edge_follow.count)));
    //   setVerified(apidata.is_verified);

    //   setBuss(apidata.is_business_account);
    //   setPro(apidata.is_professional_account);
    //   setHide(apidata.hide_like_and_view_counts);
    //   setHigh(apidata.highlight_reel_count);

    // similaruser();

    try {
      fetchInstagramUserInfo(usernamei);
      // setResult(result.hd_profile_pic_url);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   similaruser();
  // }, []);

  // const fetchData = async () => {
  //   const apiUrl = 'https://api.example.com/data'; // Replace with the actual API URL

  //   const headers = new Headers({
  //     'X-InstagAPI-Key': 'a1ba6d8814bee7c082a9b667f5a6542d', // Add your custom headers here
  //   });

  //   try {
  //     const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.instagapi.com/handemiyy", {
  //       method: 'GET',
  //       headers: headers,
  //     });

  //     if (!response.ok) {
  //       console.error(response);
  //     }

  //     const data = await response.json();
  //     // setData(data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <>
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
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card influencer-profile-data">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="text-center">
                    <img
                      src={profilepic}
                      alt="User Avatar"
                      className="rounded-circle user-avatar-xxl"
                    />
                  </div>
                </div>
                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12">
                  <div className="user-avatar-info">
                    <div className="m-b-20">
                      <div className="user-avatar-name">
                        <h2 className="mb-1">{username}</h2>
                      </div>
                      <div className="rating-star d-inline-block">
                        {verified !== undefined && (
                          <i
                            className={`fa ${
                              verified ? "fa-check-circle" : ""
                            } fa-fw fa-sm text-brand`}
                          />
                        )}
                        {/* <i className="fa fa-fw fa-star" />
                  <i className="fa fa-fw fa-star" />
                  <i className="fa fa-fw fa-star" />
                  <i className="fa fa-fw fa-star" />
                  <i className="fa fa-fw fa-star" /> */}
                        {/* <p className="d-inline-block text-dark">14 Reviews </p> */}
                      </div>
                      <br />
                    </div>
                    {/*  <div class="float-right"><a href="#" class="user-avatar-email text-secondary">www.henrybarbara.com</a></div> */}
                    <div className="user-avatar-address">
                      <p className="pb-3">
                        <span className="d-xl-inline-block d-block mb-2">
                          {/* <i className="fa fa-map-marker-alt mr-2 text-primary " /> */}
                          {fullname}
                        </span>
                        {/* <br /> */}
                        <span className="d-xl-inline-block d-block mb-2">
                          {category}
                        </span>
                        {/* <br /> */}
                        <span className=" d-xl-inline-block d-block mb-2">
                          {result}
                        </span>
                        {/* <br /> */}
                        <a
                          href={mlink}
                          className="badge badge-info mr-1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {mlink}
                        </a>
                        <span className=" badge badge-light mr-1">
                          {biographylinks}
                        </span>
                      </p>
                      {/* <div className="mt-3">
                        <a
                          href={mlink}
                          className="badge badge-primary mr-1"
                          target="_blank"
                        >
                          {mlink}
                        </a>{" "}
                        <a href="#" className="badge badge-light mr-1">
                          Life Style
                        </a>{" "}
                        <a href="#" className="badge badge-light">
                          Gym
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top user-social-box">
              <div className="user-social-media d-xl-inline-block">
                <span className="mr-2 twitter-color">
                  {" "}
                  {/* <i className="fab fa-twitter-square" /> */}
                </span>
                <span>
                  Business Account{" "}
                  {buss ? (
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "blue" }}
                    ></i>
                  ) : (
                    <i
                      className="far fa-times-circle"
                      style={{ color: "red" }}
                    ></i>
                  )}
                </span>
              </div>
              <div className="user-social-media d-xl-inline-block">
                <span className="mr-2  pinterest-color">
                  {" "}
                  {/* <i className="fab fa-pinterest-square" /> */}
                </span>
                <span>
                  Private Account{" "}
                  {pro ? (
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "blue" }}
                    ></i>
                  ) : (
                    <i
                      className="far fa-times-circle"
                      style={{ color: "red" }}
                    ></i>
                  )}
                </span>
              </div>
              <div className="user-social-media d-xl-inline-block">
                <span className="mr-2 instagram-color">
                  {" "}
                  {/* <i className="fab fa-instagram" /> */}
                </span>
                <span>
                  Account has highlight reels{" "}
                  {hide ? (
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "blue" }}
                    ></i>
                  ) : (
                    <i
                      className="far fa-times-circle"
                      style={{ color: "red" }}
                    ></i>
                  )}
                </span>
              </div>
              <div className="user-social-media d-xl-inline-block">
                <span className="mr-2  facebook-color">
                  {" "}
                  {/* <i className="fab fa-facebook-square " /> */}
                </span>
                <span>
                  Total Igs Videos
                  <span style={"high" === "0" ? { color: "red" } : { color: "blue" }}>
                    {" " + totalig}
                    {/* {"0"} */}
                  </span>
                </span>
              </div>
              {/* <div className="user-social-media d-xl-inline-block ">
          <span className="mr-2 medium-color">
            {" "}
            <i className="fab fa-medium" />
          </span>
          <span>291</span>
        </div>
        <div className="user-social-media d-xl-inline-block">
          <span className="mr-2 youtube-color">
            {" "}
            <i className="fab fa-youtube" />
          </span>
          <span>1291</span>
        </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* ============================================================== */}
        {/* four widgets   */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* total views   */}
        {/* ============================================================== */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Total Posts</h5>
                <h2 className="mb-0">{posts}</h2>
              </div>
              <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                <i className="fa fa-eye fa-fw fa-sm text-info" />
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end total views   */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* total followers   */}
        {/* ============================================================== */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Total Followers</h5>
                <h2 className="mb-0">{followers}</h2>
              </div>
              <div className="float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1">
                <i className="fa fa-user fa-fw fa-sm text-primary" />
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end total followers   */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* partnerships   */}
        {/* ============================================================== */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Total Following</h5>
                <h2 className="mb-0">{following}</h2>
              </div>
              <div className="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1">
                <i className="fa fa-handshake fa-fw fa-sm text-secondary" />
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end partnerships   */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* total earned   */}
        {/* ============================================================== */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Is it verified</h5>
                {/* <h2 className="mb-0">{verified ? "Yes" : "No"}</h2> */}
                {verified !== undefined && (
                  <h2 className="mb-0">{verified ? "Yes" : "No"}</h2>
                )}
              </div>
              <div className="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
                <i className="fa fa-check-circle fa-fw fa-sm text-brand" />
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* end total earned   */}
        {/* ============================================================== */}
      </div>
      {/* <div className="row"> */}
      <div className="card">
        <h5 className="card-header">Analytics</h5>
        <div className="card-body">
          {/* <h4>Input Text</h4> */}
          <div className="form-group">
            {/* <div className="row"> */}
              <InstagramCharts
                usrnamechart={usernamei}
                fetchDataOnButtonClick={fetchDataOnButtonClick}
              />
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className="row">
        <div className="col-lg-12">
          <div className="section-block">
            <h3 className="section-title">Similar Users</h3>
          </div>
          <div className="card">
            <div className="campaign-table table-responsive">
              <table className="table">
                <thead>
                  <tr className="border-0">
                    <th className="border-0">Profile</th>
                    <th className="border-0">Profile id</th>
                    <th className="border-0">Full Name</th>
                    <th className="border-0">Username</th>
                    <th className="border-0">Private</th>
                    <th className="border-0">Verified</th>
                    <th className="border-0">View</th>
                  </tr>
                </thead>
                <tbody>
                  {userProfiles.map((user) => (
                    <TableProfile
                      key={user.id}
                      profileicon={user.profileicon}
                      id={user.id}
                      fullname={
                        user.fullname === "" ? "No Full Name" : user.fullname
                      }
                      username={user.username}
                      private={user.isPrivate}
                      verifide={user.isVerified}
                      openurl={`https://www.instagram.com/${user.username}`}
                    ></TableProfile>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Profileinfo;
