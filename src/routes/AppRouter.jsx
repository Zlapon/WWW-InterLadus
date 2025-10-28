import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import MainLayout from "../layouts/Main/Main";
function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" />
        <Route path="/contact" />
        <Route path="/about" />
      </Route>
      <Route path="/auth/*" element={<Auth />} />
    </Routes>
  );
}
export default AppRouter;
