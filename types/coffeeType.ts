export interface CoffeeAlcoholInterface {
  id: string;
  name: string;
  type: string;
  alcohol: string;
  descritions: string;
  price: number;
  order: number;
  useInPdf: boolean;
  useInPdfWithAlergens: boolean;
  useInPdfWithQR: boolean;
  image: string;
}

export interface CoffeeInterface {
  id: string;
  name: string;
  type: string;
  descritions: string;
  price: number;
  order: number;
  useInPdf: boolean;
  useInPdfWithAlergens: boolean;
  useInPdfWithQR: boolean;
  image: string;
}
