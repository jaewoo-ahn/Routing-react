import {Route, Routes} from "react-router-dom";
import Products from "./components/Pages/Product";
import Welcome from "./components/Pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />

      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
