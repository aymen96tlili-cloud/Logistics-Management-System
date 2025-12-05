import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import DataTable from '../components/DataTable'

export default function Departments() {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    supabase.from('departments').select('*').then(({ data, error }) => {
      if (!error) setData(data ?? [])
    })
  }, [])
  return (
    <div>
      <h2>Departments</h2>
      <DataTable data={data} columns={[
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'code', label: 'Code' },
      ]} />
    </div>
  )
}
