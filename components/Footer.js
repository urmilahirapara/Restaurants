import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const {user}=useContext(UserContext);
    return <h4>{user.name}  - {user.email}  </h4>  ;
  };

    export default Footer;
   