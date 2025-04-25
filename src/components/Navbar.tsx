
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Link to="/" className="text-2xl font-bold mb-2 sm:mb-0">Времена года</Link>
          <div className="flex space-x-4">
            <Link to="/winter" className="hover:text-blue-200 transition-colors">Зима</Link>
            <Link to="/spring" className="hover:text-green-200 transition-colors">Весна</Link>
            <Link to="/summer" className="hover:text-yellow-200 transition-colors">Лето</Link>
            <Link to="/autumn" className="hover:text-orange-200 transition-colors">Осень</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
