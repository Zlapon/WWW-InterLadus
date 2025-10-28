import Navbar from "../../features/Navbar/Navbar";
import { Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <div className="auth-layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
