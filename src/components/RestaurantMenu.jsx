import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const menuInfo = useRestaurantMenu(resId);

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
