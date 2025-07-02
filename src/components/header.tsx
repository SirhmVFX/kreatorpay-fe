
import Image from "next/image";
import LinkComponent from "./LinkComponent";

// import logo from "../app/assets/k.png";

import Link from "next/dist/client/link";
import Button from "./button";
import LinkComponent from "./LinkComponent";



export default function header() {
  return (
    <nav className="flex items-center justify-between py-4 px-8  max-w-[1200px] mx-auto ">
      <div className="flex items-center space-x-2">

        <Image src="/assets/k.png" alt="Kreatorpay" className="w-8 h-8" width={1000} height={1000} />

        {/* <img src={logo} alt="Kreatorpay" className="w-8 h-8" /> */}

        <span className="font-bold text-lg">kreatorpay</span>
      </div>

      <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {["Company", "Product", "Pricing", "FAQ"].map((item) => (
          <li key={item}><a href="#" className="text-gray-700 hover:text-indigo-600">{item}</a></li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">

        <LinkComponent label="Sign In" href="/login" type="outline" />
        <LinkComponent label="Start for free" href="/signup" type="primary" />

        <LinkComponent label="Sign In" href="/login" type="outline" />
        <LinkComponent label="Start for free" href="/signup" type="primary" />

      </div>
    </nav>
  );
}
