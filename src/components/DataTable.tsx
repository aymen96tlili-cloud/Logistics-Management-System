type Col<T> = { key: keyof T, label: string }
export default function DataTable<T extends { [k: string]: any }>({ data, columns }: { data: T[], columns: Col<T>[] }) {
  return (
    <table className="table">
      <thead>
        <tr>{columns.map(c => <th key={String(c.key)}>{c.label}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map(c => <td key={String(c.key)}>{String(row[c.key] ?? '')}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
