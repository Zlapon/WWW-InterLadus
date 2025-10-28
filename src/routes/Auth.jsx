import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Auth/Signup";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
function Auth() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" />
        <Route path="signup" element={<Signup />} />
        <Route path="recover-password" />
        <Route path="logout" />
      </Route>
    </Routes>
  );
}
export default Auth;
