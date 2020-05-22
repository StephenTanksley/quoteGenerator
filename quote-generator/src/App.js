import React, { useState } from "react";
import { actions, body_part, adjective, noun } from "./modules/modules";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const actions_length = Math.floor(Math.random() * actions.length);
    const body_part_length = Math.floor(Math.random() * body_part.length);
    const adjective_length = Math.floor(Math.random() * adjective.length);
    const noun_length = Math.floor(Math.random() * noun.length);

    setQuote(`${actions[actions_length]} my ${body_part[body_part_length]}, you
      ${adjective[adjective_length]} ${noun[noun_length]}.`);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Get Adam Driver Quote</button>
      <div>{quote}</div>
    </div>
  );
};

export default App;
