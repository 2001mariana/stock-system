/* eslint-disable @typescript-eslint/no-explicit-any */

import Products from './Table.mockData'
import './Table.scss'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

declare interface TableHeader {
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

type IndexedHeaders = {
  [key: string]: TableHeader
}

type OrganizedItem = {
  [key: string]: any
}

function organizeData(
  data: any[],
  headers: TableHeader[]
): [OrganizedItem[], IndexedHeaders] {
  const indexedHeaders: IndexedHeaders = {}

  headers.forEach((header) => {
    indexedHeaders[header.key] = {
      ...header
    }
  })

  const headerKeysInOrder = Object.keys(indexedHeaders)

  const organizedData = data.map((item) => {
    const organizedItem: OrganizedItem = {}

    headerKeysInOrder.forEach((key) => {
      organizedItem[key] = item[key]
    })

    organizedItem.$original = item

    return organizedItem
  })

  return [organizedData, indexedHeaders]
}

const Table = ({
  headers,
  data,
  enableActions,
  onDelete,
  onEdit,
  onViewDetail
}: TableProps) => {
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
