"use client";

import React, { useState, useEffect } from "react";

import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "@/services";
import { comment } from "postcss";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      const loadedComments = await getComments(slug);
      console.log("loadedComments >> ", loadedComments);
      setComments(loadedComments);
    };
    loadComments();
  }, []);

  return (
    <>
      {comment.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-gray-100 mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-700 w-[90%] mx-auto border-l-2 border-pink-700 p-2 bg-pink-50 rounded-md rounded-l-none">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
