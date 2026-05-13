function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">

      <h1 className="text-3xl font-bold text-cyan-400">
        SentinelAI
      </h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#" className="hover:text-cyan-400">
          Dashboard
        </a>

        <a href="#" className="hover:text-cyan-400">
          Detection
        </a>

        <a href="#" className="hover:text-cyan-400">
          Maps
        </a>

        <a href="#" className="hover:text-cyan-400">
          Assistant
        </a>
      </div>

    </nav>
  );
}

export default Navbar;