import React, { useReducer } from 'react'
import OrderReducer from './orderReducer'
import OrderContext from './orderContex'
import { addToCart } from '../../service/productService'



const OrderState = (props) => {

    const initialState = {
        orderNum: JSON.parse(localStorage.getItem('order')) ?? [],
    }


    const [state, dispatch] = useReducer(OrderReducer, initialState);

    const addToMyOrder = async (item) => {
        addToCart(item)
        dispatch({
            type: "ADD_TO_MY_ORDER",
            payload: item
        })
    }

    return (
        <OrderContext.Provider
            value={{
                orderNum: state.orderNum.length,
                
                addToMyOrder
            }}
        >
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderState
