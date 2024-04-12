import VerifyAction from "~/components/VerifyAction";

const Verify = () => {
  return (
    <div className="mx-auto mt-8 w-[90%] max-w-[25rem] rounded-2xl border-2 border-[#c1c1c1] px-8 py-8 text-center">
      <h2 className="mb-4 text-lg font-bold md:text-xl">Verify your email</h2>
      {/*  */}
      <p className="text-xs">
        Enter the 8 digit code you have received on swa***@gmail.com
      </p>
      {/* input boxex */}
      <VerifyAction />
    </div>
  );
};

export default Verify;
