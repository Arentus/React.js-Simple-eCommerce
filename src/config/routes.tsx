import { Admin } from "../pages/admin/Admin";
import { Cart } from "../pages/Cart";
import { AddProduct } from "../pages/products/AddProduct";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { User } from "../pages/User";

const routes = {
  signIn: {
    path: "/signin",
    component: SignIn,
  },
  signUp: {
    path: "/signup",
    component: SignUp,
  },
};

export const privateRoutes = {
  user: {
    path: "/user",
    component: User,
  },
  cart: {
    path: "/cart",
    component: Cart,
  },
  admin: {
    path: "/admin",
    component: Admin,
  },

  adminAddProduct: {
    path: "/admin/add/product",
    component: AddProduct,
  },
};

export default routes;
