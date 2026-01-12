import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";





const RestaurantCard = (props) => {
  const {resData} = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <Link to={`/restaurants/${resData?.info?.id}`}>
      <div className="m-4 p-4 w-64 h-84 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img 
            className="w-64 h-48 rounded-md object-cover"
            alt="res-logo"
            src=
               {CDN_URL + cloudinaryImageId }
        />
        <h3 className="font-bold">{name}</h3>
        <p className="m-2"><small>{cuisines.join(", ")}</small></p>
        <p className="m-2"><small><strong>{avgRating} stars</strong></small></p>
        <p className="m-2"><strong>{costForTwo}</strong></p>
        <p className="m-2"><small>{sla?.slaString}</small></p>
        <p className="m-2"><small>User: {loggedInUser}</small></p>
      </div>
    </Link>
  );
};


// Higher Order Component (HOC) are pure fn that take a component as input and return an enhanced component
//Input - RestaurantCard
//Output - RestaurantCard with some extra props/features(RestaurantCardPromoted)
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-gray-900 text-white text-xs px-2 py-1 rounded-br-md rounded-tl-md">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  }
}


export default RestaurantCard;