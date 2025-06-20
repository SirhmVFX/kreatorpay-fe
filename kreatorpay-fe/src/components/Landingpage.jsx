import React from 'react'



const Landingpage = () => {
  return (
    <div className='min-h-screen bg-white text-gray-900 flex flex-col'>
        <nav className='w-full px-6 py-4 bg-white border-b shadow-sm flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
                <img src="/src/assets/k.png" alt="logo" className='w-8 h-8 object-contain' />
                <span className="text-xl font-bold text-blue-700">Kreatorpay</span>
            </div>
            <div className="space-x-6 hidden md:flex">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-indigo-600 transition">FAQ</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                Sign In
             </button>

            </div>
        </nav>
    </div>
  )
}

export default Landingpage