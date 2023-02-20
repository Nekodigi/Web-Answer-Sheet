import { ReactNode } from "react";
import { Footer } from "../organism/Footer";
import { Header } from "../organism/Header";

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
