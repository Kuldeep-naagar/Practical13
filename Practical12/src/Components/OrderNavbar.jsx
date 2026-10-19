import { NavLink } from "react-router-dom";

function OrderNavbar() {
  return (
    <nav className="order-navbar">
      <NavLink to="/orders/current" className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }>
        <span className="nav-icon">◈</span>
        Current Orders
      </NavLink>

      <NavLink to="/orders/history" className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }>
        <span className="nav-icon">◷</span>
        Order History
      </NavLink>

      <NavLink to="/orders/cancelled" className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }>
        <span className="nav-icon">×</span>
        Cancelled Orders
      </NavLink>
    </nav>
  );
}

export default OrderNavbar;