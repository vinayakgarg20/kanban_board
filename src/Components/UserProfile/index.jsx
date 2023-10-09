import "./styles.css";
export const UserProfile = ({ userInfo, userId, userAvailability }) => {

  let color = "grey";
  let userName = userInfo[userId].name;
  if (userInfo[userId].available) {
    color = "green";
  }
  //external api to get image based on string
  const imageUrl = `https://api.multiavatar.com/${userName}Bond.svg`;
  
  return (
    <div className="user-profile-image">
      <img className="profile" src={imageUrl} alt={`${userName}`} />
      <div
        className="available-dot"
        style={{ backgroundColor: `${color}` }}
      ></div>
    </div>
  );
};
