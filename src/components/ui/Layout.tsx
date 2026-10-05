import NavBar from "./NavBar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <NavBar />
      <main className="p-2">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
