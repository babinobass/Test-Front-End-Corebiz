import Slider from '../../Components/Slider/Slider'
import ProductFeatured from '../../Components/ProductFeatured/ProductFeatured'
import Newsletter from '../../Components/Newsletter/Newsletter'
import './Home.scss'

const Home = () => {

    return (
        <>
            <Slider />
            <ProductFeatured />
            <Newsletter />
        </>
    )
}

export default Home