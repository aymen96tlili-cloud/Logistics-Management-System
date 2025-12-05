import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('users')
        .select('id, full_name, role, department_id, part_id, shift_id')
        .eq('auth_user_id', user.id)
        .single()
      setProfile(data)
    }
    load()
  }, [])

  return (
    <div>
      <h2>Dashboard</h2>
      {!profile ? <p>Loading profile...</p> : (
        <div className="grid">
          <div className="card"><strong>Name:</strong> {profile.full_name}</div>
          <div className="card"><strong>Role:</strong> {profile.role}</div>
          <div className="
