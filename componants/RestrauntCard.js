import {IMG_CON_URL} from "../contants"
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestrauntCard =
 ({cloudinaryImageId,name,cuisines,avgRating}) => {

const {user}=useContext(UserContext);
  return (
    <div className="w-60 px-5 mx-8 my-12 shadow-lg bg-pink-50">
      <img
        src={
          IMG_CON_URL +
          cloudinaryImageId
        }
      />
      <h4 className="font-bold text-xl">{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{user.name}  - {user.email}  </h4>  
    </div>
  );
};
export default RestrauntCard;
