/* eslint-disable @typescript-eslint/no-explicit-any */
import './Table.scss'
import Products from './Table.mockData'

declare interface TableHeader {
  key: string
  value: string
  right?: boolean
}

type IndexedHeaders = {
  [key: string]: TableHeader
}

type OrganizedItem = {
  [key: string]: any
}

const headers: TableHeader[] = [
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'stock', value: 'Available Stock', right: true }
]

function organizeData(data: any[], headers: TableHeader[]) {
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

    return organizedItem
  })

  return [organizedData, indexedHeaders]
}

const Table = () => {
  const [organizedData, indexedHeaders] = organizeData(Products, headers)
  console.table(organizedData)
  return (
    <table className="Table">
      <thead>
        <tr>
          {headers.map((headerData) => (
            <th
              className={headerData.right ? 'right' : ''}
              key={headerData.key}
            >
              {headerData.value}
            </th>
          ))}
        </tr>
      </thead>
     <tbody>
       {
         organizedData.map
       }
     </tbody>
    </table>
  )
}

export default Table
