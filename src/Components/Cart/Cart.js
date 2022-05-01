import { useContext } from 'react'
import { cart } from '../../public/iconsAndLogos'
import OrderContext from '../../context/order/orderContex'
import './Cart.scss'


const Cart = () => {
    const orderContext = useContext(OrderContext)
    const { orderNum } = orderContext

    return (
        <div className='cart-container'>
            <button aria-label='Cart' className='btn-cart'>
                <img src={cart} alt='cart' />
            </button>
            {orderNum > 0 ? <span className='noti-cart'>{orderNum}</span> : null}
        </div>
    )
}

export default Cart
