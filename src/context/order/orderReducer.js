const OrderReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_MY_ORDER":
            return {
                ...state,
                orderNum: [...state.orderNum, action.payload]
            }
        default:
            return state;
    }
}

export default OrderReducer