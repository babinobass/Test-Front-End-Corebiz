
/* 
* La funcion getProductFeatured recibe una funcion como callback para devolver el featured
*/
export async function getProductFeatured(fnt) {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/products`)
        .then(response => response.json())
        .then(newData => fnt(newData))
}


/* 
* La funcion addToCart recibe un item product como argumento y lo guarda en el localStorage
* si la orden no fue creada, la crea con el item, sino agrega el item a la orden
*/
export function addToCart(item) {
    const order = JSON.parse(localStorage.getItem('order')) ?? false
    if (order) {
        order.push(item)
        localStorage.setItem('order', JSON.stringify(order))
    } else {
        localStorage.setItem('order', JSON.stringify([item]))
    }
}