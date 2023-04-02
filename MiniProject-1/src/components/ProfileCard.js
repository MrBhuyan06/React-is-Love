import "./profilecard.css";

const ProfileCard = ({ name, img, age, job, skill }) => {
  return (
    <div className="container">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{job}</p>
      <p>{skill}</p>
    </div>
  );
};
export default ProfileCard;
