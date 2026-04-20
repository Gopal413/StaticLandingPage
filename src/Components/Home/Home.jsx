import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container2">
      <div className="card1">
        <h1>Unlock Campus Life with Sharief</h1>
        <p>
          Discover budget-friendly gadgets, study tools, and dorm vibes that fit
          your student wallet. Fast delivery, epic deals—because acing exams
          shouldn't cost a fortune.
        </p>
        <div className="divbtns">
          <button className="btns">Browse Deals</button>
          <button style={{backgroundColor:"#908ec2"}} className="btns">Learn More</button>
        </div>
      </div>
      <div className="card2">
        
        <img style={{borderRadius:"30px"}} src="./images/College.png" alt="not found" />
      </div>
    </div>
  );
}

export default Home;
