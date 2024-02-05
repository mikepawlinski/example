import { PropsWithChildren } from "react";
import "./Layout.css";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="maxio-layout">{children}</div>;
};

export default Layout;
