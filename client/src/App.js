import AdminAuth from "./components/routes/AdminAuth";
import PrivateAuth from "./components/routes/Private";
import About from "./pages/About";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCat from "./pages/Admin/CreateCat";
import Products from "./pages/Admin/Products";
import Users from "./pages/Admin/Users";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import UserProfile from "./pages/UserProfile";
import UseOrder from "./pages/UserOrder";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/users/Dashboard";
import "./style.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateAuth />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<UserProfile />} />
          <Route path="user/orders" element={<UseOrder />} />
        </Route>
        <Route path="/dashboard" element={<AdminAuth />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="admin/category" element={<CreateCat />} />
          <Route path="admin/product" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
