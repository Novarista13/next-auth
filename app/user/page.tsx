import { auth } from "@/auth";
import React from "react";

const page = async () => {
  const session = await auth();

  return session?.user ? (
    <div className="max-w-[300px] mx-auto mt-10 p-7 bg-[#F8FAE5] border border-gray-200 rounded-lg shadow">
      <p className="text-[#76453B] ms-2 text-[1rem] font-semibold whitespace-nowrap pb-4">
        Name:{" "}
        <span className="text-[#43766c] ps-3"> {session?.user?.name}</span>
      </p>
      <p className="text-[#76453B] ms-2 text-[1rem] font-semibold whitespace-nowrap">
        Email:{" "}
        <span className="text-[#43766c] ps-3"> {session?.user?.email} </span>
      </p>
    </div>
  ) : (
    <div className="text-center my-7">
      <p className="text-base text-[#F8FAE5]">
        Please Sign in to Access This Page!
      </p>
    </div>
  );
};

export default page;
