import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-white h-screen">
      <Outlet />
    </div>
  );
};

export default Root;
