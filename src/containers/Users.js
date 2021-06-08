import React, { useEffect } from "react";
import { usePosts } from "../contexts/PostsContext";
import { useSearch } from "../contexts/SearchContext";

export default function Users() {
  const { users, fetchUsers } = usePosts();
  const { filtered } = useSearch();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const usersList = () => {
    if (filtered) {
      return (
        <div style={{ textAlign: "left", padding: 50 }}>
          {filtered.map(({ id, name, username, email, phone, website }) => (
            <div key={id} style={{ margin: 10, padding: 5 }}>
              <p>{`Name: ${name}`}</p>
              <p>{`Username: ${username}`}</p>
              <p>{`email: ${email}`}</p>
              <p>{`phone: ${phone}`}</p>
              <p>{`website: ${website}`}</p>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div style={{ textAlign: "left", padding: 50 }}>
        {users.map(({ id, name, username, email, phone, website }) => (
          <div key={id} style={{ margin: 10, padding: 5 }}>
            <p>{`Name: ${name}`}</p>
            <p>{`Username: ${username}`}</p>
            <p>{`email: ${email}`}</p>
            <p>{`phone: ${phone}`}</p>
            <p>{`website: ${website}`}</p>
          </div>
        ))}
      </div>
    );
  };

  return <>{usersList}</>;
}
