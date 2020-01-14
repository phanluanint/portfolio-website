import React from "react";
import Counter from "../commons/Counter";
import Cart from "../commons/Cart";

const IndexContent: React.FC = () => {
  return (
    <body className="bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="relative">
          <h1 className="font-bold text-3xl text-center">
            react-hooks-mobx-state-tree
          </h1>
        </div>
        <Counter/>
        <Cart/>
      </div>
    </body>
  );
};

export default IndexContent;
