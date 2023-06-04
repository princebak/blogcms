"use client";

import React, { useContext, useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "@/services";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full flex justify-between items-center border-blue-400 py-8">
        <div>
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              WebBlog
            </span>
          </Link>
        </div>
        <div className="hidden md:inline-flex">
          {categories.map((category, index) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="text-white font-semibold cursor-pointer">
                {category.name}
              </span>
              {index !== categories.length - 1 ? (
                <span className="text-white font-semibold">&nbsp;|&nbsp;</span>
              ) : (
                ""
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
