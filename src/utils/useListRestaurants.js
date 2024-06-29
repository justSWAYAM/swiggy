import { useState, useEffect } from "react";

const useListRestaurants = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
       
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();
            const restaurants = json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurantList(restaurants);
            setFilteredResList(restaurants);
       
    };

    return {
        restaurantList,
        filteredResList,
        setFilteredResList,
        searchText,
        setSearchText,
    };
};

export default useListRestaurants;

