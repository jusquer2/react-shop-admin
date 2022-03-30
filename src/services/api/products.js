import axios from 'axios';
import endPoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    accept: '*/*',
    headers: { 'Content-type': 'application/json' },
  };
  const response = await axios.post(endPoints.products.postProducts, body, config);
  return response.data;
};
const updateProduct = async (id, body) => {
  const config = {
    accept: '*/*',
    headers: { 'Content-type': 'application/json' },
  };
  const response = await axios.put(endPoints.products.putProducts(id), body, config);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

export { addProduct, deleteProduct, updateProduct };
