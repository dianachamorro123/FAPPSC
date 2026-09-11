import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar2() {
  const { logout, user } = useAuth();

  return (
    <nav className="bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md sticky top-4 z-50 max-w-7xl mx-auto my-4 px-6 py-3 rounded-2xl flex justify-between items-center shadow-2xl">
      {/* Logo */}
      <Link to="/notes" className="flex items-center gap-2.5 group">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black group-hover:scale-105 transition-transform">
          D
        </div>
        <h1 className="text-lg font-bold text-white tracking-tight">
          Developers<span className="text-cyan-400">App</span>
        </h1>
      </Link>

      {/* Menú de sesión activa */}
      <ul className="flex items-center gap-3">
        {/* Saludo al usuario */}
        <li className="hidden sm:flex items-center gap-2 bg-zinc-800/50 border border-zinc-700/40 px-3.5 py-1.5 rounded-full text-xs text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>
            Hola, <strong className="text-white font-semibold">{user?.username}</strong>
          </span>
        </li>

        {/* Botón Nueva Nota */}
        <li>
          <Link
            to="/add-note"
            className="bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-cyan-500/10 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
            <span>Nueva Nota</span>
          </Link>
        </li>

        {/* Enlace Perfil */}
        <li>
          <Link
            to="/profile"
            className="text-zinc-300 hover:text-white text-xs sm:text-sm font-medium px-3 py-2 transition"
          >
            Perfil
          </Link>
        </li>

        {/* Botón Cerrar Sesión */}
        <li>
          <button
            onClick={() => logout()}
            className="bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl transition-all border border-zinc-700/50 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Cerrar Sesión</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar2;
