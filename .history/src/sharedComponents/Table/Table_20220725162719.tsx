import './Table.scss'

const headers = [
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'stock', value: 'Available Stock' }
]

declare interface TableHeader {
  key: string
  value: string
  right?: boolean
}

type IndexedHeaders = {
  [key: string]: TableHeader
}

type OrganizedItem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

function organizeData(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const Table = () => {
  organizeData([], headers)
  return (
    <table className="Table">
      <thead>
        <tr>
          {headers.map((headerData) => (
            <th key={headerData.key}>{headerData.value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cookie</td>
          <td>$1.25</td>
          <td className="right">23</td>
        </tr>
        <tr>
          <td>Milk 1L</td>
          <td>$0.99</td>
          <td className="right">10</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
