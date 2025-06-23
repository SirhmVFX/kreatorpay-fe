import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black px-4 lg:px-20 py-10">
      {/* Navbar */}
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/src/assets/k.png" alt="Kreatorpay" className="w-8 h-8" />
          <span className="font-bold text-lg">kreatorpay</span>
        </div>
     <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
         {['Company', 'Product', 'Pricing', 'FAQ'].map((item) => (
         <li key={item}>
         <a
         href="#"
        className="relative text-gray-700 hover:text-indigo-600 transition duration-300"
        >
        <span className="hover-underline">{item}</span>
       </a>
       </li>
        ))}
    </ul>
        <div className="flex items-center space-x-4">
          <button className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:scale-105 hover:shadow-md">
            Sign In
        </button>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:scale-105 hover:shadow-lg">Start for free</button>
        </div>
      </nav>
      <br/>
      <br/>



       {/* Logo Center Circle */}
        <div className='flex justify-center items-center mt-10'>
            <img src="/src/assets/k.png" alt=""  className="w-15 h-15"/>
        </div>

      {/* Hero Section */}
      <div className="text-center mt-20 relative">
        <p className="text-sm text-indigo-600 font-medium flex items-center justify-center space-x-2">
          <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">New</span>
          <span>Introducing AI Integration for Enhanced Budgeting</span>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Budgeting Made <br className="hidden md:block" />
          Brilliantly Simple!
        </h1>

        <div className="mt-8 space-x-4">
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:scale-105 hover:shadow-lg">
            Get Started
          </button>
          <button className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:scale-105 hover:shadow-md">
            Learn More →
          </button>
        </div>

        
      </div>

      {/* Review Section */}
      <div className="mt-20 flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <img src="/avatars.png" alt="Customers" className="w-10 h-10 rounded-full border-2 border-white -ml-2" />
          <span className="text-sm font-medium">4.9 ★ Rated by 100k+ Customers</span>
        </div>
        <p className="text-center max-w-xl mt-4 text-gray-600">
          Empower your Financial journey with Kreatorpay. Achieve your goals, master your budget, and embrace financial freedom. Your path to success begins here!
        </p>
      </div>
    </div>
  );
}
