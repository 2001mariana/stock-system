/* eslint-disable @typescript-eslint/no-explicit-any */

import organizeData from '../../utils/organizeDataForTable'

import './Table.scss'

export interface TableHeader {
  key: string
  value: string
  right?: boolean
}

declare interface TableProps {
  headers: TableHeader[]
  data: any[]
  enableActions?: boolean
  onDelete?: (item: any) => void
  onEdit?: (item: any) => void
  onViewDetail?: (item: any) => void
}

const Table = ({ headers, data }: TableProps) => {
  const [organizedData, indexedHeaders] = organizeData(data, headers)
  return (
    <table className="Table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th className={header.right ? 'right' : ''} key={header.key}>
              {header.value}
            </th>
          ))}
          {en}
        </tr>
      </thead>
      <tbody>
        {organizedData.map((row, i) => {
          return (
            <tr key={i}>
              {Object.keys(row).map((item, i) =>
                item !== '$original' ? (
                  <td
                    key={row.$original.id + i}
                    className={indexedHeaders[item].right ? 'right' : ''}
                  >
                    {row[item]}
                  </td>
                ) : null
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
