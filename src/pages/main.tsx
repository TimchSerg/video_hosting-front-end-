import Logout from "features/auth/Logout";
import React from "react";
import { Outlet } from "react-router-dom";

export const Main: React.FC = () => {

  return (
    <>
      <Logout />

      <div className="p-2 main-page">
        <Outlet />
      </div>

      
    </>
  );
}

export default Main;