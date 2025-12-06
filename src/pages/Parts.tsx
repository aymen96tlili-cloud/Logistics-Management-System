import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import DataTable from '../components/DataTable'

export default function Parts() {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    supabase.from('parts').select('id, name, department_id').then(({ data, error }) => {
      if (!error) setData(data ?? [])
    })
  }, [])
  return (
    <div>
      <h2>Parts</h2>
      <DataTable data={data} columns={[
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'department_id', label: 'Department' },
      ]} />
    </div>
  )
}
