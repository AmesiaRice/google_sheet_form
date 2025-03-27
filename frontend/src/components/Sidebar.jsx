import { Link } from "react-router-dom";
import { useState } from "react";
import { Home, Users, Calendar, DollarSign } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex hide">
      <div 
        className={`bg-gray-800 h-screen hidden md:block text-white p-5 transition-all duration-300  sticky top-0 bottom-0 ${isOpen ? "w-64" : "w-16"}`} 
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
              <Home />
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/form" className="flex items-center space-x-2 hover:text-gray-300">
              <Users />
              {isOpen && <span>Google Demo</span>}
            </Link>
          </li>
          {/* <li>
            <Link to="/attendance" className="flex items-center space-x-2 hover:text-gray-300">
              <Calendar />
              {isOpen && <span>Attendance</span>}
            </Link>
          </li> */}
          {/* <li>
            <Link to="/payroll" className="flex items-center space-x-2 hover:text-gray-300">
              <DollarSign />
              {isOpen && <span>Payroll</span>}
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
