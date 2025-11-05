import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="w-full px-[80px] py-8 relative">
      <ul className="flex">
        <div className="flex-1 -mt-25 -ml-10 relative top-0">
          <Link href="/">
            <Image
              src="/images/Logo_v2.png"
              alt="Sahararts brand logo"
              width={324}
              height={243}
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
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
