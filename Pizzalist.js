import { useState, useEffect } from "react";

export function Pizzalist() {

  const [pizzalist, setpizzalist] = useState([]);

  const API_URL = "https://pizzadelivery07.herokuapp.com"

  useEffect(() => {
    fetch(`${API_URL}/pizzalist`)
      .then((data) => data.json())
      .then((pizzalist) => setpizzalist(pizzalist));
  }, []);

  return (
    <div>
      <h1>Available Pizza's</h1>
      <div className="pizza-list-container">
        {pizzalist.map((pizza) => (
          <div className="pizza-container">
            <img className="pizza-picture" src={pizza.picture} />
            <p className="pizza-name">{pizza.name}</p>
            <p className="pizza-name">{pizza.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
