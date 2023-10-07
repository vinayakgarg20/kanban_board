// Importing the CSS file for styling.
import "./styles.css";


export const UserProfile = ({ userInfo, userId }) => {
  // Determine the color of the available dot based on user availability.
  let color = "green"; // Default color is green.
  if (userInfo[userId] && userInfo[userId].available) {
    color = "green"; // Set to green if the user is available.
  } else {
    color = "grey"; // Set to grey if the user is not available.
  }

  // Calculate user initials from their name for the profile image.
  let userInitials = "";
  if (userInfo[userId]) {
    // Split the user's full name into an array of words.
    const nameArray = userInfo[userId].name.split(" ");

    // Iterate through the words to get the initials.
    for (let index in nameArray) {
      userInitials += nameArray[index][0]; // Append the first character of each word.
    }
  }
  
  // Render the UserProfile component.
  return (
    <div className="user-profile-image">
      {/* Display the user's profile image with initials. */}
      {userInfo[userId] && (
        <img
          className="profile"
          src={`https://via.placeholder.com/50?text=${userInitials}`}
          alt={`${userInitials}`}
        />
      )}

      {/* Display an available dot with the determined color. */}
      <div
        className="available-dot"
        style={{ backgroundColor: `${color}` }}
      ></div>
    </div>
  );
};
