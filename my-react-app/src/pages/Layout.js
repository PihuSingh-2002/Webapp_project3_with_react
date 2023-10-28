import { Outlet, Link } from "react-router-dom";

const myvar = {
    background:'yellowgreen',
    padding:'10px 30px',
}

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pihu">Pihu</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;