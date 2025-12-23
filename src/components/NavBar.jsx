import MenuNavBar from "./MenuNavBar";
import ModeToggle from "./ModeToggle";

function NavBar({ tasks }) {
  return (
    <nav className="flex justify-between items-center mx-8 py-6">
      <MenuNavBar tasks={tasks} />
      <ModeToggle />
    </nav>
  );
}

export default NavBar;
