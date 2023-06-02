//"use client";
//Common Imports
//import { useEffect, useState } from "react";

//Custom Import
import "./globals.scss";
import Header from "@/components/Header";

export const metadata = {
  title: "Bakil | Blog",
  description: "Blog about web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
