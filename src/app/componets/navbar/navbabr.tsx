import Link from "next/link";
import React from "react";
import styles from '../../styles/navbar.module.css'

export default function Navbar() {
  return (
    
    <ul className={styles.navbar}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/pages/about">About</Link>
      </li>
      <li>
        <Link href="/pages/products">Products</Link>
      </li>
      <li>
        <Link href="/pages/contact">Contact</Link>
      </li>
      <li>
        <Link href="/pages/todo">To-do</Link>
      </li>
    </ul>
  );
}
