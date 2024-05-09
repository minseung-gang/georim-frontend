import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  header?: boolean;
  footer?: boolean;
}

function RouteLayout({ header = true, footer = true }: LayoutProps) {
  return (
    <>
      {header && <Header />}
      <Outlet />
      {footer && <Footer />}
    </>
  );
}

export default RouteLayout;
