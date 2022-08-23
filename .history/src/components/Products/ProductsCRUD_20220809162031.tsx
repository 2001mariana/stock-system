/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

import { RootState, ThunkDispatch } from '../../redux'
import * as ProductsAction from '../../redux/Producs/Products.actions'
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
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

  // @ts-ignore
  const dispatch: ThunkDispatch = useDispatch()

  const showErrorAlert = (err: Error) =>
    Swal.fire('Oops!', err.message, 'error')

  async function fetchData() {
    dispatch(ProductsAction.getProducts()).catch(showErrorAlert)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleProductSubmit = async (product: ProductCreator) => {
    dispatch(ProductsAction.insertNewProduct(product)).catch(showErrorAlert)
  }

  const handleProductUpdate = async (newProduct: Product) => {
    try {
      // @ts-ignore
      await dispatch(ProductsAction.updateProduct(newProduct))
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
      // @ts-ignore
      await dispatch(ProductsAction.deleteProduct(id))
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

const mapStateToProps = (state: RootState) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCrud)
