import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-3 py-1">
      {/* action links */}
      <ul className="flex justify-end gap-3">
        <li>
          <Link className="text-xs md:text-sm" href="#help">
            Help
          </Link>
        </li>
        <li>
          <Link className="text-xs md:text-sm" href="#orders&returns">
            Orders & Returns
          </Link>
        </li>
        <li>
          <Link className="text-xs md:text-sm" href="#profile">
            Hi, John
          </Link>
        </li>
      </ul>
      {/* navbar */}
      <nav className="flex items-center justify-between py-2 md:py-3">
        {/* logo */}
        <h2 className="font-bold md:text-2xl">ECOMMERCE</h2>
        {/* navlinks */}
        <ul className="hidden gap-4 md:flex">
          <li>
            <Link className="text-sm" href="#categories">
              Categories
            </Link>
          </li>
          <li>
            <Link className="text-md" href="#sale">
              Sale
            </Link>
          </li>
          <li>
            <Link className="text-md" href="#clearance">
              Clearance
            </Link>
          </li>
          <li>
            <Link className="text-md" href="#new-stock">
              New stock
            </Link>
          </li>
          <li>
            <Link className="text-md" href="#trending">
              Trending
            </Link>
          </li>
        </ul>
        {/* action buttons */}
        <ul className="flex gap-2">
          <li>
            <Image className="cursor-pointer" src="/search.svg" width={32} height={32} alt="search" />
          </li>
          <li>
            <Image className="cursor-pointer" src="/cart.svg" width={32} height={32} alt="search" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
