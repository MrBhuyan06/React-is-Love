import { useState } from "react";
import "./Main.css";
import ProfileCard from "./ProfileCard.js";
//

const Main = () => {
  const [searchText, setSearch] = useState("");
  return (
    <div className="Main">
      <div className="search-container">
        <input
          type="text"
          placeholder=""
          value={searchText}
          className="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button>Search</button>
        <div className="profile-card-section">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};
export default Main;
