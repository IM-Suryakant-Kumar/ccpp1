"use_client";

import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form>
      <label className="mb-1 block text-left text-sm" htmlFor="email">
        Email
      </label>
      <input
        className="mb-4 w-full rounded-md border p-2 text-xs"
        name="email"
        id="email"
        type="email"
        placeholder="Enter"
        value={formData.email}
        onChange={handleChange}
      />
      <label className="mb-1 block text-left text-sm" htmlFor="password">
        Password
      </label>
      <input
        className="mb-4 w-full rounded-md border p-2 text-xs"
        name="password"
        id="password"
        type="password"
        placeholder="Enter"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="mb-4 block h-10 w-full  rounded-md bg-black text-xs text-white">
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
