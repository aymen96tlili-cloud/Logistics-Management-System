import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import UserCard from "../components/UserCard";
import styles from "../styles/dashboard.module.css";

function Dashboard() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (!error) setUsers(data || []);
    };
    fetchUsers();
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardTitle}>Dashboard</h1>
      <div className={styles.userGrid}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
