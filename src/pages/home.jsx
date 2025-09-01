import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mt-4" >
      <h2>Featured</h2>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" className="card-img-top" alt="Featured Product 1" />
            <div className="card-body">
              <h5 className="card-title">Smart Watch</h5>
              <p className="card-text">Explore our latest smart watches with health tracking features.</p>
              <Link to="/product/1" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pY3MlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1629701799178-d98725b72649?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="https://m.media-amazon.com/images/I/512f8pCW7vL._AC_UL320_.jpg" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="https://m.media-amazon.com/images/I/61J22sM6edL._AC_UL320_.jpg" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="https://m.media-amazon.com/images/I/619lCAgb8rL._AC_UL320_.jpg" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="https://m.media-amazon.com/images/I/618-45t0P5L._AC_UL320_.jpg" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
         <div className="col-md-6">
          <div className="card">
            <img src="https://m.media-amazon.com/images/I/51CcFKh-G1L._AC_UL320_.jpg" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
                 <div className="col-md-6">
          <div className="card">
            <img src="https://m.media-amazon.com/images/I/51EKHwiuVcL._AC_UL320_.jpg" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
                 <div className="col-md-6">
          <div className="card">
            <img src="https://m.media-amazon.com/images/I/61oPnvbXGqL._AC_UL320_.jpg" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
                 <div className="col-md-6">
          <div className="card">
            <img src="https://m.media-amazon.com/images/I/61eZ9VKwxnL._AC_UL320_.jpg" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
                 <div className="col-md-6">
          <div className="card">
            <img src="https://m.media-amazon.com/images/I/61Vu80YcolL._AC_UL320_.jpg" className="card-img-top" alt="Featured Product 2" />
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">Experience premium sound quality with noise cancellation.</p>
              <Link to="/product/2" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
        </div>
        
      </div>

      <h2>Products</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-3 mb-4">
            <div className="card">
              <img src={p.imageUrl} className="card-img-top" alt={p.name} />
              <div className="card-body">
                <h5>{p.name}</h5>
                <p>₹{p.price}</p>
                <Link to={`/product/${p.id}`} className="btn btn-primary">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;