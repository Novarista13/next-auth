import React from "react";
import reactSvg from "@/public/react.svg";
import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <Link href="/" className="flex items-center justify-between mr-4">
      <Image
        src={reactSvg}
        priority={true}
        style={{ width: "auto" }}
        className="h-10"
        alt="book logo"
      />
      <span className="self-center text-[#76453B] ms-2 text-xl font-semibold whitespace-nowrap ">
        Login Site
      </span>
    </Link>
  );
};

export default Brand;
