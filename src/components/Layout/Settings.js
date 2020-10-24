import React from "react";
import { Link } from "react-router-dom";

const Settings = (props) => {
  return (
    <>
      <div className='box buttons'>
        <button className='button is-link is-light'>
          {<Link to='/edit-profile'> Edit Profile </Link>}
        </button>{" "}
        <br />
        <button className='button is-link is-light'>
          {<Link to='/edit-password'> Edit Password </Link>}
        </button>
        <br />
        <button className='button is-danger is-light'>
          {<Link to='/delete-profile'> Delete Profile </Link>}
        </button>
      </div>

      <div className='box'>
        <button className='button is-link is-light'>
          {<Link to='/board'> Search profiles </Link>}{" "}
        </button>
      </div>
    </>
  );
};

export default Settings;
