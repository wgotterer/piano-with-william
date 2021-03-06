import React from "react";
import snoopy from "../data/snoopy.png";

function Home({ user, loggedInUser }) {
  return (
    <div className="home_container">
      {/* piano note animation */}
      <ul className="piano_note_animation">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="home_grid_container">
        <h3></h3>
        {user && loggedInUser ? (
          <h1>Hello {user.name}!</h1>
        ) : (
          <h1>Please sign in!</h1>
        )}
        <h5 className="home_info">
          At Piano with William you are able to purchase premium follow along
          classes (feel free to use fake credit card information) and practice
          your scales on a virtual piano! And to really hone in your skills,
          sign up for a one on one session with the man himself, William!
        </h5>
        <img src={snoopy} width="400px" height="400px"></img>
      </div>
    </div>
  );
}

export default Home;
