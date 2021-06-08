import React, { useContext, useState } from "react";

export const AlbumsContext = React.createContext();

export function useAlbums() {
  return useContext(AlbumsContext);
}

export function AlbumsProvider({ children }) {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = () =>
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  const value = {
    albums,
    fetchAlbums,
  };

  return (
    <AlbumsContext.Provider value={value}>{children}</AlbumsContext.Provider>
  );
}
