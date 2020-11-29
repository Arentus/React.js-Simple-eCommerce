import { Cart } from "../pages/Cart";
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
};

export default routes;
