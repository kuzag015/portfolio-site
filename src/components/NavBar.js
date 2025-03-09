import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-transparent text-gray-900 py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors duration-300">
          Home
        </Link>
        <Link href="/work" className="text-sm font-medium hover:text-gray-600 transition-colors duration-300">
          Film Work
        </Link>
		<Link href="/music" className="text-sm font-medium hover:text-gray-600 transition-colors duration-300">
          Music Production
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors duration-300">
          About
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors duration-300">
          Contact
        </Link>
		<Link href="/services" className="text-sm font-medium hover:text-gray-600 transition-colors duration-300">
          Services
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;