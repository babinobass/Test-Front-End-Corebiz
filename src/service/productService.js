
export async function getProductFeatured(fnt) {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/products`)
        .then(response => response.json())
        .then(newData => fnt(newData))
}

export function addToCart(item) {
    const order = JSON.parse(localStorage.getItem('order')) ?? false
    if (order) {
        order.push(item)
        localStorage.setItem('order', JSON.stringify(order))
    } else {
        localStorage.setItem('order', JSON.stringify([item]))
    }
}