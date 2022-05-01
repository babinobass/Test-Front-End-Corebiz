import { useState } from 'react'
import { ButtonPrimary } from '../Buttons/Buttons'
import { postSubscription } from '../../service/newsletterService'
import Success from '../Success/Success'
import './Newsletter.scss'

const Newsletter = () => {
    const [subscription, setSubscription] = useState({ name: "", email: "" })
    const [error, setError] = useState({ name: "", email: "" })
    const [success, setSucces] = useState(false)
    const handleChange = (e) => {
        setSubscription({
            ...subscription,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const regName = /^[a-zA-Z]+$/.test(subscription.name)
        const regMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(subscription.email)
        if (!regName) {
            setError({ name: "input-error", email: "" })
            setTimeout(() => {
                setError({ name: "", email: "" })
            }, 2000)
            return
        }
        if (!regMail) {
            setError({ name: "", email: "input-error" })
            setTimeout(() => {
                setError({ name: "", email: "" })
            }, 2000)
            return
        } else {
            const res = await postSubscription(subscription)
            setSucces(res.message === "Created successfully")
            setSubscription({ name: "", email: "" })
        }
    }

    return (
        <section className='newsletter-container'>
            <h1>¡Únete a nuestras novedades y promociones!</h1>
            {
                success ?
                    <Success />
                    :
                    < form onSubmit={handleSubmit}>
                        <input className={error.name} value={subscription.name} onChange={handleChange} name="name" placeholder={error.name ? "Ingrese un nombre valido" : 'Ingresa tu nombre'} type='text' />
                        <input className={error.email} value={subscription.email} onChange={handleChange} name="email" placeholder={error.email ? "Ingrese un mail valido" : 'Ingresa tu mail'} type='email' />
                        <ButtonPrimary aria='Suscribirme' type='submit'>Suscribirme</ButtonPrimary>
                    </form>
            }
        </section>
    )
}

export default Newsletter