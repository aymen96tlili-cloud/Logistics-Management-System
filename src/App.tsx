import React, { useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*"); // ✅ بدون شرط

      if (error) {
        console.error("Supabase error:", error);
      } else {
        console.log("Supabase data:", data);
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Check console for Supabase data...</p>
    </div>
  );
}

export default App;
