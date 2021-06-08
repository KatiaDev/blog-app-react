import React, { useEffect } from "react";
import { useAlbums } from "../contexts/AlbumsContext";
import { useSearch } from "../contexts/SearchContext";

export default function Albums() {
  const { fetchAlbums } = useAlbums();
  const { filteredData } = useSearch();

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return (
    <div>
      {filteredData.map(({ id, title, userId }) => (
        <div key={id}>
          <p>{`Title: ${title}`}</p>
        </div>
      ))}
    </div>
  );
}
