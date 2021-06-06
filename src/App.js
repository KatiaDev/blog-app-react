import Home from "./containers/Home";

function App() {
  return (
    <>
      <Home permissions={["ADMIN"]} />
    </>
  );
}

export default App;
