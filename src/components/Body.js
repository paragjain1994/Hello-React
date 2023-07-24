import RestaurantCard,{withPromtedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Body rendered", listOfRestaurants);

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    // Optional Chaining
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

    const {loggedInUser,setUserName} = useContext(UserContext);

  return  (
    <div className="body">
      <div className="m-4 p-4">
        <input
          type="text"
          className="border border-block border-solid"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-green-100 rounded-lg"
          onClick={() => {
            // Filter the restaurant cards and update the UI
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            console.log("clicked");
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            // console.log(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
       
          <label htmlFor="">Username</label>
        <input
          type="text"
          className="border border-block border-solid p-2 m-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
       
      
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"restaurants/" + restaurant.data.id}>
            {/* {if a restaurant is promoted then add promoted label on it} */}
            {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
