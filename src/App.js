import Header from './Components/Header/Header';
import Home from './Views/Home/Home';
import OrderState from './context/order/orderState';
import Footer from './Components/Footer/Footer';
import './public/styles.scss'

function App() {
  return (
    <OrderState>
      <Header />
      {/*Aca empezaria la logica de react-route-dom */}
      <Home />
      <Footer />
    </OrderState>
  );
}

export default App;
