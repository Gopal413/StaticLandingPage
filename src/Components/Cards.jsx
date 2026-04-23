import React from "react";
import "./Card.css";

function Cards() {
  const arr = [
    {
      id: 1,
      url: "./images/Laptop.png",
      name: "Ergonomic Laptop Stand",
      rating: "4.6 (127 reviews)",
      price: "24.99",
    },
    {
      id: 2,
      url: "./images/Watch.png",
      name: "Wireless Noise-Cancelling Buds",
      rating: "4.9 (89 reviews)",
      price: "59.99",
    },
    {
      id: 3,
      url: "./images/Academic.png",
      name: "Undated Academic Planner",
      rating: "4.2 (205 reviews)",
      price: "12.99",
    },
    {
      id: 4,
      url: "./images/Drink.png",
      name: "Energy Boost Drink Pack (12ct)",
      rating: "4.8 (156 reviews)",
      price: "19.99",
    },
  ];

  return (
    <div>
      <div className="cards">
        <h1>Hot Picks for Semester Survival</h1>
        <p>Curated just for you—grab these before they're gone.</p>

        
          <div className="cardItems">
            {arr.map((item) => (
              <div key={item} className="main-item">
                <div className="card-items1">
                  <img src={item.url} alt="img" />
                </div>
                <div className="card-items2">
                  <h3> {item.name}</h3>
                  <p style={{ fontSize: "15px" }}>{item.rating}</p>
                  <p>{item.price}</p>
                  <button>Add</button>
                </div>
              </div>
            ))}
          </div>
        
        <div className="cardMap">
          {/* {arr.map((item) => (
          <div className="cardItems">
            <div className="card-items1"  
            style={{
              width:"100%",
              height:"40%",
              borderTopLeftRadius:"20px",
              borderTopRightRadius:"20px",
              backgroundImage :`url('${item.url}')`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"100% 100%"
            }} >
             
            </div>
            <div className="card-items2">
              <h3> {item.name}</h3>
              <p style={{ fontSize: "15px" }}> {item.rating}</p>
              <p>${item.price}</p>
              <button>Add</button>
            </div>
          </div>
        ))} */}

          {/* <div className="cardItems">
            <div className="card-items1" > 
             <img src="./images\Laptop.png" alt="img" />
            </div>
            <div className="card-items2">
              <h3> Ergonomic Laptop Stand</h3>
              <p style={{ fontSize: "15px" }}> 4.6 (127 reviews)</p>
              <p>$24.99</p>
              <button>Add</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
