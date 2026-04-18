import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const BodyComponent = () => {
  // Lets make a button which on clicking will filter out the restaurants which are having rating more than 4.0
  const [resList, setResList] = useState([]);
  const [updatedList, setUpdatedList] = useState([]);
  // Now we have to use the useState because we have to bind our data with the input box.
  const [searchText, setSearchText] = useState("");
  // Now we will not use the mockdata, instead we will use the real API data.
  // for this we will use the useEffect hook that will help us to render the data on load.
  useEffect(() => {
    // Now this fetchData will be rendered as soon as the component is loaded.
    fetchData();
  }, []);
  // Now we will make the fetchData function that will conatin the real API call.
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.400691543948763&lng=78.0797432544435&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setUpdatedList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const filteredList = resList.filter((res) => {
    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
  });

  // Now we will logic and pass that particular logic into the setResList function.
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-component">
      <div className="search-container-with-filter">
        <div className="search-container">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
        </div>
        <div className="filter-button">
          <button
            onClick={() => {
              setResList(
                resList.filter((res) => {
                  return res.info.avgRating > 4.0;
                }),
              );
            }}
          >
            Filter
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredList.map((res) => {
          return (
            <Link to={"/restaurants/" + res?.info?.id} key={res?.info?.id}>
              <RestaurantCard resData={res} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
