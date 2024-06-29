import React, { useContext } from 'react';
import RestaurantCard from './RestaurantCard.js'; 
import Shimmer from './Shimmer.js';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';
import useListRestaurants from '../utils/useListRestaurants.js';
import { FastDeliveryService } from './RestaurantCard.js';
import UserContext from '../utils/UserContext.js';

const Body = () => {
  const { restaurantList, filteredResList, setFilteredResList, searchText, setSearchText } = useListRestaurants();
  const onlineStatus = useOnlineStatus();
  const RestaurantDelivery = FastDeliveryService(RestaurantCard);
  const { loggedInUser, setuserName } = useContext(UserContext);

  if (!onlineStatus) {
    return <h1>Looks like you are offline!!!</h1>;
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-search m-5 flex">
        <div className="m-4 p-4">
          <input
            className="shadow-xl"
            type="text"
            data-testid="searchInput"
            placeholder="Search for Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-0.5 py-0.5 bg-gray-200 ml-4 rounded-lg"
            aria-label="Search"
            onClick={() => {
              const filteredResList = restaurantList.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredResList);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter p-7">
          <button
            className="Filter-btn-Top px-4 py-1 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = restaurantList.filter(restaurant => restaurant.info.avgRating > 4.2);
              setFilteredResList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <label> userName </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>

      <div className="Res-container flex flex-wrap">
        {filteredResList.map(restaurant => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.sla.deliveryTime <= 30 ? (
              <RestaurantDelivery resData={restaurant} />
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




