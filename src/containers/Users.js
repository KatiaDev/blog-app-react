import React, { useState, useEffect } from "react";

export default function Users() {
  const [usersList, setUsersList] = useState([]);

  const fetchUsersList = () =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsersList(data));

  useEffect(() => {
    fetchUsersList();
  }, []);

  return (
    <div style={{ textAlign: "left", padding: 50 }}>
      {usersList.map(({ id, name, username, email, phone, website }) => (
        <div key={id} style={{ margin: 10, padding: 5 }}>
          <p>{`Name:${name}`}</p>
          <p>{`Username:${username}`}</p>
          <p>{`email:${email}`}</p>
          <p>{`phone:${phone}`}</p>
          <p>{`website:${website}`}</p>
        </div>
      ))}
    </div>
  );
}
