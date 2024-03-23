import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { getSwiggyData } from "./config";
import Shimmer from "./Shimmer";

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);

    //Needs to be executed once hence no dependency element inside list
    useEffect(
        () => {
            getSwiggyData()
                .then(res => {
                    setRestaurantsList(res);
                    setFilteredRestaurantsList(res);
                })
                .catch(err =>
                    console.log(err))
            // console.log("API fetched")
        }, []
    );

    // console.log("@testRList", restaurantsList);
    // console.log("@testFRList", filteredRestaurantsList);

    const onChangeHandler = (event) => {
        setSearchText(event.target.value);
        // console.log("Text Changed")
    }
    const filterData = () => {
        const list = restaurantsList.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredRestaurantsList(list);
        // console.log("Data Filtered", filteredRestaurantsList)
    }

    // console.log("Render")
    //Early Return - without rendering main component
    if(restaurantsList?.length === 0)return (<Shimmer />);

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={onChangeHandler}
                />
                <button className="search-btn" onClick={filterData}>Search</button>
            </div>
            {filteredRestaurantsList?.length === 0 && <h2>No Result Found</h2>}
            <div className="list">
                
                {filteredRestaurantsList?.length > 0 && filteredRestaurantsList.map((restaurant) => {
                    return (
                        <RestrauntCard
                            {...restaurant.info}
                            key={restaurant.info.id}
                        />
                    )
                })}

            </div>
        </>
    )
}

export default Body;