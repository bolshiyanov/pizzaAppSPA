export interface DessertlInterface {
  id: string;
  name: string;
  type: string;
  ingredients: string;
  alergens: string[];
  descritions: string;
  price: number;
  order: number;
  useInPdf: boolean;
  useInPdfWithAlergens: boolean;
  useInPdfWithQR: boolean;
  image: string;
}
