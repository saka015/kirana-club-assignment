import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "@shopify/polaris";

const Navbar = () => {
  return (
    <nav>
      <div className="flex gap">
        <Link to="/">
          <Button size="large">Home</Button>
        </Link>
        <Link to="/allcontests">
          <Button size="large">All Contests</Button>
        </Link>
      </div>
      <Link to="/favourites">
        <IoHeartSharp style={{ color: "red" }} />
      </Link>
    </nav>
  );
};

export default Navbar;
