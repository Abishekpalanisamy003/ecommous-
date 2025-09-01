const BASE_URL = 'http://localhost:8080/api/products';

export const fetchProducts = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

export const fetchProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
};

export const deleteProduct = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
};