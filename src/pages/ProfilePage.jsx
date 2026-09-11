import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)] px-4">
      <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-2xl w-full max-w-md shadow-2xl text-center">
        <div className="w-20 h-20 bg-indigo-600 text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-indigo-400">
          {user?.username?.charAt(0).toUpperCase() || "U"}
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">{user?.username}</h1>
        <p className="text-zinc-400 text-sm mb-6">{user?.email}</p>

        <div className="border-t border-zinc-700/80 pt-4 text-left">
          <div className="flex justify-between text-xs text-zinc-400 py-1">
            <span>ID de usuario:</span>
            <span className="font-mono text-zinc-300">{user?.id || user?._id}</span>
          </div>
          <div className="flex justify-between text-xs text-zinc-400 py-1">
            <span>Estado de cuenta:</span>
            <span className="text-emerald-400 font-semibold">Activa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
