'use client'
import Navbar from "./components/Navbar/Navbar";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const navlink =[
    {
      name: "Home",
      link:"/"
    },
    {
      name: "games",
      link:"/games"
    },
    {
      name: "consult",
      link:"/consult"
    },
    {
      name: "login",
      link:"/login"
    },
  ]
  return (
    <main className={styles.main}>
      <Navbar navlink={navlink} isLoggedIn={isLoggedIn}/>
    </main>
  );
}
