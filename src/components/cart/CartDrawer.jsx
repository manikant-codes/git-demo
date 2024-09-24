import { Drawer } from "flowbite-react/components/Drawer";
import { HiShoppingCart } from "react-icons/hi";
import React, { useContext } from "react";
import CartItem from "./CartItem";
import { cartCtx } from "../../App";

function CartDrawer({ isOpen, handleClose }) {
  // const { cart, setCart } = useContext(cartCtx);
  return (
    <div>
      {/* <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Cart" titleIcon={HiShoppingCart} />
        {cart.map((cartItem) => {
          return <CartItem product={cartItem} cart={cart} setCart={setCart} />;
        })}
      </Drawer> */}
    </div>
  );
}

export default CartDrawer;
