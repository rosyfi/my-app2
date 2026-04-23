import React from "react";
import styles from "../styles/Window.module.css";
import WindowBar from "./WindowBar";

interface WindowProps {
  path: string;
  children: React.ReactNode;
}

const LAST_EDITED = "October 2024";

const Window: React.FC<WindowProps> = ({ path, children }) => {
  return (
    <div className={styles.container}>
      <span style={{ fontSize: 14, color: "#888", marginTop: 2 }}>
        Last edited: {LAST_EDITED}
      </span>
      <WindowBar path={path} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Window;
