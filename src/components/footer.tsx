import Link from "next/link";
import Image from "next/image";

export default function footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-5  max-w-[1200px] mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/assets/k.png" alt="Kreatorpay" className="w-[40px] h-[40px] " width={1000} height={1000} />
            <span className="font-bold text-xl text-white">Kreatorpay</span>
          </div>
          <p className="text-sm text-gray-400">
            Empowering creators with seamless financial tools. Manage your payments, budgets, and earnings smarter.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-indigo-400">About</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Careers</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Press</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-indigo-400">Features</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Pricing</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Integrations</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-indigo-400">Support</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">Community</Link></li>
            <li><Link href="#" className="hover:text-indigo-400">FAQs</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Kreatorpay. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="text-gray-400 hover:text-indigo-400">
            {/* Replace with your actual SVG icons */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11 9.95V15h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3V12h2.5l-.4 3H14v6A10 10 0 0022 12z" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-indigo-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.6 3H4.4A1.4 1.4 0 003 4.4v15.2A1.4 1.4 0 004.4 21h15.2a1.4 1.4 0 001.4-1.4V4.4A1.4 1.4 0 0019.6 3zM8 17.3H5.7V9H8v8.3zm-1.1-9.4a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6zm11.4 9.4H17V13c0-1-.4-1.7-1.3-1.7-.7 0-1 .5-1.2.9-.1.2-.1.5-.1.7v4.4h-2.3V9h2.2v1.2h.1a2.4 2.4 0 012.2-1.2c1.6 0 2.8 1 2.8 3.3v5z" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-indigo-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 5.924a8.33 8.33 0 01-2.357.646 4.1 4.1 0 001.804-2.27 8.19 8.19 0 01-2.605.99 4.09 4.09 0 00-6.968 3.73A11.6 11.6 0 013.15 4.15a4.09 4.09 0 001.27 5.46A4.08 4.08 0 012.8 9.1v.05a4.1 4.1 0 003.28 4.01 4.07 4.07 0 01-1.85.07 4.09 4.09 0 003.82 2.84A8.21 8.21 0 012 18.407a11.57 11.57 0 006.29 1.85c7.55 0 11.68-6.26 11.68-11.69 0-.18 0-.36-.01-.53A8.4 8.4 0 0022.23 5.92z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
