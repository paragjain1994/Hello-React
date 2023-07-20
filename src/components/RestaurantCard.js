import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data; // optional chaining operator
  
    return (
      <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-200 hover:bg-gray-400">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={ CDN_URL
            +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} For Two</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;