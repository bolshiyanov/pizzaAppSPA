import React from "react";

import RemoveCoffeeWithAlcohol from "@/src/components/removeFromWishList/coffeeWithAlcohol";
import RemoveCoffee from "@/src/components/removeFromWishList/coffee";

const WishListCoffeeComponent = () => {
  return (
    <>
      <RemoveCoffee />
      <RemoveCoffeeWithAlcohol />
    </>
  );
};

export default WishListCoffeeComponent;
