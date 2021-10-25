import { render } from "solid-js/web"
import { Router, useRoutes } from "solid-app-router";

import "virtual:windi.css"
import "virtual:windi-devtools"

import Sidebar from "./components/Sidebar";

import account_circle from "./assets/account_circle.svg"
import business from "./assets/business.svg"

import Index from "./routes/Index"
import Chomik from "./routes/Chomik"

const routes = [
  {
    name: "Index",
    path: "/",
    component: Index,
    icon: account_circle
  },
  {
    name: "Chomik",
    path: "/chomik",
    component: Chomik,
    icon: business
  }
];

const App = () => {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <div class="fixed top-0 left-0 w-[100vw] h-[100vh] bg-bg bg-b"> 
        <Sidebar routes={routes}/>
        <Routes />
      </div>
    </Router>
  );
};

render(App, document.getElementById("root"))