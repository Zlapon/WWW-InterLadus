import { Route, Routes } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import RecoverPassword from "../pages/auth/RecoverPassword";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
function Auth() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="recover-password" element={<RecoverPassword />} />
        <Route path="logout" />
      </Route>
    </Routes>
  );
}
export default Auth;
