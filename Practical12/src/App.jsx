import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Orders from "./pages/Orders";
import CurrentOrders from "./pages/CurrentOrders";
import OrderHistory from "./pages/OrderHistory";
import CancelledOrders from "./pages/CancelledOrders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<Orders />}>
          <Route index element={<Navigate to="current" replace />} />
          <Route path="current" element={<CurrentOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>

        <Route path="*" element={<Navigate to="/orders" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;