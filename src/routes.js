import PostView from "./components/PostView";
import Albums from "./containers/Albums";
import Posts from "./containers/Posts";
import Users from "./containers/Users";

export const SINGLE_POST = "/posts/:id";

const appRoutes = [
  {
    path: "/users",
    title: "Users",
    menuLocation: true,
    permissions: ["ADMIN"],
    render: () => <Users />,
  },
  {
    path: "/posts",
    title: "Posts",
    menuLocation: true,
    permissions: ["READ_POSTS", "ADMIN"],
    render: (props) => <Posts {...props} />,
  },

  {
    path: "/albums",
    title: "Albums",
    menuLocation: true,
    permissions: ["READ_ALBUM", "ADMIN"],
    render: () => <Albums />,
  },
  {
    path: SINGLE_POST,
    title: "Post",
    menuLocation: false,
    permissions: ["READ_POST"],
    render: (props) => <PostView {...props} newData />,
  },
  {
    path: "",
    title: "Dashboard",
    menuLocation: true,
    permissions: [],
    render: () => "Dashboard",
  },
];

export default appRoutes;
