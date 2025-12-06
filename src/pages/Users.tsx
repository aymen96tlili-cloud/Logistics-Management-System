import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import DataTable from '../components/DataTable'

export default function Users() {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    supabase.from('users')
      .select('id, matricule, full_name, role, department_id, part_id, shift_id')
      .then(({ data, error }) => {
        if (!error) setData(data ?? [])
      })
  }, [])
  return (
    <div>
      <h2>Users</h2>
      <DataTable data={data} columns={[
        { key: 'matricule', label: 'Matricule' },
        { key: 'full_name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'department_id', label: 'Department' },
        { key: 'part_id', label: 'Part' },
        { key: 'shift_id', label: 'Shift' },
      ]} />
    </div>
  )
}
