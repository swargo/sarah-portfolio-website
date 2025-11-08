import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-2 md:px-[80px] py-3 md:py-8 relative">
      <div className="flex">
        <div className="flex-1 md:-mt-4">
          <Link href="/">
            <img
              src="/images/Logo_V2.jpeg"
              alt="Sahararts brand logo"
              className="max-w-[200px] md:max-w-[300px]"
            />
          </Link>
        </div>
        <nav className="flex-1 justify-end hidden md:flex">
          <ul>
            <li className="inline mx-6">
              <Link href="/">Portfolio</Link>
            </li>
            <li className="inline mx-6">
              <Link href="/about">About</Link>
            </li>
            <li className="inline ml-6">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex-1 justify-end flex items-center">
          <Menu onClick={handleClick} />
        </div>
      </div>
      {isOpen && (
        <nav
          className="absolute left-0 top-20 w-full border bg-wh text-center py-4 z-100"
          onClick={handleClick}
        >
          <ul>
            <li className="px-3 py-3">
              <Link href="/">Portfolio</Link>
            </li>
            <li className="px-3 py-3">
              <Link href="/about">About</Link>
            </li>
            <li className="px-3 py-3">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
