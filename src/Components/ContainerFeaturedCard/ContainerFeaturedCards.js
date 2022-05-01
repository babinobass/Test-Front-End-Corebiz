import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ContainerFeaturedCards.scss'
import { ArrowButton } from '../Buttons/Buttons'

const ContainerFeaturedCards = ({ products }) => {
    const [translate, setTranslate] = useState(0)

    const trans3D = {
        transform: `translate3d(${translate}px, 0px, 0px)`
    }
    const translateCard = (num) => {
        setTranslate(num)
    }

    return (
        <div className='container-featured-card'>
            <div>
                <div className='container-div-card' style={trans3D}>

                    {products.map(({ productId, productName, stars, imageUrl, listPrice, price, installments }) => {
                        return (
                            <ProductCard
                                key={'card' + productId}
                                productId={productId}
                                productName={productName}
                                stars={stars}
                                imageUrl={imageUrl}
                                listPrice={listPrice}
                                price={price}
                                installments={installments}
                            />
                        )
                    })}
                </div>
            </div>
            <div className='trigger-container-cards'>
                <input type="radio" name="cards-slider" onClick={() => translateCard(0)} defaultChecked />
                <input type="radio" name="cards-slider" onClick={() => translateCard(-379)} />
                <input type="radio" name="cards-slider" onClick={() => translateCard(-758)} />
                <input type="radio" name="cards-slider" />
            </div>
            <ArrowButton fnt={() => translateCard(0)} className='btn-arrow-featured' left={true} />
            <ArrowButton fnt={() => translateCard(-600)} className='btn-arrow-featured' />
        </div>
    )
}

export default ContainerFeaturedCards