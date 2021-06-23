import React, { useCallback, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function UserView({ userId }) {
  const [user, setUser] = useState(null);

  const params = useParams();
  console.log("params: ", params);
  const location = useLocation();
  console.log("location: ", location);
  const { state } = location;
  console.log("state: ", state);

  const fetchUser = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params?.idUser}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [params?.idUser]);

  useEffect(() => {
    if (params?.idUser) {
      fetchUser();
    }
  }, [params?.idUser, fetchUser]);

  console.log("user: ", user);

  return (
    <>
      {user ? (
        <div style={{ margin: 10, padding: 5 }}>
          <p>{`Name: ${user.name}`}</p>
          <p>{`Username: ${user.username}`}</p>
          <p>{`email: ${user.email}`}</p>
          <p>{`phone: ${user.phone}`}</p>
          <p>{`website: ${user.website}`}</p>
        </div>
      ) : (
        <div style={{ margin: 10 }}>User not found.</div>
      )}
    </>
  );
}
