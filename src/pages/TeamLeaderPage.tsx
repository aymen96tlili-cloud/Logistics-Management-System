import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

interface UserProfile {
  id: string;
  full_name: string;
  part_id: string;
  shift_id: string;
  role: string;
}

const TeamLeaderPage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
const { data, error } = await supabase
  .from("users")
  .select("id, full_name, part_id, shift_id, role")
  .eq("auth_user_id", "ef369cad-39b2-4eae-eaae-1c263c4d2f2b");

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setProfile(data?.[0] || null);
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading team leader data...</p>;
  if (!profile) return <p>No team leader profile found.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Team Leader Dashboard</h1>
      <div style={{ marginTop: "1rem" }}>
        <p><strong>Name:</strong> {profile.full_name}</p>
        <p><strong>Part ID:</strong> {profile.part_id}</p>
        <p><strong>Shift ID:</strong> {profile.shift_id}</p>
        <p><strong>Role:</strong> {profile.role}</p>
      </div>

      {/* 🔧 Future Expansion Section */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Team Overview</h2>
        <p>Coming soon: list of assigned operators, production stats, and shift performance.</p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>Actions</h2>
        <ul>
          <li>Assign operator to part</li>
          <li>Log shift activity</li>
          <li>View production line status</li>
        </ul>
      </div>
    </div>
  );
};

export default TeamLeaderPage;
