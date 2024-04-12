import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto mt-8 w-[90%] max-w-[25rem] rounded-2xl border-2 border-[#c1c1c1] px-8 py-8 pb-14 text-center">
      <h2 className="mb-4 text-lg font-bold md:text-xl">Please mark your interests!</h2>
      <p className="text-xs">We will keep you notified.</p>
      <h3 className="text-left text-sm mt-4 font-semibold">My saved interests!</h3>
      {/*  */}
      </main>
    </>
  );
}
