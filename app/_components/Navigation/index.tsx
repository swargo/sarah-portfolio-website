import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="w-full px-1 md:px-[80px] py-6 md:py-8 relative">
      <ul className="flex">
        <div className="flex-1 -mt-4">
          <Link href="/">
            <img
              src="/images/Logo_V2.jpeg"
              alt="Sahararts brand logo"
              className="max-w-[300px]"
            />
          </Link>
        </div>
        <div className="flex-1 justify-end hidden md:flex">
          <li className="inline mx-6">
            <Link href="/">Portfolio</Link>
          </li>
          <li className="inline mx-6">
            <Link href="/about">About</Link>
          </li>
          <li className="inline ml-6">
            <Link href="/contact">Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
