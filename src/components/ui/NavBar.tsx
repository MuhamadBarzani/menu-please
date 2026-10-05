import { Link } from "react-router";
function NavBar() {
  return (
    <nav className="flex items-center gap-3 bg-primary h-15 px-5 text-xl">
      <div className="flex w-full whitespace-nowrap gap-4">
        <Link to="/">Home</Link>
        <Link to="/add-item">Add Item</Link>
      </div>
      <span className="w-full"></span>
      <Link to="/Login">Login</Link>
    </nav>
  );
}

export default NavBar;
