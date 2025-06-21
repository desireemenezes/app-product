export interface IProduct {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
  brand: string;
}

export interface IResponseProducts {
  data: IProduct[];
}

export interface ProductTableProps {
  products: IProduct[];
}
