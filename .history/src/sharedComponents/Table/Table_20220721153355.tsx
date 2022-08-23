import './Table.scss'

const headers = [
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'stock', value: 'Available Stock' }
]

const Table = () => {
  return (
    <table className="Table">
      <thead>
        <tr>
          {
              headers.map((headerData) => return <th>{}</th>)
          }
          <th>Product</th>
          <th>Price</th>
          <th className="right">Stock</th>
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
