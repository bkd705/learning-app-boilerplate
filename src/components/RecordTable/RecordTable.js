import React from 'react'

const RecordTable = ({ recordType, records }) => {
  const tableHeadings = recordType.fields.map(field => (
    <th key={field.name + field.id}>{field.name}</th>
  ))

  const tableRows = records.map(record => {
    const data = record.values.map(({ id, value }) => (
      <td key={value + id}>{value}</td>
    ))
    return <tr key={record.id}>{data}</tr>
  })

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>{tableHeadings}</tr>
      </thead>

      <tbody>{tableRows}</tbody>
    </table>
  )
}

export default RecordTable
