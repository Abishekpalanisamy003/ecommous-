import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct(id).then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} className="img-fluid" />
      <p className="mt-3">{product.description}</p>
      <h4>₹{product.price}</h4>
      <button className="btn btn-success mt-2">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;