import { useParams } from "react-router-dom";
import mockMenu from "./mockMenu";

const useRestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = mockMenu?.[resId];   

  return { restaurant, resId };

};

export default useRestaurantMenu;


