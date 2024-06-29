import { LOGO_URL } from "../utils/constants.js";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header =() =>{
  const OnlineStatus = useOnlineStatus();

  const [btnName , setbtnName] = useState("Login");

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

    return (
    <div className="flex justify-between shadow-lg border border-solid border-black rounded-2xl">        

    <div className="logo-Container">
   <img 
   className="w-[115px]"src= {LOGO_URL}/>
            
    </div>
    
    <div className="flex items-center ">
      <ul className="flex p-5 m-5">
      <li className="px-5"> OnlineStatus : {OnlineStatus ? "🟢" : "🔴"}</li>
     <li className="px-5"> <Link to ="/">Home</Link></li>
     <li className="px-5"> <Link to ="/about">About </Link></li>
    <li className="px-5"> <Link to ="/contact">Contact </Link></li>
    <li className="px-5"> <Link to = "/grocery">Grocery</Link></li>
    <li className="px-5"><Link to ="/cart">Cart({cartItems.length})</Link></li>
    
    <li  className="px-5 flex items-center ">
     <div className=" bg-orange-300 flex items-center justify-center h-full">
    <button className="Login shadow-xl px-4 py-2   " 
    onClick={ () =>{
    btnName === "Login" ? setbtnName (loggedInUser) : setbtnName ("Login");
    }}
     > {btnName}
      </button>
      </div>  
      </li>  
      <li className="font-bold">{loggedInUser}</li> 
      </ul>
     </div>
  </div>
);
};

export default Header;