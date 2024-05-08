const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const ENDPOINTS = {
  products: `${BASE_URL}/products`,
  oneProduct: (id:string):string => `${ENDPOINTS.products}/${id}`,
  categories: `${BASE_URL}/categories`,
};
