import React from "react";
import { SignOut } from "./signout-button";
import { auth } from "@/auth";
import Link from "next/link";
import Brand from "./brand";

const Navbar = async () => {
  const session = await auth();
  let name;

  if (session?.user?.name) {
    name = session?.user?.name.split(" ");
  }

  return (
    <nav className="bg-[#F8FAE5] border-b border-gray-200 px-4 py-2.5 left-0 ">
      <div className="flex flex-wrap justify-between items-center">
        <Brand />
        {session?.user ? (
          <div className="flex space-x-3 items-center">
            <Link href="/user">
              <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {name && name[0][0] + name[1][0]}
                </span>
              </div>
            </Link>
            <SignOut />
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
