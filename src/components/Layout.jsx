import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  const idOfBlog = 5;
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/blogs/'+idOfBlog}>Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;