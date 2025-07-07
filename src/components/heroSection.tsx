<<<<<<< HEAD

import Image from "next/image";
// import logo from "../assets/k.png";
import Button from "./button";

=======
import Image from "next/image";
>>>>>>> fixed-forgotpassword-page
export default function heroSection() {
  return (
    <div className="text-center py-10 bg-white relative overflow-hidden max-w-[1200px] mx-auto ">
      <div className="flex justify-center mb-6">
        {/* <img src={logo} alt="Logo" className="w-16 h-16" /> */}
      </div>

      <p className="text-sm text-indigo-600 font-medium flex items-center justify-center">
        <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs mr-2">New</span>
        Introducing AI Integration for Enhanced Budgeting
      </p>

      <h1 className="text-7xl font-bold mt-6 leading-tight">Budgeting Made <br /> Brilliantly Simple!</h1>

      <div className="mt-8 space-x-4">
<<<<<<< HEAD

=======
>>>>>>> fixed-forgotpassword-page
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md cursor-pointer">Get Started</button>
        <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md cursor-pointer">Learn More →</button>
      </div>

      <div className="flex justify-center mt-12">
        <Image src="/assets/Avatar.jpg" alt="Avatar" className="w-[40px] h-[40px] rounded-full" width={40} height={40} />
<<<<<<< HEAD

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Get Started</button>
        <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md">Learn More →</button>
      </div>

      <div className="flex justify-center mt-12">
        <img src="../assets/avatars.png" alt="Avatars" className="w-10 h-10 rounded-full border-2 border-white" />
=======
>>>>>>> fixed-forgotpassword-page
        <p className="text-sm font-medium ml-3">4.9 ★ Rated by 100k+ Customers</p>
      </div>

      <p className="text-gray-600 max-w-xl mx-auto mt-4">Empower your financial journey with Kreatorpay. Master your budget, achieve your goals, and embrace financial freedom. Your path to success begins here!</p>
    </div>
  );
}
