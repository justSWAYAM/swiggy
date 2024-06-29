import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null); // Ensure the initial state is null

  useEffect(() => {
    fetchData();
    },[]); // Add resId to the dependency array
    

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
};

return resInfo; 
};

export default useRestaurantMenu;
