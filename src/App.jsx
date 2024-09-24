import { Flowbite } from "flowbite-react/components/Flowbite";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyComponent from "./components/demo/classComponentDemo/ClassComponentDemo";
import Layout from "./layouts/Layout";
import { customTheme } from "./theme/customTheme";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout cart={cart} setCart={setCart} />}>
            {/* new MyComponent({name: "Ram"}) */}
            <Route path="/" element={<MyComponent name="Ram" />} />
            {/* <Route path="/" element={<UseReducerDemo />} /> */}
            {/* <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route
              path="/product/:id"
              element={<ProductDetails cart={cart} setCart={setCart} />}
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}

export default App;
