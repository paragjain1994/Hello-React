import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            console.log("clicked");
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestraunt(filteredList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
