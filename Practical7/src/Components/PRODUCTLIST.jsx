function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
    },
  ];

  return (
    <div>
      <h1>Product List</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;