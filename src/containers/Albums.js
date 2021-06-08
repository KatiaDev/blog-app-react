import React, { useEffect } from "react";
import { useAlbums } from "../contexts/AlbumsContext";
import { useSearch } from "../contexts/SearchContext";

export default function Albums() {
  const { albums, fetchAlbums } = useAlbums();
  const { filtered } = useSearch();

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  const albumsList = () => {
    if (filtered) {
      return (
        <div>
          {filtered.map(({ id, title, userId }) => (
            <div key={id}>
              <p>{`Title: ${title}`}</p>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div>
        {albums.map(({ id, title, userId }) => (
          <div key={id}>
            <p>{`Title: ${title}`}</p>
          </div>
        ))}
      </div>
    );
  };

  return <>{albumsList}</>;
}
