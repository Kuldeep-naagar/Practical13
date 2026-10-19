function CancelledOrders() {
  const orders = [
    {
      id: "#ORD-091",
      customer: "Ankit",
      product: "Gaming Mouse",
      amount: "₹2,000",
      reason: "Cancelled by customer",
    },
    {
      id: "#ORD-089",
      customer: "Madhav",
      product: "Bluetooth Speaker",
      amount: "₹3,000",
      reason: "Payment issue",
    },
  ];

  return (
    <div className="order-section">
      <div className="section-title">
        <div>
          <h3>Cancelled Orders</h3>
          <p>Orders that were cancelled.</p>
        </div>
        <span className="count-badge">{orders.length} Orders</span>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-row" key={order.id}>
            <div className="order-symbol red-symbol">×</div>

            <div className="order-main">
              <strong>{order.id}</strong>
              <span>{order.customer} · {order.product}</span>
            </div>

            <div className="order-amount">{order.amount}</div>

            <span className="status-badge cancelled">
              {order.reason}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancelledOrders;