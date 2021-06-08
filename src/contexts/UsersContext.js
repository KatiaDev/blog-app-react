import React, { useCallback, useContext, useState } from "react";

export const UsersContext = React.createContext();

export function useUsers() {
  return useContext(UsersContext);
}

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const value = {
    users,
    fetchUsers,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}
