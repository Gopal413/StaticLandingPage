import React, { useState } from 'react'
import "./Header.css"

function Header() {

    const [status,setStatus] = useState(true);
    //const arr = ["Home","Shop","About","Contact"]
    const list = [
    { name: "Home", icon: <i class="fa-solid fa-house"></i> },
    { name: "Shop", icon: <i class="fa-solid fa-shop"></i> },
    { name: "About", icon: <i class="fa-solid fa-circle-info"></i> },
    { name: "Contact", icon: <i class="fa-solid fa-address-book"></i> },
    { name: "Cart", icon: <i class="fa-solid fa-cart-arrow-down"></i> },
  ];


  return (
    <div className='container'>
        <nav className='navclass'>
            <h2>Gopal</h2>
            <ul className='ulclass'>
                {list.map((item,index)=>
                    <li key={index}>{item.icon}{item.name}</li>
                )}
            </ul>
            <div className='menu'>
                <span onClick={()=>setStatus(prev=>!prev)}>{status?<i className="fa-solid fa-bars"></i>:<i className="fa-solid fa-xmark"></i>}</span>
                {status?null: <div className='smallnav'>
                
                 <ul className='ulclass2'>
                {list.map((item,index)=>
                    <li key={index}><span>{item.icon}</span><span id='tagname'>{item.name}</span></li>
                )}
            </ul>
            </div>}
            </div>
        </nav>
    </div>
  )
}

export default Header
