import React, { useState, useEffect } from "react";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = () =>
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data));

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      {albums.map(({ id, title, userId }) => (
        <div key={id}>
          <p>{`Title: ${title}`}</p>
        </div>
      ))}
    </div>
  );
}
