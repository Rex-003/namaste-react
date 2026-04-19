import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
const BodyComponent = () => {
  // Lets make a button which on clicking will filter out the restaurants which are having rating more than 4.0
  const [topRated, setTopRated] = useState(false);
  // Now we have to use the useState because we have to bind our data with the input box.
  const [searchText, setSearchText] = useState("");
  // Now we will not use the mockdata, instead we will use the real API data.
  // for this we will use the useEffect hook that will help us to render the data on load.
  const resList = useRestaurants();

  const filteredList = resList
    .filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    })
    .filter((res) => {
      return topRated ? res.info.avgRating > 4.5 : true;
    });

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks Like you are offline</h1>;
  }

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
              setTopRated((prev) => !prev);
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
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
