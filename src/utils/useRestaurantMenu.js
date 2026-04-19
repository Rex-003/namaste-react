import { useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // call the useEffect
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.400691543948763&lng=78.0797432544435&restaurantId=235623" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
