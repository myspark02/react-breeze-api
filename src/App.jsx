import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPasword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/password-reset/:token" element={<ResetPasword />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
