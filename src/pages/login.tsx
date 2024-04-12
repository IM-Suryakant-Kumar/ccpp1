import Link from "next/link";
import LoginForm from "~/components/LoginForm";

const Login = () => {
  return (
    <div className="mx-auto mt-8 w-[90%] max-w-[25rem] rounded-2xl border-2 border-[#c1c1c1] px-8 py-8 pb-14 text-center">
      <h2 className="mb-4 text-lg font-bold md:text-xl">Login</h2>
      <p className="font-semibold">Welcome back to ECOMMERCE</p>
      <p className="text-xs mb-4 mt-2">The next gen business marketplace</p>
      {/* form */}
      <LoginForm />
      <div>
        <span className="text-xs">Don&#39;t have an Account? </span>
        <Link className="text-sm font-semibold" href="/signup">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Login;
