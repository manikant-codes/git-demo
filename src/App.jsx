import { Flowbite } from "flowbite-react/components/Flowbite";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyComponent from "./components/demo/classComponentDemo/ClassComponentDemo";
import Layout from "./layouts/Layout";
import { customTheme } from "./theme/customTheme";
import { Button } from "flowbite-react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [cart, setCart] = useState([]);
  const [showMyComp, setShowMyComp] = useState(true);
  return (
    <Provider store={store}>
      <Flowbite theme={{ theme: customTheme }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout cart={cart} setCart={setCart} />}>
              {/* new MyComponent({name: "Ram"}) */}
              <Route
                path="/"
                element={
                  <>
                    <Button
                      onClick={() => {
                        setShowMyComp(!showMyComp);
                      }}
                    >
                      {!showMyComp ? "Show" : "Hide"}
                    </Button>
                    {showMyComp && <MyComponent name="Ram" />}
                  </>
                }
              />
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
    </Provider>
  );
}

export default App;
