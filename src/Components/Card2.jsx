import React from "react";
import "./Card2.css";

function Card2() {
  return (
    <div className="main-card2">
      <div className="card-2">
        <div className="para">
          <div className="para-item">
            <h1>What Makes Gopal Different?</h1>
            <p>
              Founded by a group of broke college kids in 2023, Gopal started as
              a dorm-room hack to score cheap tech and supplies. Today, we're
              your secret weapon for surviving finals week without the
              ramen-only diet.
            </p>
            <div>
              <p>
                <span>
                  <i class="fa-solid fa-car"></i>
                </span>
                Free Shopping on orders $30+
              </p>
              <p>
                <span>
                  <i class="fa-solid fa-tags"></i>
                </span>
                30 day hassle-free return
              </p>
              <p>
                <span>
                  <i class="fa-solid fa-percent"></i>
                </span>
                student discount upto 20% off
              </p>
              <p>
                <span>
                  <i class="fa-regular fa-clock"></i>{" "}
                </span>
                24/7 chart support(we're night owls too)
              </p>
            </div>
          </div>
        </div>

        <div className="para2">
          <img src="./images/Meeting.png" alt="not found" />
        </div>
      </div>
    </div>
  );
}

export default Card2;
