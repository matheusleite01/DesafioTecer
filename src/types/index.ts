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
