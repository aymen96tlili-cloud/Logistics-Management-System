import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import DataTable from '../components/DataTable'

export default function Lines() {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    supabase.from('production_lines').select('id, name, part_id').then(({ data, error }) => {
      if (!error) setData(data ?? [])
    })
  }, [])
  return (
    <div>
      <h2>Production Lines</h2>
      <DataTable data={data} columns={[
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'part_id', label: 'Part' },
      ]} />
    </div>
  )
}
