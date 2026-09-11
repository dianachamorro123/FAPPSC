import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirigir a las notas cuando la autenticación sea exitosa
  useEffect(() => {
    if (isAuthenticated) navigate("/notes");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] px-4">
      <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Iniciar Sesión</h2>

        {signinErrors && signinErrors.map((error, i) => (
          <div key={i} className="bg-red-500/20 border border-red-500 text-red-300 p-2 rounded-lg text-sm text-center mb-4">
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
          <div>
            <label className="text-zinc-300 text-sm font-medium mb-1 block">Correo electrónico</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              placeholder="tu@correo.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">El correo es requerido</p>}
          </div>

          <div>
            <label className="text-zinc-300 text-sm font-medium mb-1 block">Contraseña</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">La contraseña es requerida</p>}
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200 mt-2"
          >
            Ingresar
          </button>
        </form>

        <p className="text-zinc-400 text-sm flex justify-between gap-x-2 mt-6 text-center">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline font-semibold">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;