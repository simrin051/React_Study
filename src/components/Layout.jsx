import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import authContext from "../contexts/AuthContext";

export const Layout = () => {
  const idOfBlog = 5;
  const auth = useContext(authContext);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/blogs/' + idOfBlog}>Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Are you authenticated?</h1>
        {auth.status ?
          <p>Yes you are loggedin</p>
          :
          <p>Nopes</p>
        }

      {!auth.status && <button onClick={auth.login}>Click To Login</button> }
      </div>
      <Outlet />
    </>
  )
};

export default Layout;