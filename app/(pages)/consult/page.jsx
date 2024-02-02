"use client";
import Chatbox from "@/app/components/ChatBox/Chatbox";
import styles from "./consult.module.scss";
import { Icon } from "@iconify/react";

const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sideOpt}>
        <div className={styles.icons}>
          <Icon
            icon="material-symbols-light:home"
            style={{ color: "white", fontSize: "50px" }}
          />
          <h3>home</h3>
        </div>
        <div className={styles.icons}>
        <Icon icon="material-symbols:dashboard" style={{ color: "white", fontSize: "40px" }} />
          <h3>dash</h3>
        </div>
        <div className={styles.icons}>
        <Icon icon="bi:chat-left-fill"  style={{ color: "white", fontSize: "40px" }} />
          <h4>chat friends</h4>
        </div>
      </div>
      <div className={styles.container}>
        <Chatbox/>
      </div>
    </div>
  );
};

export default page;
