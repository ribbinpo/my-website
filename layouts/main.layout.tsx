import React from "react";

import Navbar from "@/components/navbar";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      <Navbar />
      <main className="px-24">{children}</main>
      <div>footer</div>
    </>
  );
};

export default MainLayout;
