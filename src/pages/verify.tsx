const Verify = () => {
  return (
    <div className="mx-auto mt-8 w-[90%] max-w-[25rem] rounded-2xl border-2 border-[#c1c1c1] px-8 py-8 text-center">
      <h2 className="mb-4 text-lg font-bold md:text-xl">Verify your email</h2>
      {/*  */}
      <p className="text-xs">
        Enter the 8 digit code you have received on swa***@gmail.com
      </p>
      {/* input boxex */}
      <div className="my-4 flex flex-wrap justify-between">
        <p className="font-semi-bold w-full text-left text-xs">Code</p>
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] md:h-8 md:w-8"
          type="number"
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] md:h-8 md:w-8"
          type="number"
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] md:h-8 md:w-8"
          type="number"
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] md:h-8 md:w-8"
          type="number"
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] md:h-8 md:w-8"
          type="number"
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] md:h-8 md:w-8"
          type="number"
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] md:h-8 md:w-8"
          type="number"
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] md:h-8 md:w-8"
          type="number"
        />
      </div>
      <button className="mb-4 block h-8 w-full rounded-md bg-black text-xs text-white md:h-10 uppercase">
        Verify
      </button>
    </div>
  );
};

export default Verify;
