import Link from "next/link";
import SignupForm from "~/components/signupForm";

const Signup = () => {
  return (
    <div className="mx-auto mt-8 w-[90%] max-w-[25rem] rounded-2xl border-2 border-[#c1c1c1] px-8 py-8 pb-14 text-center">
      <h2 className="mb-4 text-lg font-bold md:text-xl">Create your account</h2>
      {/* form */}
      <SignupForm />
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
