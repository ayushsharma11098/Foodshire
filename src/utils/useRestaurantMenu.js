import { useEffect, useState } from 'react';
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);  
        const response = await fetch(MENU_API + resId);
        if (!response.ok) {
          throw new Error('Failed to fetch menu data');  
        }
        const json = await response.json();
        setResInfo(json.data); 
      } catch (err) {
        setError(err.message);  
      } finally {
        setLoading(false);  
      }
    };

    fetchData();
  }, [resId]);  

  return { resInfo, loading, error };  
}

export default useRestaurantMenu;
