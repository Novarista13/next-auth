import React from "react";

import { signIn } from "@/auth";

const Form = () => {
  const onSubmit = async (formData: { get: (arg0: string) => any }) => {
    "use server";
    await signIn("credentials", formData);
  };

  return (
    <div>
      <form className="mx-auto space-y-3 flex flex-col m-4" action={onSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-[12px] font-medium text-gray-900 "
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5  "
            placeholder="abcd@gmail.com"
            name="email"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-1 text-[12px] font-medium text-gray-900 "
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 "
            placeholder="1234567"
            name="password"
          />
        </div>
        <button
          type="submit"
          className="text-[#F8FAE5] bg-[#76453B] hover:bg-[#F8FAE5] hover:text-[#76453B] inline hover:ring-2 hover:ring-[#B19470] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm p-2 me-2 mb-2 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
