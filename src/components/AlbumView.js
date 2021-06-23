import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AlbumView({ id, title, userId, newData }) {
  const [newAlbum, setNewAlbum] = useState(null);

  const location = useLocation();
  const params = useParams();
  const { state } = location;

  const fetchNewAlbum = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${params?.idAlbum}`)
      .then((response) => response.json())
      .then((data) => setNewAlbum(data));
  }, [params?.idAlbum]);

  useEffect(() => {
    if (params?.idAlbum) {
      fetchNewAlbum();
    }
  }, [params?.idAlbum, fetchNewAlbum]);
  /*
  console.log("newData 'Album': ", newData);
  console.log("params: ", params);
  console.log("location: ", location);
  console.log("state: ", state);*/

  return (
    <div style={{ margin: 20 }}>
      {!newData ? (
        <div style={{ margin: 10, padding: 5 }}>
          <p>{`Title: ${title}`}</p>
          <p>{`User: ${userId}`}</p>
          <Link to={{ pathname: `/albums/${id}`, state: { title, userId } }}>
            <button>Show Details</button>
          </Link>
        </div>
      ) : (
        <div style={{ margin: 10, padding: 5 }}>
          <p>Title: {state?.title || newAlbum?.title}</p>
          <Link
            to={{
              pathname: `/users/${state?.userId || newAlbum?.userId}`,
              state: { userId: state?.userId || newAlbum?.userId },
            }}
          >
            <p>User: {state?.userId || newAlbum?.userId}</p>
          </Link>
        </div>
      )}
    </div>
  );
}
