import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome Back!</h1>
          <p>You are successfully logged in.</p>

          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <p>Please log in to continue.</p>

          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginStatus;