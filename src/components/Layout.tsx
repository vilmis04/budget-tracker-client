import { Outlet } from "react-router-dom";
import { AddEntryButton } from "./AddEntryButton";
import { MobileMenu } from "./MobileMenu";

export const Layout = () => (
  <div className="fixed top-0 bottom-0 left-0 right-0 bg-app-color-background">
    <MobileMenu />
    <Outlet />
    <AddEntryButton />
  </div>
);
