import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/pages/about">About</Link>
      </li>
      <li>
        <Link href="/pages/products">Products</Link>
      </li>
    </ul>
  );
}
