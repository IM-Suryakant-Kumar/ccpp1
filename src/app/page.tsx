import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-6 p-6 text-center md:flex-row">
      <section className="flex flex-col items-center justify-center md:flex-1">
        <Image
          className="border-logo rounded-full border-4 p-0.5"
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
        <h1 className="text-logo font-cinzel mt-2 text-2xl font-semibold">
          CCPP1
        </h1>
        <p className="max-w-xs text-gray-600">
          Connect and share your thought and snaps with friend and community
        </p>
        <Link
          href="feed"
          className="bg-logo text-primary font-cinzel mt-6 rounded-full px-6 py-1"
        >
          Get Started
        </Link>
      </section>
      <section className="flex items-center justify-center md:flex-1">
        <Image
          className="w-full max-w-44 object-contain"
          src="/hero.svg"
          alt="hero image"
          width={100}
          height={100}
        />
      </section>
    </main>
  );
}
