import { Flowbite } from "flowbite-react/components/Flowbite";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyComponent from "./components/demo/classComponentDemo/ClassComponentDemo";
import Layout from "./layouts/Layout";
import { customTheme } from "./theme/customTheme";
import { Button } from "flowbite-react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { buy, restock } from "./redux/slices/mobilesSlice";

function App() {
  const [cart, setCart] = useState([]);
  const [showMyComp, setShowMyComp] = useState(true);

  const mobiles = useSelector((store) => {
    return store.mobile.mobiles;
  });

  const dispatch = useDispatch();

  function handleBuy() {
    // console.log(buy());
    dispatch(buy());
  }

  function handleRestock() {
    dispatch(restock(5));
  }

  return (
    <>
      <div className="flex items-center gap-4 p-8">
        <Button onClick={handleBuy}>Buy</Button>
        <p className="text-4xl">{mobiles}</p>
        <Button onClick={handleRestock}>Restock</Button>
      </div>

      {/* <Flowbite theme={{ theme: customTheme }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout cart={cart} setCart={setCart} />}>
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
              <Route path="/" element={<UseReducerDemo />} />
              <Route
                path="/"
                element={<Home cart={cart} setCart={setCart} />}
              />
              <Route
                path="/product/:id"
                element={<ProductDetails cart={cart} setCart={setCart} />}
              />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Flowbite> */}
    </>
  );
}

export default App;
