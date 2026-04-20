import React from 'react'
import "./Card2.css"

function Card2() {
  return (
<div className='main-card2'>
    <div className='card-2'>
      <div className='para'>
        <h1>What Makes Sharief Different?</h1>
        <p>Founded by a group of broke college kids in 2023, Sharief started as a dorm-room hack to score cheap tech and supplies. Today, we're your secret weapon for surviving finals week without the ramen-only diet.</p>
        <div>
            <p>Free shipping on orders $30+</p>
            <p>30-day hassle-free returns</p>
            <p>Student discounts up to 20% off</p>
            <p>24/7 chat support (we're night owls too)</p>
        </div>
      </div>
      {/* <div className='imgcard2'>
        <img src="./images/Meeting.png" alt="not found" />
      </div> */}

      <div className="card-items1"  
            style={{
              width:"500px",
              height:"400px",
              borderRadius:"20px",
              backgroundImage :`url('./images/Meeting.png')`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"100% 100%"
            }} ></div>
    </div>
   </div>
  )
}

export default Card2
