import React, { useEffect } from "react";
import { useSearch } from "../contexts/SearchContext";
import { useUsers } from "../contexts/UsersContext";

export default function Users() {
  const { fetchUsers } = useUsers();
  const { filteredData } = useSearch();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div style={{ textAlign: "left", padding: 50 }}>
      {filteredData.map(({ id, name, username, email, phone, website }) => (
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
