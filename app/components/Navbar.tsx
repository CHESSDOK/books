import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      {/* Top row */}
      <div className="grid grid-cols-3 items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-8">
          <span className="text-orange-500 text-3xl ml-8">📚</span>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="flex border border-gray-400 rounded-full overflow-hidden w-100">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 w-full outline-none"
            />
            <button className="px-3 text-gray-600 hover:text-orange-500">
              🔍
            </button>
          </div>
        </div>

        {/* Login / Signup */}
        <div className="flex justify-end space-x-2">
          <NavLink
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold"
          >
            LOGIN
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold"
          >
            SIGN UP
          </NavLink>
        </div>
      </div>

      {/* Bottom row */}
      <div className="bg-yellow-100">
        <ul className="flex justify-center space-x-6 py-2 font-bold text-black">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/books">BOOKS</NavLink>
          </li>
          <li>
            <NavLink to="/category">CATEGORY</NavLink>
          </li>
          <li>
            <NavLink to="/authors">AUTHORS</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
