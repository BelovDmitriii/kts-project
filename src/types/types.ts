export type ProductCategoryType = {
  id: number;
  name: string;
  image: string;
}

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategoryType,
  images: string[];
}