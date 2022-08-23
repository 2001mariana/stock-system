/* eslint-disable @typescript-eslint/no-explicit-any */

import organizeData from '../../utils/organizeDataForTable'
import Button from '../Button'

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

const Table = ({ headers, data, enableActions, onDelete }: TableProps) => {
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
          {enableActions && <th className="right">Actions</th>}
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
                  {onDelete && (
                    <td>
                      <Button variant="outlined" label="delete" size="small-xx" />
                    </td>
                  )}
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
