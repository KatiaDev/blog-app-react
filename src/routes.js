import Posts from "./containers/Posts";
import { PostsProvider } from "./contexts/PostsContext";

const appRoutes = [
  {
    path: "/posts",
    title: "Posts List",
    permissions: ["READ_POST", "ADMIN"],
    render: () => (
      <PostsProvider>
        <Posts />
      </PostsProvider>
    ),
  },
];

export default appRoutes;
