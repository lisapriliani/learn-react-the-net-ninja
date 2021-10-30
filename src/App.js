import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const title = "Welcome to the new Blog";
  const likes = 50;
  const link = "google.com";
  // const person = {
  //   name: "yoshi",
  //   age: 30,
  // };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
