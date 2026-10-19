import { Outlet } from "react-router-dom";
import OrderNavbar from "../Components/OrderNavbar";

function Orders() {
  return (
    <div className="dashboard">
      <header className="page-header">
        <div>
          <p className="eyebrow">WORKSPACE / ORDERS</p>
          <h1>
            Order <span>Management</span>
          </h1>
          <p className="subtitle">
            Track current orders and manage your order records.
          </p>
        </div>

        <div className="system-badge">
          <span className="status-dot"></span>
          System Online
        </div>
      </header>

      <section className="summary-grid">
        <div className="summary-card">
          <div className="summary-icon purple">CO</div>
          <div>
            <p>Current Orders</p>
            <h2>03</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon blue">OH</div>
          <div>
            <p>Order History</p>
            <h2>03</h2>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon red">CX</div>
          <div>
            <p>Cancelled Orders</p>
            <h2>02</h2>
          </div>
        </div>
      </section>

      <section className="orders-panel">
        <div className="panel-heading">
          <div>
            <h2>Order Directory</h2>
            <p>Select a category to view its orders.</p>
          </div>
          <span className="live-badge">LIVE VIEW</span>
        </div>

        <OrderNavbar />

        <div className="nested-content">
          <Outlet />
        </div>
      </section>

      <footer className="page-footer">
        <span>Order Management System</span>
        <span>Practical 2 · Nested Routing</span>
      </footer>
    </div>
  );
}

export default Orders;