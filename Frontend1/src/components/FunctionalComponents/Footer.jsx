import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3001/getUserDetails", {
          headers: { "x-access-token": token },
        })
        .then((response) => {
          setUser(response.data); // Set user data in state
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []);

  return (
    <footer>
      {user ? (
        <h1>Welcome, {user.firstName} {user.lastName} {user.email} {user.phoneNumber} !</h1>
      ) : (
        <h1>Loading user details...</h1>
      )}
    </footer>
  );
};

export default Footer;
