import React from 'react'
// import './mync.css'

function Mync() {
  return (
    <div className="row">
  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="card influencer-profile-data">
      <div className="card-body">
        <div className="row">
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12">
            <div className="text-center">
              <img
                src="assets/images/avatar-1.jpg"
                alt="User Avatar"
                className="rounded-circle user-avatar-xxl"
              />
            </div>
          </div>
          <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12">
            <div className="user-avatar-info">
              <div className="m-b-20">
                <div className="user-avatar-name">
                  <h2 className="mb-1">Henry Barbara</h2>
                </div>
                <div className="rating-star  d-inline-block">
                  <i className="fa fa-fw fa-star" />
                  <i className="fa fa-fw fa-star" />
                  <i className="fa fa-fw fa-star" />
                  <i className="fa fa-fw fa-star" />
                  <i className="fa fa-fw fa-star" />
                  <p className="d-inline-block text-dark">14 Reviews </p>
                </div>
              </div>
              {/*  <div class="float-right"><a href="#" class="user-avatar-email text-secondary">www.henrybarbara.com</a></div> */}
              <div className="user-avatar-address">
                <p className="border-bottom pb-3">
                  <span className="d-xl-inline-block d-block mb-2">
                    <i className="fa fa-map-marker-alt mr-2 text-primary " />
                    4045 Denver AvenueLos Angeles, CA 90017
                  </span>
                  <span className="mb-2 ml-xl-4 d-xl-inline-block d-block">
                    Joined date: 23 June, 2018
                  </span>
                  <span className=" mb-2 d-xl-inline-block d-block ml-xl-4">
                    Male
                  </span>
                  <span className=" mb-2 d-xl-inline-block d-block ml-xl-4">
                    29 Year Old{" "}
                  </span>
                </p>
                <div className="mt-3">
                  <a href="#" className="badge badge-light mr-1">
                    Fitness
                  </a>{" "}
                  <a href="#" className="badge badge-light mr-1">
                    Life Style
                  </a>{" "}
                  <a href="#" className="badge badge-light">
                    Gym
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top user-social-box">
        <div className="user-social-media d-xl-inline-block">
          <span className="mr-2 twitter-color">
            {" "}
            <i className="fab fa-twitter-square" />
          </span>
          <span>13,291</span>
        </div>
        <div className="user-social-media d-xl-inline-block">
          <span className="mr-2  pinterest-color">
            {" "}
            <i className="fab fa-pinterest-square" />
          </span>
          <span>84,019</span>
        </div>
        <div className="user-social-media d-xl-inline-block">
          <span className="mr-2 instagram-color">
            {" "}
            <i className="fab fa-instagram" />
          </span>
          <span>12,300</span>
        </div>
        <div className="user-social-media d-xl-inline-block">
          <span className="mr-2  facebook-color">
            {" "}
            <i className="fab fa-facebook-square " />
          </span>
          <span>92,920</span>
        </div>
        <div className="user-social-media d-xl-inline-block ">
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
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Mync