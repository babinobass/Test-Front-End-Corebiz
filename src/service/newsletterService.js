export async function postSubscription(data) {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/newsletter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(newData => newData)
    return res
}