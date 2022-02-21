import {Route, Routes} from "react-router-dom";
import MainHeaders from "./components/MainHeaders";
import Products from "./components/Pages/Product";
import ProductsDetail from "./components/Pages/ProductsDetail";
import Welcome from "./components/Pages/Welcome";

function App() {
  return (
    <div>
      <MainHeaders />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:productId" element={<ProductsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
