export default function statsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20 px-5 max-w-[1200px] mx-auto">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-700 text-white p-8 rounded-2xl shadow-lg text-left">
        <h2 className="text-5xl font-bold">2K+</h2>
        <p className="mt-4 text-sm">Budgets Created. Stay organized and meet financial goals with clear budgeting.</p>
      </div>
      <div className="border p-8 rounded-2xl shadow-sm text-left">
        <h2 className="text-5xl font-bold text-indigo-600">48%</h2>
        <p className="mt-4 text-sm text-gray-600">Saving Rate. See the percentage of income saved for a quick snapshot.</p>
      </div>
      <div className="border p-8 rounded-2xl shadow-sm text-left">
        <h2 className="text-5xl font-bold text-indigo-600">34K+</h2>
        <p className="mt-4 text-sm text-gray-600">Funds Tracked. Stay on top of every financial move at a glance.</p>
      </div>
    </div>
  );
}