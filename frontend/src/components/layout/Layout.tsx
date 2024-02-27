import { ReactNode } from "react";
import Header from "../header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <Header />
      <div className="bg-[#F2F4F3] w-full h-full flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
