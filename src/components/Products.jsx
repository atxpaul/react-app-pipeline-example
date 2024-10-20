import React, { useState } from 'react';
import './Products.css'; // Import the CSS specific to Products

function Products() {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const [productId, setProductId] = useState('');

  const fetchProducts = async () => {
    let url = 'https://fakestoreapi.com/products';
    if (productId) {
      url += `/${productId}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (productId) {
      setProductDetail(data);
      setProducts([]);
    } else {
      setProducts(data);
      setProductDetail(null);
    }
  };

  const clearContent = () => {
    setProducts([]);
    setProductDetail(null);
    setProductId('');
  };

  return (
    <div className="products-container">
      <input
        type="text"
        placeholder="Enter product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="product-id-input"
      />

      <button onClick={fetchProducts} className="fetch-button">Fetch Products</button>
      <button onClick={clearContent} className="clear-button">Clear</button>

      {products.length > 0 && (
        <table className="products-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <img src={product.image} alt={product.title} className="product-thumbnail" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {productDetail && (
        <div className="product-detail">
          <h3>{productDetail.title}</h3>
          <p><strong>Price:</strong> ${productDetail.price}</p>
          <p><strong>Description:</strong> {productDetail.description}</p>
          <img src={productDetail.image} alt={productDetail.title} className="product-detail-image" />
        </div>
      )}
    </div>
  );
}

export default Products;
