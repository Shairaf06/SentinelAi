import Navbar from "../components/Navbar";

import StatCard from "../components/StatCard";

import DetectionSection from "../components/DetectionSection";

function Home() {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

     <div className="flex flex-col items-center justify-center text-center mt-32 px-6">

  <div className="border border-red-500/20 bg-red-500/10 text-red-400 px-4 py-2 rounded-full">
    AI Powered Emergency Response System
  </div>

  <h1 className="text-7xl font-extrabold mt-8 leading-tight">
    Protecting Lives <br />

    <span className="text-cyan-400">
      with Artificial Intelligence
    </span>
  </h1>

  <p className="mt-6 text-gray-400 text-xl max-w-2xl">
    Real-time disaster detection, smart evacuation,
    emergency assistance, and AI-powered crisis management.
  </p>

  <div className="flex gap-4 mt-10">

    <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-lg font-semibold">
      Launch Dashboard
    </button>

    <button className="border border-gray-700 hover:border-cyan-400 px-6 py-3 rounded-xl text-lg">
      Learn More
    </button>

  </div>

</div>
<div className="flex flex-wrap justify-center gap-6 mt-24 px-6">

  <StatCard
    title="Active Alerts"
    value="12"
  />

  <StatCard
    title="Disasters Detected"
    value="189"
  />

  <StatCard
    title="Safe Zones"
    value="34"
  />

  <StatCard
    title="Evacuations"
    value="2.4K"
  />

</div>
<DetectionSection />

<footer className="border-t border-gray-800 mt-24 py-6 text-center text-gray-500">

SentinelAI © 2026 | AI-Powered Crisis Management Platform

</footer>

    </div>
  );
}

export default Home;