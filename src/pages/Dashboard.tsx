import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Sidebar from "../components/Sidebar";
import UserCard from "../components/UserCard";
import styles from "../styles/dashboard.module.css";

function Dashboard() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (!error) setUsers(data || []);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "220px", padding: "2rem", flex: 1 }}>
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
        {loading ? (
          <p>Loading users...</p>
        ) : users.length > 0 ? (
          <div className={styles.userGrid}>
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <p>No users found.</p>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
