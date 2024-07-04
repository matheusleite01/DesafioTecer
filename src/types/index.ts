export type ProductProps = {
  id: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type GlobalContextProps = {
  cartDataProducts: ProductProps[];
  setCartDataProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  insertCartProducts: (products: ProductProps) => void;
  removeCartProducts: (id: string) => void;
};
