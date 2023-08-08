import React from "react";
import Remove from "@/src/components/removeFromWishList";

import snacksClassicData from '@/data/menu/snacksData/snacksClassicData';
import snacksChefsData from '@/data/menu/snacksData/snacksChefsData';
import dishesFirstData from '@/data/menu/dishesData/dishesFirstData';
import dishesSaladData from '@/data/menu/dishesData/dishesSaladData';
import dishesSecondData from '@/data/menu/dishesData/dishesSecondData';
import dessertData from '@/data/menu/dessertData/dessertData';
import drinksBeveragesData from '@/data/menu/drinksData/drinksBeveragesData';
import drinksVineData from '@/data/menu/drinksData/drinksVineData';
import drinksAlcoholData from "@/data/menu/drinksData/drinksAlcoholData";
import dataCoffee from "@/data/menu/coffeeData/coffeeData";
import coffeeAlcohol from "@/data/menu/coffeeData/coffeeAlcohol";


const WishListCoffeeComponent = () => {
  return (
    <>
      <Remove data={snacksClassicData} />
      <Remove data={snacksChefsData} />
      
      <Remove data={dishesFirstData} />
      <Remove data={dishesSaladData} />
      <Remove data={dishesSecondData} />
      
      <Remove data={dessertData} />
      
      <Remove data={drinksBeveragesData} />
      <Remove data={drinksVineData} />
      <Remove data={drinksAlcoholData} />
      
      <Remove data={dataCoffee} />
      <Remove data={coffeeAlcohol} />
    </>
  );
};

export default WishListCoffeeComponent;
