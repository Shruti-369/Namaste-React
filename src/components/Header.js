import { LOGO_URL } from "../utils/constants";
// import DialogDemo from "./DialogBox";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { useLocation } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");
    console.log("Header rendered");

    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);

    const onlineStatus = useOnlineStatus();


    //Selector (is a hook)
    //useSelector gives access to the store
    const cartItems = useSelector((store) => store.cart.items);



//if no dependency array, useEffect called on every render
//if empty dependency array, useEffect called only once after initial render
//if dependency array with variables, useEffect called whenever those variables change 
//if dependency array is [btnNameReact], useEffect called whenever btnNameReact changes
      useEffect(() => {
        console.log("useEffect called in Header");
    }, [btnNameReact]);

    return (
         <div className="flex h-[70px] bg-orange-200">
      <div className="!mt-0 p-0">
          <img className="w-[80px] ml-4 p-0" src={LOGO_URL} />
      </div>

      <div className="flex gap-10 ml-4 items-center text-base " >
        <ul className="flex items-center h-full gap-6 font-medium">
          <li className="ml-[770px]">
            <small className="underline">
          Online Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </small>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart🛒
             <sup className="bg-orange-500 rounded-full p-1 pt-0 pb-1  text-white font-sans">{cartItems.length}</sup>
            </Link>
          </li>
          {/* <li><DialogDemo /></li> */}
          <button 
           className="bg-orange-600 p-2 !font-[16px] text-white rounded-md border-black-2 border pl-3 pr-3 hover:border-orange-700 active:scale-95 transition-transform leading-tight"
           onClick={() => {
              setbtnNameReact("Logout");
           }}
           >
            {btnNameReact}
           </button>
          <li className="font-medium">{loggedInUser}</li>
        </ul>
      </div>
    </div>
    );
};

export default Header;