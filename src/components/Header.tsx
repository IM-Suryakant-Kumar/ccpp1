import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between gap-4 p-4 border-b-2 border-gray-300">
      <h1 className="text-logo text-xl font-bold">CCPP1</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/profile">Profile</Link>
      </nav>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
