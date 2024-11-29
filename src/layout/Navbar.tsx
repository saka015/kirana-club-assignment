import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/allcontests">
        <h1>Contest</h1>
      </Link>
      <Link to="/favorites">
        <IoHeartSharp style={{ color: "red" }} />
      </Link>
    </nav>
  );
};

export default Navbar;
