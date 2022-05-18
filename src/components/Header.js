import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

function Header() {

  const [Close, setClose] = useState(false)

  return (
    <div className='header'>
     <a href="">
         <div className="img"></div>
     </a>

     <div className="menu">
         <p><a href="">Model S</a></p>
         <p><a href="">Model 3</a></p>
         <p><a href="">Model X</a></p>
         <p><a href="">Model Y</a></p>
     </div>

     <div className="rightMenu">
         <a href="">Shop</a>
         <a href="">Tesla Account</a>
         <div className="open" onClick={() => setClose(true)}>
         <MenuIcon style={{cursor:'pointer'}}   
         /></div>
         
     </div>

     <div className="burgerNav" style={!Close ? {transform:'translateX(100%)'} : {transform:'translateX(0%)'}}  >
     <div  className="icon" onClick={() => setClose(false)} >
       <CancelIcon  />
     </div>
       <li><a href="">Model S</a></li>
       <li><a href="">Model 3</a></li>
       <li><a href="">Model X</a></li>
       <li><a href="">Model Y</a></li>
       <li><a href="">Existing Inventory</a></li>
       <li><a href="">USed Inventory</a></li>
       <li><a href="">Trade-in</a></li>
       <li><a href="">Cybertruck</a></li>
       <li><a href="">Roadster</a></li>
     </div>

    </div>
  )
}

export default Header;