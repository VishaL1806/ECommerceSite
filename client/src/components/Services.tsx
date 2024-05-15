import fastDelivery from "../assets/fast-delivery.svg";
import customerSupport from "../assets/customer-support.svg";
import secure from "../assets/secure.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="flex justify-around items-center">
        <div className="flex flex-col justify-between items-center">
          <img src={fastDelivery} alt="fast-delivery" className="mb-6" />
          <p className="text-lg font-semibold">FREE AND FAST DELIVERY</p>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img src={customerSupport} alt="customer-support" className="mb-6" />
          <p className="text-lg font-semibold">24/7 CUSTOMER SERVICE</p>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>  
        <div className="flex flex-col justify-between items-center">
          <img src={secure} alt="secure" className="mb-6" />
          <p className="text-lg font-semibold">MONEY BACK GUARANTEE</p>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
