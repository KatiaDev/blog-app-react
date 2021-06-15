import React, { useEffect } from "react";
import { useAlbums } from "../contexts/AlbumsContext";
import { useSearch } from "../contexts/SearchContext";
import AlbumView from "../components/AlbumView";

export default function Albums() {
  const { fetchAlbums } = useAlbums();
  const { filteredData } = useSearch();

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return (
    <div>
      {filteredData.map(({ id, title, userId }) => (
        <AlbumView
          key={id}
          id={id}
          title={title}
          userId={userId}
          newData={false}
        />
      ))}
    </div>
  );
}
