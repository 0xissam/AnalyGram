import React from "react";
// import profil from "../../assets/images/avatar-1.jpg"

function TableProfile(props) {
  return (
    <tr>
      <td>
        <div className="m-r-10">
          <img src={props.profileicon} alt="user" width={35} />
        </div>
      </td>
      <td>{props.id}</td>
      <td><div className="avatar-group"><span>{props.fullname}</span></div></td>
      <td>{props.username}</td>
      <td>{props.private}</td>
      <td>{props.verifide}</td>
      {/* <td>{props.verifide}</td> */}
      <td><a href={props.openurl} target="_blank">Open</a></td>
    </tr>
  );
}

export default TableProfile;


