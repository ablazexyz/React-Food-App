import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import { IMG_URL } from "./config";

const RestaurantMenu = () => {
    const [restaurant, setRestaurant] = useState({});
    const [menuItems, setMenuItems] = useState([]);
    const {id} = useParams();

    const getRestaurantMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId='+id);
        const json = await data.json();
        const items = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        const restaurant = json?.data?.cards[0]?.card?.card?.info;
        setRestaurant(restaurant)
        setMenuItems(items);
    }

    useEffect(()=>{
        getRestaurantMenu();
    },[])
    return (
        <div className="restaurant-menu">
            <div className="menu-card">
                <img alt="Restaurant Pic" src={IMG_URL + restaurant.cloudinaryImageId}/>
                <h2>{restaurant.name}</h2>
                <h4>{restaurant.locality}</h4>
                <h4>{restaurant.city}</h4>
                <h4>{restaurant.costForTwoMessage}</h4>
                <h4>{restaurant.cuisines?.join(",")}</h4>
            </div>
            <div className="menu-items">
                {menuItems.map((item,index)=>{
                    return (
                        <MenuItem {...item.card?.info} key={item.card?.info.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default RestaurantMenu;