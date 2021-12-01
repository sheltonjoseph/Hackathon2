import { useState } from "react";
import { Pizzalist } from "./Pizzalist";
import { BrowserRouter , Link, useNavigate } from "react-router-dom";

export function HomePage() {

  const [user, setuser] = useState({
    username: '',
    password: ''
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setuser(previousUser => {
      return {
        ...previousUser,
        [name]: value
      };
    });
  }
//   function handleclick(){
// const navigate = useNavigate()
// navigate('/Pizzalist')
//   }
  function register(event) {
    event.preventDefault();
    console.log(user);
  }
 


  return (
    <div className="home-page">
      <div className="Bg-container" style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/view-frame-with-pizza-black-background_23-2148308883.jpg?size=626&ext=jpg"})` }}>
        <div className="signup">
          <h2>signup</h2>
          <label>Username</label><br />
          <input type="text"
            onChange={handleChange} name="username" value={user.username} /><br />
          <label>Password</label><br />
          <input type="text" onChange={handleChange} name="password" value={user.password} /><br />
          <button onClick={register}>Register</button>
        </div>
        <div className="login">
          <h2>Login</h2>
          <input type="text" placeholder="username" /><br />
          <input type="password" placeholder="password" /><br />
          <button  >Login</button>
          <ul>
        <li>
          <Link to="/pizzalist">pizzalist</Link>
        </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
