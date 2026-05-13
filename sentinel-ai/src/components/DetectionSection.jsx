function DetectionSection() {
  return (
    <div className="mt-24 px-6 flex justify-center">

      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 w-full max-w-5xl">

        <h2 className="text-4xl font-bold text-cyan-400">
          AI Disaster Detection
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Upload disaster images or videos for AI-powered analysis.
        </p>

        <div className="border-2 border-dashed border-gray-700 rounded-2xl mt-10 p-16 text-center">

          <p className="text-2xl font-semibold">
            Upload Image or Video
          </p>

          <p className="text-gray-500 mt-3">
            Fire • Flood • Smoke • Hazard Detection
          </p>

          <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-lg">
            Upload File
          </button>
          <div className="mt-10 bg-red-500/10 border border-red-500/30 rounded-2xl p-6">

  <h3 className="text-2xl font-bold text-red-400">
    Fire Hazard Detected 🔥
  </h3>

  <p className="text-gray-300 mt-3">
    Severity Level: High
  </p>

  <p className="text-gray-400 mt-2">
    Emergency response teams alerted.
  </p>

</div>

        </div>

      </div>

    </div>
  );
}

export default DetectionSection;