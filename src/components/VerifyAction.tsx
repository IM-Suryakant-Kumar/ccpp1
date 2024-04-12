"use_client";

const VerifyAction = () => {
  const handleCahnge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const inputIdx = Number(name.split("-")[1]);

    if (value.length > 0) {
      const nextInput: HTMLInputElement | null = document.querySelector(
        `input[name=input-${inputIdx + 1}]`,
      );

      if (nextInput !== null) {
        nextInput.focus();
      }
    }
  };

  return (
    <div>
      <div className="my-4 flex flex-wrap justify-between">
        <p className="font-semi-bold w-full text-left text-xs">Code</p>
        <input
          className="borld3r-[#c1c1c1] h-7 w-7 appearance-auto rounded-sm border p-2 md:h-8 md:w-8"
          name="input-1"
          type="text"
          maxLength={1}
          onChange={handleCahnge}
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] pl-3 md:h-8 md:w-8"
          type="text"
          name="input-2"
          maxLength={1}
          onChange={handleCahnge}
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] pl-3 md:h-8 md:w-8"
          type="text"
          name="input-3"
          maxLength={1}
          onChange={handleCahnge}
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] pl-3 md:h-8 md:w-8"
          type="text"
          name="input-4"
          maxLength={1}
          onChange={handleCahnge}
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] pl-3 md:h-8 md:w-8"
          type="text"
          name="input-5"
          maxLength={1}
          onChange={handleCahnge}
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] pl-3 md:h-8 md:w-8"
          type="text"
          name="input-6"
          maxLength={1}
          onChange={handleCahnge}
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] pl-3 md:h-8 md:w-8"
          type="text"
          name="input-7"
          maxLength={1}
          onChange={handleCahnge}
        />
        <input
          className="h-7 w-7 rounded-sm border border-[#c1c1c1] pl-3 md:h-8 md:w-8"
          type="text"
          name="input-8"
          maxLength={1}
          onChange={handleCahnge}
        />
      </div>
      <button className="mb-4 block h-8 w-full rounded-md bg-black text-xs uppercase text-white md:h-10">
        Verify
      </button>
    </div>
  );
};

export default VerifyAction;
