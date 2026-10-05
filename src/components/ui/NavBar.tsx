import type { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { supabase } from "../../utils/supabase";
function NavBar() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();
  }, []);
  return (
    <nav className="flex items-center gap-3 bg-primary h-15 px-5 text-xl whitespace-nowrap">
      <div className="flex w-full gap-4">
        <Link to="/">Home</Link>
        <Link to="/add-item">Add Item</Link>
      </div>
      <span className="w-full"></span>
      <Link to="/Login">Sign Out</Link>
    </nav>
  );
}

export default NavBar;
