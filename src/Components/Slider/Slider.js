import card from '../../assets/images/TARJETA.png'
import { wave } from '../../public/iconsAndLogos'
import './Slider.scss'

const Slider = () => {
    return (
        <section className='slider-container'>
            <ul>
                <li>
                    <div className='slider-message'>
                        <p>¡Hola! ¿Qué es lo que buscas?</p>
                        <p>Crear o migrar tu comercio electrónico?</p>
                        <img src={wave} alt='wave' className='wave-slide' />
                    </div>
                    <img className='img-slider' src={card} alt='credit_card' />
                </li>
            </ul>
            <div className='trigger-container'>
                <input type="radio" name="slider" defaultChecked />
                <input type="radio" name="slider" />
                <input type="radio" name="slider" />
                <input type="radio" name="slider" />
            </div>
        </section>
    )
}

export default Slider