function StatCard({ title, value }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-64 hover:border-cyan-400 transition">

      <p className="text-gray-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3 text-cyan-400">
        {value}
      </h2>

    </div>
  );
}

export default StatCard;