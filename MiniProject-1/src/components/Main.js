import { useState } from "react";
import "./Main.css";
import ProfileCard from "./ProfileCard.js";
//Import data
import { profileList } from "../config.js";
// console.log(profileList);

const filterData = function (searchText, AllProfile) {
  const profile = AllProfile.filter((profile) => {
    return profile.data.name.toLowerCase().includes(searchText);
  });
  return profile;
};

const Main = () => {
  const [searchText, setSearch] = useState("");
  const [AllProfile, setAllProfile] = useState(profileList);
  const [FillterProfile, setFilterAllProfile] = useState(profileList);
  // console.log(AllProfile);

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
        <button
          onClick={() => {
            //fliterProfile will call with name of person as one para and list of profile in ine para
            const profileData = filterData(searchText, FillterProfile);
            setAllProfile(profileData);
            console.log(AllProfile);
          }}
        >
          Search
        </button>
        <div className="profile-card-section">
          {AllProfile.length === 0 ? (
            <h1>No Profile Found </h1>
          ) : (
            AllProfile.map((profile) => {
              return <ProfileCard {...profile.data} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;
