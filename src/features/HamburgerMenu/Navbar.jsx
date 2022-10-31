import { categories } from "./categories";
import MenuItems from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {categories.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
