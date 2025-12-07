import React from "react";
import styles from "../styles/dashboard.module.css";

function UserCard({ user }) {
  return (
    <div className={`${styles.userCard} ${styles[`role${user.role}`]}`}>
      <h2>{user.full_name}</h2>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Part:</strong> {user.part_id}</p>
      <p><strong>Shift:</strong> {user.shift_id}</p>
    </div>
  );
}

export default UserCard;
