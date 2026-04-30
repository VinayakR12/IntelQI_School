// src/components/Navbar.tsx

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">EduERP</h1>

      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/features" className="hover:text-blue-600">Features</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;