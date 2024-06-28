import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import TopButton from "../TopButton";

interface LayoutProps {
  header?: boolean;
  footer?: boolean;
  topBtn?: boolean;
}

function RouteLayout({
  header = true,
  footer = true,
  topBtn = true,
}: LayoutProps) {
  return (
    <>
      {header && <Header />}
      <Outlet />
      {topBtn && <TopButton />}
      {footer && <Footer />}
    </>
  );
}

export default RouteLayout;
