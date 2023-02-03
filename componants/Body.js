import RestrauntCard from "./RestrauntCard";
import { useEffect, useState,useContext } from "react";
import filterDatafn from "../utils/Filterdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurant from "../utils/useAllRestaurant";
import useOnline from "../utils/useOnline";
import { FETCH_ALL_DATA } from "../contants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const offline = useOnline();
  // const [selectedOptions, setSelectedOptions] = useState();
  const allRestaurants = useAllRestaurant();
  const [searchtext, setSearchtext] = useState("");
  const [restaurants, setrestaurants] = useState([]);
  const allRestauran = allRestaurants.map((item) => item.data.name);

  const {user,setUser}=useContext(UserContext);

  const handleChange = (event) => {
    //event.preventDefault();
    setSearchtext(event.target.value);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_ALL_DATA);
    const json = await data.json();
    setrestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!offline) {
    return <h1>🟠Offline , Please Check your internet connection</h1>;
  }
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-container h-15 p-1 bg-yellow-100 my-5">
        <select id="search" onChange={handleChange} placeholder="Select color">
          <option>----</option>
          {allRestauran.map((option) => (
            <option key={option} value={option.name}>
              {option}
            </option>
          ))}
        </select>

        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const data = filterDatafn(searchtext, restaurants);
            setrestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={e=>
        setUser({...user,name:e.target.value})
        }></input>
         <input value={user.email} onChange={e=>
        setUser({...user,email:e.target.value})
        }></input>
      </div>

      <div className="flex flex-wrap">
        {restaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurantmenu/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
