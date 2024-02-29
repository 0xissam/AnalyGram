import React from "react";
// import './pagetitle.css'

function PageTitle(props) {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="page-header">
          <h3 className="mb-2">{props.first}</h3>
          {/* <p className="pageheader-text">
        Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit
        amet vestibulum mi. Morbi lobortis pulvinar quam.
      </p> */}
          <div className="page-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#" className="breadcrumb-link">
                    {props.secound}
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Main
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
