import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CartProps {
  handleDrawerToggle: () => void;
  isDrawerOpen: boolean;
}
const CartDrawer: React.FC<CartProps> = ({
  isDrawerOpen,
  handleDrawerToggle,
}) => {
  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full w-[30%] bg-slate-50 z-50 shadow-lg transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-[30px] flex justify-between items-center border-b">
          <h2 className="text-lg font-nav tracking-widest">CART</h2>
          <button
            onClick={handleDrawerToggle}
            className="text-gray-500 hover:text-black transition"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
        {/* Drawer Content */}

        <div className="p-4 w-full flex h-full items-center justify-center">
          <span className="tracking-widest font-nav text-sm text-center">
            YOUR CART IS EMPTY
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
