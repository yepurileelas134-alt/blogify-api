import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Header() {

  const { logout, isAuthenticated } = useAuth();

  return (

    <div>

      <Link to="/">Login</Link>

      {isAuthenticated() && (
        <>
          <Link to="/dashboard">Dashboard</Link>

          <button onClick={logout}>Logout</button>
        </>
      )}

    </div>
  );
}

export default Header;