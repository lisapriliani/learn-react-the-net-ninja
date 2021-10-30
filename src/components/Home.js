import { useState } from "react";

const Home = () => {
  //   let name = "mario";
  const [name, setName] = useState("lisa");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("lalisa");
    setAge(21);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years
      </p>
      <button onClick={handleClick}>Click to change the name</button>
    </div>
  );
};

export default Home;
