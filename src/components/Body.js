import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import {useEffect, useState, useContext} from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineGuessGame from "./OfflineGuessGame";
import UserContext from "../utils/UserContext";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// on-demand loading
// Dynamic Import


const Body = () => {
   // Local State Variable - Super powerful variable
   //Aur jab state change hoti hai → UI automatically re-render ho jaati hai ✨
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
    const[searchText, setSearchText] = useState("");
      //whenever state variable changes, react automatically re-renders the component
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

  
    useEffect(() => {
      fetchData();         // existing list API
    }, []);

    const URL = "http://localhost:5000/api/restaurants";
    // const UPDATE_URL = "http://localhost:5000/api/restaurants/update";

    const handleFilter = () => {
        const filteredList = listOfRestaurants.filter(
           (res) => res.info.avgRating > 4.4
        );
        setListOfRestaurant(filteredList);
    };

    const fetchData = async () => {
        try {
            const data = await fetch(URL);
            const json = await data.json();

            const apiRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            // API + MOCK MERGE
            const mergedRestaurants = [...apiRestaurants, ...resList];

            setListOfRestaurant(mergedRestaurants);
            setFilteredRestaurant(mergedRestaurants);
        } catch (error) {
            console.error(error);
        }
};

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
      return (
        <div className="offline-status">
          <h1>🔴 You are offline. Please check your internet connection.</h1>
          <div className="game"><OfflineGuessGame /></div>
        </div>
      )
    }
   

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex items-center justify-between">
                <div className="Search">
                    <input 
                        type="text" 
                        className="search-input border-2 border-black p-1 pl-2  rounded-md focus:outline-black focus:ring-2 focus:ring-orange-500 mt-10 ml-14  " 
                        placeholder="Search for restaurants" 
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value); }}
                    />
                    <button 
                        className="bg-orange-600 p-2 text-white rounded-md ml-2 border-black-2 border pl-3 pr-3 hover:border-orange-700 active:scale-95 transition-transform"
                        onClick={() => {
                               const filteredRestaurant = listOfRestaurants.filter(
                               (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                         );
                         setFilteredRestaurant(filteredRestaurant);
                        }}>
                       Search
                    </button>
                </div>
                    <button 
                        className="border-2 border-black-600 p-1 pl-2 pr-2 rounded-md focus:outline-gray-300 focus:ring-2 focus:ring-orange-500 mt-10 ml-14 bg-orange-300  hover:border-orange-400" 
                        onClick={handleFilter}>
                         Top Rated Restaurants
                    </button>
                    <div>
                  <label className="ml-[610px] ">UserName:</label>
                  <input 
                    type="text" 
                    className="border-2 border-gray-200 p-0 pl-1 mr-[65px] rounded-md focus:outline-black focus:ring-2 focus:ring-orange-500 mt-10 ml-1" 
                    placeholder="Change User Name" 
                    value={loggedInUser}
                    onChange={(e) => {
                      setLoggedInUser(e.target.value);
                    }}
                  />
                </div>
              </div>

                
 

                 

              <div className="res-container">
  {filteredRestaurant.map((restaurant, index) => {
    const rating = Number(restaurant.info.avgRating);

    return rating >= 4.5 ? (
      <RestaurantCardPromoted
        key={restaurant.info.id + "_" + index}
        resData={restaurant}
      />
    ) : (
      <RestaurantCard
        key={restaurant.info.id + "_" + index}
        resData={restaurant}
      />
    );
  })}
</div>


        </div>
    );
};



export default Body;