import { useEffect, useState } from 'react'
import { getProductFeatured } from '../../service/productService'
import ContainerFeaturedCards from '../ContainerFeaturedCard/ContainerFeaturedCards'
import './ProductFeatured.scss'

const ProductFeatured = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProductFeatured(setProducts)
    }, [])
    return (
        <section className='container-product-featured'>
            <h2>Más Vendidos</h2>
            <ContainerFeaturedCards products={products} />
        </section>
    )
}

export default ProductFeatured