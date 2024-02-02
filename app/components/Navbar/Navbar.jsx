"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Navbar = ({ navlink , isLoggedIn}) => {
  console.log(navlink);

  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    setIsScroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.wrapper} ${isScroll && styles.scroll}`}>
      
      <ul>
        <li>
          <Icon
            icon="material-symbols:home-outline"
            style={{  fontSize: "30px" }}
          />
          <Link href='/'><h3>Home</h3></Link>
        </li>
        <li>
          <Icon
            icon="material-symbols:dashboard"
            style={{  fontSize: "30px" }}
          />
          <Link href='/dashboard'><h3>Dashboard</h3></Link>
        </li>
        <li>
          <Icon
            icon="bi:chat-left-fill"
            style={{ fontSize: "30px" }}
          />
          <Link href='/consult'><h3>Consult</h3></Link>
        </li>
        <li>
          <Icon
            icon="teenyicons:game-controller-solid"
            style={{ fontSize: "30px" }}
          />
          <Link href='/games'><h3>Consult</h3></Link>
        </li>
        <li>
          <Icon
            icon="iconamoon:profile-fill"
            style={{ fontSize: "30px" }}
          />
          <Link href={isLoggedIn ? '/login' : '/signup'}><h3>{isLoggedIn ? ("Login") : ("Signup")}</h3></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
