import React from "react";
import TableProfile from "./TableProfile";

function Table(props) {
  return (
    <div className="row">
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
                  {/* <th className="border-0">Action</th> */}
                </tr>
              </thead>
              <tbody>
                <TableProfile
                  id="iii"
                  fullname="issam"
                  username="thr"
                  private="yes"
                  verified="yes"
                  openurl="open"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
