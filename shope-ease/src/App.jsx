import Header from "./Components/header/Header";
import ProductList from "./Components/product-list/ProductList";
import Footer from "./Components/footer/Footer";
import WelcomeMessage from "./Components/WelcomeMessage";
import Count from "./Components/Count";

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <ProductList />
      <Footer />
      <Count />
    </>
  );
}

export default App;
