import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";

const Body = () => {
  const listOfRestaurants = [
    {
      data: {
        id: "334475",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334476",
        name: "DOMINOS",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.5",
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            console.log("clicked");
            // Filter logic here 
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4);
              console.log(filteredList);
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
