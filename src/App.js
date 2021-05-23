import "./App.css";
import Posts from "./containers/Posts";

import { PostsProvider } from "./contexts/PostsContext";

function App() {
  return (
    <div className="App">
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </div>
  );
}

export default App;
