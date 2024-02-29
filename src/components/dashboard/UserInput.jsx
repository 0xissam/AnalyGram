import React, {useState} from 'react'
// import axios from 'axios'

function UserInput() {

    const [username, setUsername] = useState('');
    const [biography, setbiography] = useState('');

    const handleClick = async () => {
        const url = 'http://localhost:4000/data';
      
        try {
          const response = await fetch(url);
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log(data.username);
        } catch (error) {
          console.error(error.message);
        }
      };
      

  return (
    <div className="card">
  <h5 className="card-header">Enter Username</h5>
  <div className="card-body">
    {/* <h4>Input Text</h4> */}
    <div className="form-group">
      <div className="input-group mb-3">
        <span className="input-group-prepend">
          <span className="input-group-text">@</span>
        </span>
        <input type="text" placeholder="Username" className="form-control" />
        <div className="input-group-append">
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Go!
        </button>
      </div>
      </div>
    </div>
  </div>  
</div>

  )
}

export default UserInput