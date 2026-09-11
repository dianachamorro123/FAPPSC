import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-slate-100 relative overflow-hidden px-4 bg-zinc-950">
      {/* Luces de fondo centradas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

      {/* Sección Principal / Hero */}
      <section className="text-center max-w-3xl mx-auto">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Workspace DevelopersNeas
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
          Tus ideas, ordenadas en{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            un solo lugar
          </span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Una plataforma rápida y segura para capturar apuntes, estructurar tareas y mantener tu flujo de trabajo al día.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/register"
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Empezar gratis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            to="/login"
            className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            Iniciar sesión
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
