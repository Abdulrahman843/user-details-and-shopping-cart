import "./App.css";
import React from "react"; // Importing the custom stylesheet
import profilePicture from "./Laoye's_pic2.jpg";

// Define the user object
const user = {
  name: "Abdulrahman",
  surname: "Laoye",
  date_of_birth: "1990-01-21",
  address: "(9 Barbican Terrace)",
  country: "UK",
  email: "rahmanl@gmail.com",
  telephone: "123-456-7890",
  company: "Energy Inc.",
  profile_picture: profilePicture,
  shopping_cart: ["Item 1", "Item 2", "Item 3"],
};

function App() {
  return (
    <div className="container">
      <h1>User Details</h1>
      <div className="user-details">
        <div>
          <img src={user.profile_picture} alt="Profile" />
        </div>
        <div>
          <p>
            <strong>Name:</strong> {user.name} {user.surname}
          </p>
          <p>
            <strong>Date of Birth:</strong> {user.date_of_birth}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
          <p>
            <strong>Country:</strong> {user.country}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Telephone:</strong> {user.telephone}
          </p>
          <p>
            <strong>Company:</strong> {user.company}
          </p>
        </div>
      </div>
      <h2>Shopping Cart</h2>
      <ul>
        {user.shopping_cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
