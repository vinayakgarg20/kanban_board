import "./styles.css";

// UserProfile component to display user profile information
export const UserProfile = ({ userInfo, userId, userAvailability }) => {
  // Initialize the color to "grey" by default
  let color = "grey";
  
  // Get the user's name from userInfo
  let userName = userInfo[userId].name;

  // If the user is available, set the color to "green"
  if (userInfo[userId].available) {
    color = "green";
  }

  // Generate an image URL using an external API based on the user's name
  const imageUrl = `https://api.multiavatar.com/${userName}Bond.svg`;
  
  return (
    <div className="profileImageMain">
      {/* Display the user's profile image */}
      <img className="profileImage" src={imageUrl} alt={`${userName}`} />
      
      {/* Display a dot with background color based on availability */}
      <div
        className="dot"
        style={{ backgroundColor: `${color}` }}
      ></div>
    </div>
  );
};
