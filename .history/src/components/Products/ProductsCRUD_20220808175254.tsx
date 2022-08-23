import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {
  createSingleProduct,
  deleteSingleProduct,
  getAllProducts,
  updateSingleProduct
} from '../../services/Products.services'
import Table, { TableHeader } from '../../sharedComponents/Table'
import { Product } from '../../sharedComponents/Table/Table.mockData'
import SwalProductDelete from '../Swal/SwalProductDelete'
import SwalProductDetail from '../Swal/SwalProductDetail'
import ProductForm, { ProductCreator } from './ProductForm'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

const ProductsCrud = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

  async function fetchData() {
    const _products = await getAllProducts()
    setProducts(_products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      await createSingleProduct(product)
      fetchData()
    } catch (err) {
      console.log(err)
      //Swal.fire('Oops!', err.message, 'error')
    }
  }

  const handleProductUpdate = async (newProduct: Product) => {
    try {
      await updateSingleProduct(newProduct)
      setUpdatingProduct(undefined)
      fetchData()
    } catch (err) {
      console.log(err)
      //Swal.fire('Oops!', err.message, 'error')
    }
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  const handleProductDetail = (product: Product) => {
    SwalProductDetail(product)
  }

  const productDelete = async (id: string) => {
    try {
      await deleteSingleProduct(id)
      fetchData()
      Swal.fire('Uhul!', 'Product successfully deleted', 'success')
    } catch (err) {
      console.log(err)
      //Swal.fire('Oops!', err.message, 'error')
    }
  }

  const handleProductDelete = (product: Product) => {
    SwalProductDelete({ product: product, productDelete: productDelete })
  }

  return (
    <>
      <Table
        headers={headers}
        data={products}
        enableActions
        onDelete={handleProductDelete}
        onEdit={handleProductEdit}
        onViewDetail={handleProductDetail}
      />
      <ProductForm
        formProps={updatingProduct}
        onSubmit={handleProductSubmit}
        onUpdate={handleProductUpdate}
      />
    </>
  )
}

export default  connect ProductsCrud
