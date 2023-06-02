import React, { useContext } from "react";

import Link from "next/link";

const categories = [
  { name: "React JS", slug: "react" },
  { name: "Next JS", slug: "next" },
];

function Header() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full flex justify-between items-center border-blue-400 py-8">
        <div>
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              BlogCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:inline-flex gap-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="text-white font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
