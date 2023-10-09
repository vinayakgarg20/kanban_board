import "./styles.css";

export const UserProfile = ({ userInfo, userId ,userAvailability}) => {
  const findUserById = (userId) => {
    // Ensure that userInfo is an array and not undefined or null
    if (Array.isArray(userInfo)) {
      // Use the Array.find method to find the user by id
      const user = userInfo.find((user) => user.id === userId);

      // Return the found user or null if not found
      return user || null;
    } else {
      // Handle the case where userInfo is not an array (e.g., it's empty or undefined)
      return null;
    }
  };
  
  let color = "grey";
  let userName="";
  const foundUser = findUserById(userId);

  if (foundUser) {
    if (foundUser.available) {
      color = "green";
    }
    userName=foundUser.name;
  }
  const imageUrl=`https://api.multiavatar.com/${userName}Bond.svg`;
  console.log(foundUser, " 😊 ",color);

  // Render the UserProfile component.
  return (
    <div className="user-profile-image">
      
        <img
          className="profile"
          src={imageUrl}
          
          alt={`${userName}`}
        />
     
      <div
        className="available-dot"
        style={{ backgroundColor: `${color}` }}
      ></div>
    </div>
  );
};
