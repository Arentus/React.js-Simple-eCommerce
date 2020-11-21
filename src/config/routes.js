import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { User } from "../pages/User";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/user",
    component: User,
  },
];

export default routes;
