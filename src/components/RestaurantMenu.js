import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import AccordionData from "./AccordionData";
import AccordionItem from "./AccordionItem";


const RestaurantMenu = () => {
  const { restaurant, resId } = useRestaurantMenu();
console.log("Restaurant:", restaurant);

  if (!restaurant) {
    return (
      <div className="px-20 py-5">
        <h2 className="text-xl font-semibold mb-2">Menu not available</h2>
        <p className="text-gray-600">
          Sorry, the menu for this restaurant is not available yet.
        </p>
        <p className="text-gray-500 mt-1">Restaurant ID: {resId}</p>
      </div>
    );
  }

  const { name, cuisines, costForTwoMessage, avgRating } = restaurant.info;

  return (
      <div className=" w-[70%] mx-auto px-20 py-5 font-arial">
        {/* Menu Header */}
        <div className="border-b border-gray-300 pb-5 pl-5 w-8- mb-8">
        <h6 className="text-2xl font-semibold text-gray-900 mb-0">
          {name}
        </h6>
        <p className="text-gray-600">
          <small>{cuisines.join(", ")}</small>
        </p>
        <p className="font-semibold ">
          {costForTwoMessage}
        </p>
        {avgRating && (
          <p className="text-orange-600 text-sm">
            ⭐ {avgRating} stars
          </p>
        )}
      </div>

      {/* Menu Categories */}
      <div className="mt-8">

         <AccordionData categories={restaurant.categories} />
</div>
        {/* <h2 className="text-2xl font-semibold text-gray-900 mb-5">
          Menu
        </h2>

        {restaurant.categories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">
              {cat.title}
            </h3>

            <ul>
              {cat.items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between py-4 border-b border-gray-200 last:border-b-0"
                >
                  <span className="flex-1 text-gray-800">
                    {item.name}
                  </span>
                  <span className="font-bold text-gray-900">
                    ₹{item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
