import { ButtonSecondary } from '../Buttons/Buttons'
import { message, support, logo, vtex } from '../../public/iconsAndLogos'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='ubicacion-container'>
                <h2>Ubicación</h2>
                <ul>
                    <li><p>Avenida Andrômeda, 2000. Bloco 6 e 8</p></li>
                    <li><p> Alphavile SP</p></li>
                    <li><p>brasil@corebiz.ag</p></li>
                    <li><p> +55 11 3090 1039</p></li>
                </ul>
            </div>
            <div className='footer-btn-container'>
                <ButtonSecondary aria='Contactanos' >
                    <img src={message} alt='contact' />
                    <p>CONTÁCTANOS </p>
                </ButtonSecondary>
                <ButtonSecondary aria='Soporte'>
                    <img src={support} alt='support' />
                    <p>HABLA CON UN CONSULTOR</p>
                </ButtonSecondary>
            </div>
            <div className='footer-logos-container'>
                <div className='corebiz-logo'><p>Desarrollado por</p> <img src={logo} alt='logo' /></div>
                <div className='vtex-logo'><p>Powered by</p> <img  src={vtex} alt='vtex' /></div>
            </div>
        </footer>
    )
}

export default Footer