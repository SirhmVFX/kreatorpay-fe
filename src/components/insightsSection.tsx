import Button from "./button";

export default function insightsSection() {
  return (
    <section className="py-20 px-5 bg-white max-w-[1200px] mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Financial <span className="text-indigo-600">Insights</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Unlock personalized recommendations for smarter financial decisions powered by cutting-edge AI technology.
          </p>
          <Button label="Learn More" type="outline" />
        </div>

        {/* Right Side Cards */}
        <div className="flex-1 grid md:grid-cols-2 gap-6">
          
          {/* Suggestion Card */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-4">Budget Control</h3>
            <div className="flex justify-between mb-2">
              <span>Suggestion</span>
              <span className="font-medium text-indigo-600">$23.40</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Income</span>
              <span className="font-medium text-green-600">$150.00</span>
            </div>
            <div className="flex justify-between">
              <span>Spent</span>
              <span className="font-medium text-red-600">$36.20</span>
            </div>
          </div>

          {/* Transaction Card */}
          <div className="bg-white border p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-4">Transaction</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Spotify</span>
                <span>$3,500</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Figma</span>
                <span>-$15.00</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Music</span>
                <span>-$10.00</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Funds Managed Effortlessly */}
      <div className="max-w-7xl mx-auto mt-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image / Illustration Placeholder */}
        <div className="flex-1 bg-indigo-100 h-64 rounded-2xl flex items-center justify-center">
          <span className="text-indigo-600 font-bold">[Graph Image]</span>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">
            Funds Managed <span className="text-indigo-600">Effortlessly</span>
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Simplify your financial flow with intuitive funds tracking. Manage income, monitor expenses, and stay in control of your money effortlessly.
          </p>
          <Button label="Get Started" />
        </div>

      </div>
    </section>
  );
}
