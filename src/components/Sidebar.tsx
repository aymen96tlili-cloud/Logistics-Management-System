import React from "react";
import styles from "../styles/sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Logistics System</h2>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/dashboard">📊 Dashboard</a></li>
          <li><a href="/reports">📑 Reports</a></li>
          <li><a href="/settings">⚙️ Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
