function OrderHistory() {
  const orders = [
    {
      id: "#ORD-098",
      customer: "Mayank",
      product: "Smartphone X",
      amount: "₹28,000",
      date: "12 Oct 2026",
    },
    {
      id: "#ORD-097",
      customer: "Nimisha",
      product: "Wireless Mouse",
      amount: "₹1,200",
      date: "08 Oct 2026",
    },
    {
      id: "#ORD-096",
      customer: "Dhruvika",
      product: "USB-C Hub",
      amount: "₹2,400",
      date: "02 Oct 2026",
    },
  ];

  return (
    <div className="order-section">
      <div className="section-title">
        <div>
          <h3>Order History</h3>
          <p>Previously completed orders.</p>
        </div>
        <span className="count-badge">{orders.length} Orders</span>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-row" key={order.id}>
            <div className="order-symbol blue-symbol">✓</div>

            <div className="order-main">
              <strong>{order.id}</strong>
              <span>{order.customer} · {order.product}</span>
            </div>

            <div className="order-amount">{order.amount}</div>

            <span className="status-badge completed">
              {order.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;