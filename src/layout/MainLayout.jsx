import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>🔝 Навигация</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
