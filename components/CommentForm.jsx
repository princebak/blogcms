"use client";

import React, { useState, useEffect, useRef } from "react";

import { submitComment } from "@/services";

export default function CommentForm({ slug }) {
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleClick = () => {
    setSending(true);
  };

  const handleCommentSubmission = async () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    const result = await submitComment(commentObj);
    console.log("Client : result >> ", result);
  };

  useEffect(() => {
    const postComment = async () => {
      if (sending) {
        await handleCommentSubmission();
        setSending(false);
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    };
    postComment();
  }, [sending]);

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comment Form</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outile-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="p-2 px-4 outile-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          ref={emailEl}
          className="p-2 px-4 outile-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
          />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData">
            Save my email and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All filed are required.</p>}
      <div className="mt-8">
        {sending ? (
          "Sending ..."
        ) : (
          <button
            className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3"
            type="submit"
            onClick={() => handleClick()}
          >
            Submit
          </button>
        )}

        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment submitted for review.
          </span>
        )}
      </div>
    </div>
  );
}
