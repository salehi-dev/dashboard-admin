import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import UsersList from "./pages/Users/UsersList";
import Home from "./pages/home/Home";
import Product from "./pages/Product/Product";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
];
export default routes;
