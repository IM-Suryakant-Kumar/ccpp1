import Link from "next/link";

const Signup = () => {
  return (
    <div className="mx-auto mt-8 w-[90%] max-w-[25rem] rounded-2xl border-2 border-[#c1c1c1] px-8 py-8 pb-14 text-center">
      <h2 className="mb-4 text-lg font-bold md:text-xl">Create your account</h2>
      {/* fields */}
      <label className="mb-1 block text-left text-sm" htmlFor="name">
        Name
      </label>
      <input
        className="mb-4 w-full rounded-md border p-2 text-xs"
        id="name"
        type="text"
        placeholder="Enter"
      />
      <label className="mb-1 block text-left text-sm" htmlFor="email">
        Email
      </label>
      <input
        className="mb-4 w-full rounded-md border p-2 text-xs"
        id="email"
        type="email"
        placeholder="Enter"
      />
      <label className="mb-1 block text-left text-sm" htmlFor="password">
        Password
      </label>
      <input
        className="mb-4 w-full rounded-md border p-2 text-xs"
        id="password"
        type="password"
        placeholder="Enter"
      />
      <button className="mb-4 block h-10 w-full  rounded-md bg-black text-xs text-white">
        CREATE ACCOUNT
      </button>
      <div>
        <span className="text-xs">Have an Account? </span>
        <Link className="text-sm font-semibold" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
