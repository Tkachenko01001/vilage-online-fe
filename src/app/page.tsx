import Hero from "./components/hero/Hero";
import DeliveryProducts from "./components/delivery-products/DeliveryProducts";
import Advantages from "./components/advantages/Advantages";
import PaymentOrders from "./components/payment-orders/PaymentOrders";
import PaymentDelivery from "./components/payment-delivery/PaymentDelivery";

const Home = () => {
  return (
    <>
      <Hero />
      <DeliveryProducts />
      <Advantages />
      <PaymentOrders />
      <PaymentDelivery />
    </>
  );
};

export default Home;
