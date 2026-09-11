import { Link } from "react-router-dom";

function Navbar1() {
  return (
    <nav className="bg-zinc-800 border-b border-zinc-700 px-10 py-4 flex justify-between items-center shadow-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition">
          DevelopersApp
        </h1>
      </Link>
      <ul className="flex gap-x-4 items-center">
        <li>
          <Link
            to="/login"
            className="text-zinc-300 hover:text-white px-4 py-2 rounded-lg transition"
          >
            Iniciar Sesión
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition"
          >
            Registrarse
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar1;
