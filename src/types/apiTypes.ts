export type CategoryType = {
  id: string;
  name: string;
};

export type ProductType = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  shipping: { free_shipping: boolean },
};
