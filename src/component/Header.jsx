import React from "react";
import { Link } from "react-router-dom";
// import "../css/todo.css";

const Header = () => (
  <div className="header">
    <hr />
    <h1> react-alix framework demo</h1>

    <ul>
      {/* <ol> */}
      <Link className="link" to="/">
        Home |
      </Link>
      {/* </ol> */}

      {/* <ol> */}
      <Link className="link" to="/counter">
        Counter Demo |{" "}
      </Link>
      {/* </ol> */}

      {/* <ol> */}
      <Link className="link" to="/todo">
        Todo Demo{" "}
      </Link>
      {/* </ol> */}
    </ul>
    <hr />
  </div>
);
export default Header;
