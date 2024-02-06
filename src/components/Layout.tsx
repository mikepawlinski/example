import { PropsWithChildren } from "react";
import "./Layout.css";
import Sidebar from "./Sidebar";

type LayoutProps = PropsWithChildren<{
  dark?: boolean;
  withSidebar?: boolean;
  header?: React.ReactNode;
}>;

const Layout = ({ dark, withSidebar, header, children }: LayoutProps) => {
  return (
    <div className={`maxio-layout ${dark ? "maxio-layout--dark" : ""}`}>
      {header && <div className="maxio-layout__header">{header}</div>}

      {withSidebar && (
        <div className="maxio-layout__sidebar">
          <Sidebar />
        </div>
      )}
      <div className="maxio-layout__content">{children}</div>
    </div>
  );
};

export default Layout;
