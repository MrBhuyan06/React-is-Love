import React from "react";
import ReactDOM from "react-dom/client.js";

//createing fake data
const profileData = [
  {
    type: "profile",
    data: {
      name: "Abhishek",
      age: 22,
      img: "https://media.licdn.com/dms/image/C4E03AQGmCWo7X7mHjA/profile-displayphoto-shrink_400_400/0/1644122702759?e=1685577600&v=beta&t=zmKkMHUQtnANt9Y-e2VEw0U_smd3j57f8oxri1ZHAU0",
    },
  },
  {
    type: "profile",
    data: {
      name: "Abhishek",
      age: 23,
      img: "https://media.licdn.com/dms/image/D5603AQH8t5zWTRKb-Q/profile-displayphoto-shrink_400_400/0/1663474153122?e=1685577600&v=beta&t=Vo_9ODvSlpGoW1TeVavv7OXRA_SNrHiemWKaKgfmTT0",
    },
  },
  {
    type: "profile",
    data: {
      name: "Hitesh Sir",
      age: 30,
      img: "https://media.licdn.com/dms/image/C4D03AQGl-adCfRTfFA/profile-displayphoto-shrink_400_400/0/1655552914877?e=1685577600&v=beta&t=ohQwdZEixRFk2Vtymu17n9iFOknbv6xas4Tkzuk25zU",
    },
  },
  {
    type: "profile",
    data: {
      name: "Anurag Sir",
      age: 30,
      img: "https://media.licdn.com/dms/image/D5603AQFelednnKJlJg/profile-displayphoto-shrink_400_400/0/1667584272134?e=1685577600&v=beta&t=TaE8KMehbz720oKe58M1FukBUYfjy_FojZZoos0yu6I",
    },
  },
  {
    type: "profile",
    data: {
      name: "Jonas Sir",
      age: 30,
      img: "https://avatars.githubusercontent.com/u/18718850?v=4",
    },
  },
];

console.log(profileData);
const Tittle = () => {
  return (
    <a href="/">
      <h2 className="profile">ProfileRender</h2>
    </a>
  );
};

const Header = () => {
  return (
    <div className="Header">
      <Tittle />
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  );
};

const ProfileCard = ({ name, img, age }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h3>{age}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="main">
      {profileData.map((profile) => {
        return <ProfileCard {...profile.data} />;
      })}
      {/* <ProfileCard /> */}
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
