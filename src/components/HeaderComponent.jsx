import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

// creating header
const HeaderComponent = () => {
  // Now we wil create a state varaible for login and logout button.
  const [log, setLog] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="app-logo">
        <img className="logo-image" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="log-button"
            onClick={() => {
              log === "Login" ? setLog("Logout") : setLog("Login");
            }}
          >
            {log}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
