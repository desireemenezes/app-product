export interface IProduct {
  id: number;
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
  amount: number;
  createdAt: string;
}

export interface IResponseProducts {
  data: IProduct[];
}

export interface ProductTableProps {
  products: IProduct[];
}
