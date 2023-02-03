import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CON_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurants=useRestaurant(resId);
  //
  
  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h2>Restaurants Id:--{resId}</h2>
        <h2>{restaurants.name}</h2>
        <img src={IMG_CON_URL + restaurants.cloudinaryImageId} />
        <h2>{restaurants.area}</h2>
        <h2>{restaurants.city}</h2>
        <h2>{restaurants.avgRating}</h2>
        <h2>{restaurants.costForTwoMsg}</h2>
      </div>
      <div>
        <h1>Menu:------</h1>
        <ul>
          {Object.values(restaurants?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
