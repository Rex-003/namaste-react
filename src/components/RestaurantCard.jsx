import { CARD_IMAGE_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const {resData} = props;
  const {name, cuisines, avgRating , costForTwo , areaName , cloudinaryImageId} = resData?.info;
  const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-image"
        alt="res-image"
        src={CARD_IMAGE_URL + cloudinaryImageId}
      />
      <div className="card-details">
        <h4> {name} </h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;