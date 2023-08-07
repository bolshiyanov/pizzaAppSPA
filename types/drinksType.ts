export interface VinoInterface {
  id: string;
  name: string;
  marca: string;
  type: string;
  glass: boolean;
  bottle: boolean;
  descritions: string;
  priceGlass: number;
  priceBottle: number;
  image: string;
  };

  export interface AlcoholInterface {
    id: string;
    name: string;
    marca: string;
    type: string;
    shot: boolean;
    glass: boolean;
    bottle: boolean;
    descritions: string;
    priceGlass:number;
    priceShot: number;
    priceBottle: number;
    image: string;
  };

  export interface BeveragesInterface {
    id: string;
    name: string;
    marca: string;
    type: string;
    sizeSmall: string;
    sizeMidl: string;
    sizeBig: string;
    descritions: string;
    priceSmall: number;
    priceMidl: number;
    priceBig: number;
    image: string;
  };