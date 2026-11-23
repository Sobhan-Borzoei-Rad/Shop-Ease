import Header from "./Components/header/Header";
import ProductList from "./Components/product-list/ProductList";
import Footer from "./Components/footer/Footer";
import WelcomeMessage from "./Components/WelcomeMessage";
import Count from "./Components/Count";
import ProductSearch from "./Components/header/components/ProductSearch"
import ProductAvailability from "./Components/ProductAvailability";

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <ProductList />
      <Footer />
      <Count />
      <ProductSearch placeholder="جستوجوی محصول"/>
      <ProductAvailability />
    </>
  );
}

export default App;
