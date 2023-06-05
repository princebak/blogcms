import React from "react";
import Image from "next/image";

export default function Author({ author }) {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-30">
      <div className="absolute left-0 right-0 -top-14">
        <div className="flex justify-center items-center">
          <Image
            alt={author.name}
            unoptimized
            height="100"
            width="100"
            className="rounded-full"
            src={author.photo.url}
          />
        </div>
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
}
