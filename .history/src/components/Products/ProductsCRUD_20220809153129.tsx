/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

import { getProducts, updateProduct } from '../../redux/Producs/Products.actions'
import { deleteSingleProduct } from '../../services/Products.services'
import { createSingleProduct } from '../../services/Products.services'
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

declare interface ProductsCRUDProps {
  products: Product[]
}
const ProductsCrud = ({ products }: ProductsCRUDProps) => {
  const dispatch = useDispatch()
  //const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

  async function fetchData() {
    try {
      console.log('started')
      // @ts-ignore
      await dispatch(getProducts())
      Swal.fire('Uhu!', 'Fetch done', 'success')
      console.log('done')
    } catch (err) {
      console.log(err)
    }
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
      await dispatch(updateProduct(newProduct))
      setUpdatingProduct(undefined)
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

const mapStateToProps = (state: any) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCrud)
