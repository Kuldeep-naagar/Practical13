function CurrentOrders() {
  const orders = [
    {
      id: "#ORD-101",
      customer: "Kuldeep",
      product: "Laptop Pro",
      amount: "₹65,000",
      status: "Processing",
    },
    {
      id: "#ORD-102",
      customer: "Madhav",
      product: "Wireless Headphones",
      amount: "₹3,500",
      status: "Shipped",
    },
    {
      id: "#ORD-103",
      customer: "Ankit",
      product: "Mechanical Keyboard",
      amount: "₹4,500",
      status: "Processing",
    },
  ];

  return (
    <div className="order-section">
      <div className="section-title">
        <div>
          <h3>Current Orders</h3>
          <p>Orders currently being processed or delivered.</p>
        </div>
        <span className="count-badge">{orders.length} Orders</span>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-row" key={order.id}>
            <div className="order-symbol purple-symbol">↗</div>

            <div className="order-main">
              <strong>{order.id}</strong>
              <span>{order.customer} · {order.product}</span>
            </div>

            <div className="order-amount">{order.amount}</div>

            <span
              className={`status-badge ${
                order.status === "Shipped" ? "shipped" : "processing"
              }`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrders;