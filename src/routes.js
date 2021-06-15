import PostView from "./components/PostView";
import AlbumView from "./components/AlbumView";
import UserView from "./components/UserView";
import Albums from "./containers/Albums";
import Posts from "./containers/Posts";
import Users from "./containers/Users";

const appRoutes = [
  {
    path: "/",
    title: "Home",
    menuLocation: true,
    exact: true,
    permissions: [],
    render: () => "Welcome!!",
  },
  {
    path: "/users",
    title: "Users",
    menuLocation: true,
    exact: true,
    permissions: ["ADMIN"],
    render: (props) => <Users {...props} />,
  },
  {
    path: "/posts",
    title: "Posts",
    menuLocation: true,
    exact: true,
    permissions: ["READ_POSTS", "ADMIN"],
    render: (props) => <Posts {...props} />,
  },

  {
    path: "/albums",
    title: "Albums",
    menuLocation: true,
    exact: true,
    permissions: ["READ_ALBUM", "ADMIN"],
    render: (props) => <Albums {...props} />,
  },
  {
    path: "/posts/:idPost",
    title: "Post",
    menuLocation: false,
    exact: true,
    permissions: ["READ_POST", "ADMIN"],
    render: (props) => <PostView {...props} newData />,
  },

  {
    path: "/albums/:idAlbum",
    title: "Album",
    menuLocation: false,
    exact: true,
    permissions: ["READ_ALBUM", "ADMIN"],
    render: (props) => <AlbumView {...props} newData />,
  },
  {
    path: "/users/:idUser",
    title: "User",
    menuLocation: false,
    exact: true,
    permissions: ["ADMIN"],
    render: (props) => <UserView {...props} />,
  },
];

export default appRoutes;
