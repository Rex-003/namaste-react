import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.400691543948763&lng=78.0797432544435&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await data.json();
    setMenuInfo(json.data);
  };
  console.log(menuInfo);

  if (menuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      <h3>Menu Items</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card.info.name} - Rs.{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
