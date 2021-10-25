import { NavLink } from "solid-app-router";

// Credit: https://github.com/Beefers/site/blob/v4/src/components/Navbar.jsx

export default function ({ routes }) {
  return (
    <div class="flex flex-col px-2 py-2 shadow-md h-screen w-10 transition-colors bg-sidebar <md:h-10 <md:w-screen <md:flex-row">
      {routes.map((route) => (
        <NavLink class="w-6 h-6 md:mb-2 <md:mr-2" href={route.path} end>
          <img src={route.icon} alt={route.name} />
        </NavLink>
      ))}

      <style>{".active { opacity: 0.6; }"}</style>
    </div>
  );
}
