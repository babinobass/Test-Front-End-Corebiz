import { useContext } from 'react'
import { star, starFull } from '../../public/iconsAndLogos'
import { ButtonPrimary } from '../Buttons/Buttons'
import OrderContext from '../../context/order/orderContex'
import './ProductCard.scss'

const ProductCard = ({ productId, productName, stars, imageUrl, listPrice, price, installments }) => {
    const orderContex = useContext(OrderContext)
    const { addToMyOrder } = orderContex
    const product = {
        "productId": productId,
        "productName": productName,
        "stars": stars,
        "imageUrl": imageUrl,
        "listPrice": listPrice,
        "price": price,
        "installments": installments
    }
    const starsArr = [...Array(5)]
    const priceFix = (price * 0.01).toFixed(2)
    const listPriceFix = listPrice && (listPrice * 0.01).toFixed(2)
    const quantity = installments[0] ? installments[0] : false
    const handleAdd = () => {
        addToMyOrder(product)
    }
    return (
        <article className='product-card'>
            {productId === 2 ||productId === 3 ? <span className='off-card'><p>OFF</p></span> : null}
            <img src={imageUrl} alt='product' />
            <p className='product-card-name'>{productName}</p>
            <div>
                {starsArr.map((_, i) => <img key={'star' + i} alt='star' src={i + 1 <= stars ? starFull : star} />)}
            </div>
            <p className={'product-card-listPrice ' + (listPriceFix ? "" : "none")}>de $ {listPriceFix}</p>
            <p className='product-card-price'>por ${priceFix}</p>
            <p className={'product-card-quantity ' + (quantity.quantity ? "" : "none")}>o en {quantity?.quantity}x de R$ {(quantity?.value * 0.01).toFixed(2)}</p>
            <ButtonPrimary aria='Comprar' fnt={handleAdd} className='btn-pruduct-card' >COMPRAR</ButtonPrimary>
        </article>
    )
}

export default ProductCard