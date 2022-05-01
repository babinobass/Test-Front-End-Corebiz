import { arrow } from '../../public/iconsAndLogos'
import './Buttons.scss'

export const ButtonPrimary = ({ aria, children, fnt, className, type }) => {
    return (
        <button type={type ?? 'button'} aria-label={aria} onClick={fnt} className={"btnPrimary " + className}>
            {children}
        </button>
    )
}

export const ButtonSecondary = ({ aria, children, fnt, className, type }) => {
    return (
        <button type={type ?? 'button'} aria-label={aria} onClick={fnt} className={"btnSecondary  " + className}>
            {children}
        </button>
    )
}

export const ArrowButton = ({ fnt, left, className }) => {
    return (
        <button
            onClick={fnt}
            aria-label={left ? 'boton a la izquierda' : 'boton a la derecha'}
            className={"btnArrow  " + className + (left ? " arrowLeft" : "")}
        >
            <img src={arrow} alt='arrow' />
        </button>
    )
}